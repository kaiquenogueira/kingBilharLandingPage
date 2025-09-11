import express from 'express';
import cors from 'cors';
import crypto from 'crypto';
import https from 'https';

const app = express();
const PORT = process.env.PORT || 3001;

// Meta Conversions API Configuration
const PIXEL_ID = '3234714166704281';
const ACCESS_TOKEN = 'EAAPwL8VKqkABPbuPMqMYUtMLxG6mXhGgXLgeZCL8oh8xHDVcgZCo5eclR5MeYDBsmP3Mn4NJwInR6645lgvmree4i8d9l0AhHZA6y24hKvKXmRVaH7Yy0Dudb3BSJSrVAnJiEEZAMUtVLqrztODQmGuRHZAfv3eUkJhhfmfVGHKBUXZBfv7sMjMUCBVC7ZCIKjtQgZDZD';
const API_VERSION = 'v19.0';

// Middleware
app.use(cors());
app.use(express.json());

// Utility function to hash user data
function hashData(data) {
  if (!data) return null;
  return crypto.createHash('sha256').update(data.toLowerCase().trim()).digest('hex');
}

// Utility function to generate event ID
function generateEventId() {
  return crypto.randomBytes(16).toString('hex');
}

// Function to send event to Meta Conversions API
function sendToMeta(eventData) {
  return new Promise((resolve, reject) => {
    const postData = JSON.stringify({
      data: [eventData],
      test_event_code: 'TEST12345' // Remove in production
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

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'Meta Conversions API Server is running' });
});

// Main endpoint to receive events from frontend
app.post('/api/meta-event', async (req, res) => {
  try {
    const { eventName, eventId, userData, customData, eventTime } = req.body;

    // Validate required fields
    if (!eventName) {
      return res.status(400).json({ error: 'eventName is required' });
    }

    // Prepare event data for Meta
    const eventData = {
      event_name: eventName,
      event_time: eventTime || Math.floor(Date.now() / 1000),
      event_id: eventId || generateEventId(),
      action_source: 'website',
      event_source_url: req.headers.referer || 'https://your-domain.com',
      user_data: {},
      custom_data: customData || {}
    };

    // Hash and add user data if provided
    if (userData) {
      if (userData.email) {
        eventData.user_data.em = [hashData(userData.email)];
      }
      if (userData.phone) {
        eventData.user_data.ph = [hashData(userData.phone)];
      }
      if (userData.firstName) {
        eventData.user_data.fn = [hashData(userData.firstName)];
      }
      if (userData.lastName) {
        eventData.user_data.ln = [hashData(userData.lastName)];
      }
      if (userData.city) {
        eventData.user_data.ct = [hashData(userData.city)];
      }
      if (userData.state) {
        eventData.user_data.st = [hashData(userData.state)];
      }
      if (userData.country) {
        eventData.user_data.country = [hashData(userData.country)];
      }
      if (userData.zipCode) {
        eventData.user_data.zp = [hashData(userData.zipCode)];
      }
    }

    // Add client IP and user agent
    eventData.user_data.client_ip_address = req.ip || req.connection.remoteAddress;
    eventData.user_data.client_user_agent = req.headers['user-agent'];

    // Send to Meta
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

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Meta Conversions API Server running on port ${PORT}`);
  console.log(`📊 Pixel ID: ${PIXEL_ID}`);
  console.log(`🔗 Health check: http://localhost:${PORT}/health`);
});

export default app;