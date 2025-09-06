import React from 'react';
import { Phone, MapPin, Mail, MessageCircle } from 'lucide-react';

const Contact = () => {
  const whatsapp1 = "5519974234236";
  const whatsapp2 = "5519994863115";
  const message = "Olá! Gostaria de saber mais sobre as mesas de bilhar King Bilhar.";
  const whatsappUrl1 = `https://wa.me/${whatsapp1}?text=${encodeURIComponent(message)}`;
  const whatsappUrl2 = `https://wa.me/${whatsapp2}?text=${encodeURIComponent(message)}`;

  return (
    <section id="contato" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Fale <span className="text-orange-500">Conosco</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Pronto para ter sua mesa de bilhar dos sonhos? Fale conosco pelo WhatsApp 
              e tire todas as suas dúvidas sobre nossos produtos.
            </p>
          </div>

          {/* WhatsApp CTA */}
          <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-8 md:p-12 mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
                <MessageCircle className="w-10 h-10 text-green-500" />
              </div>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Fale Conosco no WhatsApp
            </h3>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Atendimento rápido e personalizado. Tire suas dúvidas, solicite orçamentos 
              e conheça nossos modelos disponíveis.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={whatsappUrl1}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 bg-white text-green-600 hover:bg-gray-100 px-6 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                <MessageCircle className="w-6 h-6" />
                <span>WhatsApp (19) 97423-4236</span>
              </a>
              <a
                href={whatsappUrl2}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 bg-white text-green-600 hover:bg-gray-100 px-6 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                <MessageCircle className="w-6 h-6" />
                <span>WhatsApp (19) 99486-3115</span>
              </a>
            </div>
          </div>

          {/* Contact Information Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700">
              <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">WhatsApp</h3>
              <p className="text-gray-300 mb-2">
                <a href={whatsappUrl1} target="_blank" rel="noopener noreferrer" className="hover:text-orange-400">(19) 97423-4236</a>
              </p>
              <p className="text-gray-300 mb-2">
                <a href={whatsappUrl2} target="_blank" rel="noopener noreferrer" className="hover:text-orange-400">(19) 99486-3115</a>
              </p>
              <p className="text-sm text-gray-400">WhatsApp sempre disponível</p>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700">
              <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Localização</h3>
              <p className="text-gray-300 mb-2">Campinas - SP</p>
              <p className="text-sm text-gray-400">Atendemos todo Brasil</p>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700">
              <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Email</h3>
              <p className="text-gray-300 mb-2">
                <a href="mailto:kingbilhar1@gmail.com" className="hover:text-orange-400">kingbilhar1@gmail.com</a>
              </p>
              <p className="text-sm text-gray-400">Resposta em até 24h</p>
            </div>
          </div>

          {/* Additional CTA */}
          <div className="mt-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-white mb-6">
              Dúvidas sobre qual modelo escolher?
            </h3>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Nossa equipe especializada pode ajudar você a escolher o modelo ideal 
              para seu espaço e necessidades.
            </p>
            <a
              href={whatsappUrl1}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 bg-white text-orange-500 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              <MessageCircle className="w-6 h-6" />
              <span>Falar com Especialista</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;