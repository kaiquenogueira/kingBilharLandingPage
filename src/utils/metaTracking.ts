// Meta Tracking Utility - Handles both Pixel and Conversions API

// Generate unique event ID for deduplication
function generateEventId() {
  return 'evt_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
}

// Send event to backend (Conversions API)
async function sendToConversionsAPI(eventName, eventId, userData = {}, customData = {}) {
  try {
    const response = await fetch('http://localhost:3001/api/meta-event', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        eventName,
        eventId,
        userData,
        customData,
        eventTime: Math.floor(Date.now() / 1000)
      })
    });

    const result = await response.json();
    
    if (!response.ok) {
      throw new Error(result.error || 'Failed to send event to Conversions API');
    }

    console.log('✅ Event sent to Conversions API:', result);
    return result;
  } catch (error) {
    console.error('❌ Error sending to Conversions API:', error);
    throw error;
  }
}

// Send event to Facebook Pixel
function sendToPixel(eventName, eventId, customData = {}) {
  if (typeof fbq !== 'undefined') {
    // Add event_id to custom data for deduplication
    const pixelData = {
      ...customData,
      event_id: eventId
    };

    fbq('track', eventName, pixelData);
    console.log('✅ Event sent to Pixel:', { eventName, eventId, customData: pixelData });
  } else {
    console.warn('⚠️ Facebook Pixel not loaded');
  }
}

// Main function to track events (sends to both Pixel and Conversions API)
export async function trackEvent(eventName, options = {}) {
  const {
    userData = {},
    customData = {},
    eventId = generateEventId(),
    sendToPixelOnly = false,
    sendToAPIOnly = false
  } = options;

  console.log(`🎯 Tracking event: ${eventName}`, { eventId, userData, customData });

  const promises = [];

  // Send to Pixel (unless API only)
  if (!sendToAPIOnly) {
    try {
      sendToPixel(eventName, eventId, customData);
    } catch (error) {
      console.error('Error sending to Pixel:', error);
    }
  }

  // Send to Conversions API (unless Pixel only)
  if (!sendToPixelOnly) {
    promises.push(
      sendToConversionsAPI(eventName, eventId, userData, customData)
        .catch(error => {
          console.error('Conversions API failed, but continuing...', error);
          return { success: false, error: error.message };
        })
    );
  }

  // Wait for API calls to complete
  if (promises.length > 0) {
    const results = await Promise.all(promises);
    return {
      eventId,
      pixelSent: !sendToAPIOnly,
      apiResults: results
    };
  }

  return {
    eventId,
    pixelSent: !sendToAPIOnly,
    apiResults: []
  };
}

// Convenience functions for common events
export const MetaEvents = {
  // Page View
  pageView: (customData = {}) => {
    return trackEvent('PageView', { customData });
  },

  // Lead (form submission)
  lead: (userData = {}, customData = {}) => {
    return trackEvent('Lead', { userData, customData });
  },

  // Purchase
  purchase: (userData = {}, customData = {}) => {
    // Ensure required purchase data
    const purchaseData = {
      currency: 'BRL',
      ...customData
    };
    return trackEvent('Purchase', { userData, customData: purchaseData });
  },

  // View Content
  viewContent: (customData = {}) => {
    return trackEvent('ViewContent', { customData });
  },

  // Add to Cart
  addToCart: (customData = {}) => {
    const cartData = {
      currency: 'BRL',
      ...customData
    };
    return trackEvent('AddToCart', { customData: cartData });
  },

  // Initiate Checkout
  initiateCheckout: (customData = {}) => {
    const checkoutData = {
      currency: 'BRL',
      ...customData
    };
    return trackEvent('InitiateCheckout', { customData: checkoutData });
  },

  // Contact (WhatsApp click, phone call, etc.)
  contact: (userData = {}, customData = {}) => {
    return trackEvent('Contact', { userData, customData });
  },

  // Custom event
  custom: (eventName, userData = {}, customData = {}) => {
    return trackEvent(eventName, { userData, customData });
  }
};

// Auto-track page views on load
if (typeof window !== 'undefined') {
  // Track initial page view
  window.addEventListener('load', () => {
    MetaEvents.pageView({
      page_title: document.title,
      page_location: window.location.href
    });
  });
}

export default MetaEvents;