import React from 'react';
import { TreePine, Gem, Hammer, Award } from 'lucide-react';

const ValueProposition = () => {
  const features = [
    {
      icon: Award,
      title: "Design Residencial Premium",
      description: "Acabamento superior pensado especialmente para o ambiente doméstico"
    },
    {
      icon: Gem,
      title: "Acessórios Completos Inclusos",
      description: "6 tacos, jogo de bolas, bolão, giz, taqueira, triângulo, capa e pés niveladores"
    },
    {
      icon: TreePine,
      title: "Parcelamento Facilitado",
      description: "Até 10x no cartão ou condições especiais à vista"
    },
    {
      icon: Hammer,
      title: "Suporte Próximo",
      description: "Acompanhamento completo do pedido até a montagem em sua casa"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Por que escolher a <span className="text-orange-500">King Bilhar</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Combinamos tradição artesanal com materiais premium para criar mesas de bilhar 
            que são verdadeiras obras de arte funcionais.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-gray-900 to-black rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Mais de <span className="text-orange-500">20 anos</span> de experiência em marcenaria
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Nossa equipe domina as técnicas tradicionais de marcenaria, 
            garantindo que cada mesa seja uma peça única e durável.
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105">
            Conheça nosso processo
          </button>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;