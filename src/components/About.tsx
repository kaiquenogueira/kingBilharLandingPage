import React from 'react';
import { Award, Star, Zap, Shield } from 'lucide-react';

const About = () => {
  const stats = [
    {
      icon: Award,
      value: "6.000+",
      label: "Mesas entregues"
    },
    {
      icon: Star,
      value: "98%",
      label: "Satisfação"
    },
    {
      icon: Zap,
      value: "Rápido",
      label: "Tempo de resposta"
    },
    {
      icon: Shield,
      value: "100%",
      label: "Garantia"
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Sobre a <span className="text-orange-500">King Bilhar</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mb-8"></div>
            </div>

            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                Especializados em mesas de bilhar residenciais, combinamos tradição artesanal com design moderno para criar produtos únicos que transformam sua casa em um espaço de lazer premium.
              </p>

              <div>
                <h3 className="text-2xl font-semibold text-white mb-3">Nossa História</h3>
                <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mb-4"></div>
                <p>
                  A King Bilhar nasceu da paixão pelo esporte e pela qualidade artesanal brasileira. Com mais de 7 anos de experiência no mercado, identificamos uma necessidade: mesas de bilhar verdadeiramente pensadas para o ambiente residencial, sem abrir mão da qualidade profissional.
                </p>
              </div>

              <p>
                Cada mesa é cuidadosamente desenvolvida por nossa equipe de artesãos especializados, que combinam técnicas tradicionais com materiais premium para criar produtos que são verdadeiras obras de arte funcionais.
              </p>

              <p>
                Nosso compromisso vai além da venda: acompanhamos nossos clientes em toda a jornada, desde a escolha do modelo ideal até a montagem perfeita em sua residência.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            {/* Removida a imagem conforme solicitação do usuário */}

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 text-center"
                >
                  <stat.icon className="w-8 h-8 text-orange-500 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;