import React from 'react';
import { Truck, CreditCard, Home, Phone, Shield, MapPin } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: Truck,
      title: "Entrega Gratis",
      description: "Entregamos em diversas regiões com prazo que varia conforme localização",
      highlight: "Sob demanda"
    },
    {
      icon: Shield,
      title: "Garantia Inclusa",
      description: "Todas as nossas mesas possuem garantia de qualidade e assistência",
      highlight: "Tranquilidade total"
    },
    {
      icon: Phone,
      title: "Suporte Rápido",
      description: "Atendimento ágil e suporte completo do pedido até a entrega",
      highlight: "Acompanhamento total"
    }
  ];

  const whatsapp1 = "5519974234236";
  const message = "Olá! Gostaria de saber mais sobre as mesas de bilhar King Bilhar.";
  const whatsappUrl1 = `https://wa.me/${whatsapp1}?text=${encodeURIComponent(message)}`;

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Vantagens <span className="text-orange-500">exclusivas</span> King Bilhar
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Quando você escolhe a King Bilhar, está investindo em muito mais que uma mesa. 
            Está investindo em uma experiência completa de excelência.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-orange-500 transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-orange-500 transition-colors">
                    {benefit.title}
                  </h3>
                  <div className="bg-orange-500 text-white text-xs px-3 py-1 rounded-full inline-block mb-3">
                    {benefit.highlight}
                  </div>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Pronto para ter sua mesa dos sonhos?
            </h3>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Entre em contato agora e receba um orçamento personalizado em menos de 24 horas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={whatsappUrl1}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                WhatsApp: (19) 97423-4236
              </a>
              <button className="border-2 border-white text-white hover:bg-white hover:text-orange-500 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300">
                Solicitar Orçamento
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;