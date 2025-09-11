import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';
import crypto from 'crypto';
import https from 'https';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Meta Conversions API Configuration
const PIXEL_ID = '3234714166704281';
const ACCESS_TOKEN = process.env.META_ACCESS_TOKEN || 'EAAPwL8VKqkABPbuPMqMYUtMLxG6mXhGgXLgeZCL8oh8xHDVcgZCo5eclR5MeYDBsmP3Mn4NJwInR6645lgvmree4i8d9l0AhHZA6y24hKvKXmRVaH7Yy0Dudb3BSJSrVAnJiEEZAMUtVLqrztODQmGuRHZAfv3eUkJhhfmfVGHKBUXZBfv7sMjMUCBVC7ZCIKjtQgZDZD';
const API_VERSION = 'v19.0';

// Middleware
app.use(cors());
app.use(express.json());

// Utility functions
function hashData(data) {
  if (!data) return null;
  return crypto.createHash('sha256').update(data.toLowerCase().trim()).digest('hex');
}

function generateEventId() {
  return crypto.randomBytes(16).toString('hex');
}

function sendToMeta(eventData) {
  return new Promise((resolve, reject) => {
    const postData = JSON.stringify({
      data: [eventData],
      test_event_code: process.env.NODE_ENV === 'production' ? undefined : 'TEST12345'
    });

    const options = {
      hostname: 'graph.facebook.com',
      port: 443,
      path: `/${API_VERSION}/${PIXEL_ID}/events?access_token=${ACCESS_TOKEN}`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(postData)
      }
    };

    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      res.on('end', () => {
        try {
          const response = JSON.parse(data);
          resolve(response);
        } catch (error) {
          reject(error);
        }
      });
    });

    req.on('error', (error) => {
      reject(error);
    });

    req.write(postData);
    req.end();
  });
}

// API Routes
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'Meta Conversions API Server is running',
    timestamp: new Date().toISOString(),
    pixelId: PIXEL_ID
  });
});

app.post('/api/meta-event', async (req, res) => {
  try {
    const { eventName, eventId, userData, customData, eventTime } = req.body;

    if (!eventName) {
      return res.status(400).json({ error: 'eventName is required' });
    }

    const eventData = {
      event_name: eventName,
      event_time: eventTime || Math.floor(Date.now() / 1000),
      event_id: eventId || generateEventId(),
      action_source: 'website',
      event_source_url: req.headers.referer || req.headers.origin || 'https://your-domain.com',
      user_data: {},
      custom_data: customData || {}
    };

    if (userData) {
      if (userData.email) eventData.user_data.em = [hashData(userData.email)];
      if (userData.phone) eventData.user_data.ph = [hashData(userData.phone)];
      if (userData.firstName) eventData.user_data.fn = [hashData(userData.firstName)];
      if (userData.lastName) eventData.user_data.ln = [hashData(userData.lastName)];
      if (userData.city) eventData.user_data.ct = [hashData(userData.city)];
      if (userData.state) eventData.user_data.st = [hashData(userData.state)];
      if (userData.country) eventData.user_data.country = [hashData(userData.country)];
      if (userData.zipCode) eventData.user_data.zp = [hashData(userData.zipCode)];
    }

    eventData.user_data.client_ip_address = req.ip || req.connection.remoteAddress;
    eventData.user_data.client_user_agent = req.headers['user-agent'];

    const response = await sendToMeta(eventData);
    
    console.log('Event sent to Meta:', {
      eventName,
      eventId: eventData.event_id,
      response
    });

    res.json({
      success: true,
      eventId: eventData.event_id,
      message: 'Event sent successfully',
      response
    });

  } catch (error) {
    console.error('Error sending event to Meta:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to send event to Meta',
      details: error.message
    });
  }
});

// Serve static files (frontend)
app.use(express.static(path.join(__dirname, '../public')));

// SPA fallback - serve index.html for all non-API routes
app.get('*', (req, res) => {
  if (!req.path.startsWith('/api')) {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Full-stack server running on port ${PORT}`);
  console.log(`📱 Frontend: http://localhost:${PORT}`);
  console.log(`🔗 API: http://localhost:${PORT}/api`);
  console.log(`🏥 Health: http://localhost:${PORT}/api/health`);
  console.log(`📊 Pixel ID: ${PIXEL_ID}`);
  console.log(`🌍 Environment: ${process.env.NODE_ENV || 'development'}`);
});

export default app;