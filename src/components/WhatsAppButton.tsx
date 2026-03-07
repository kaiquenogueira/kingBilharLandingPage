import React from 'react';
import { MessageCircle } from 'lucide-react';
import { MetaEvents } from '../utils/metaTracking';

const WhatsAppButton = () => {
  const phoneNumber = "5519994863115";
  const message = "Olá! Gostaria de saber mais sobre as mesas de bilhar King Bilhar.";
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  const handleWhatsAppClick = async () => {
    try {
      await MetaEvents.contact(
        { phone: phoneNumber },
        { 
          contact_method: 'whatsapp',
          button_type: 'floating_button',
          phone_number: phoneNumber
        }
      );
    } catch (error) {
      console.error('Error tracking WhatsApp floating button click:', error);
    }
  };

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 animate-bounce"
      style={{ animationDuration: '2s', animationIterationCount: 'infinite' }}
      aria-label="Fale conosco no WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
      <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
        <span className="text-xs font-bold">1</span>
      </div>
      
      <div className="absolute bottom-full right-0 mb-2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Fale conosco no WhatsApp!
        <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
      </div>
    </a>
  );
};

export default WhatsAppButton;
