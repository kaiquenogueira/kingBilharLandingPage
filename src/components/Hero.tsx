import React from 'react';
import { ArrowRight, Star, Truck, CreditCard } from 'lucide-react';
import cacapaPreta from '../assets/cacapaPreta.jpeg';

const Hero = () => {
  const whatsappUrl = `https://wa.me/5519974234236?text=${encodeURIComponent(
    'Olá! Gostaria de saber mais sobre as mesas de bilhar King Bilhar.'
  )}`;

  return (
    <section id="inicio" className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                Mesas de Bilhar para Residência
                <span className="text-orange-500 block">Estilo e Lazer em Casa</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Modelos caçapa e redinha com acabamento premium.
                <span className="block font-semibold text-orange-400 mt-2">
                  Entrega e montagem sob demanda.
                </span>
              </p>
            </div>

            <div className="flex flex-wrap gap-6">
              <div className="flex items-center space-x-2 bg-gray-800 px-4 py-2 rounded-full">
                <Star className="w-5 h-5 text-yellow-500" />
                <span className="text-sm">Qualidade Premium</span>
              </div>
              <div className="flex items-center space-x-2 bg-gray-800 px-4 py-2 rounded-full">
                <Truck className="w-5 h-5 text-green-500" />
                <span className="text-sm">Entrega Gratuita</span>
              </div>
              <div className="flex items-center space-x-2 bg-gray-800 px-4 py-2 rounded-full">
                <CreditCard className="w-5 h-5 text-blue-500" />
                <span className="text-sm">Pague na Entrega</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#produtos" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
                <span>Ver Modelos</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300"
              >
                Falar no WhatsApp
              </a>
            </div>

            <div className="pt-8">
              <p className="text-gray-400 text-sm mb-4">Mais de 500 clientes satisfeitos desde 2021</p>
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                ))}
                <span className="ml-2 text-gray-300">4.9/5 - Avaliação dos clientes</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 shadow-2xl">
              <img
                src={cacapaPreta}
                alt="Mesa de Bilhar King - Madeira Jequitibá Rosa"
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-white text-gray-900 p-6 rounded-lg shadow-xl">
              <div className="text-center">
                <p className="text-2xl font-bold text-orange-500">A partir de</p>
                <p className="text-3xl font-bold text-gray-900">R$ 3.300</p>
                <p className="text-sm text-gray-600">à vista ou</p>
                <p className="text-lg font-semibold">10x no cartão</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;