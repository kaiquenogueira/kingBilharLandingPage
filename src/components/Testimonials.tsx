import React from 'react';
import { Star, Quote } from 'lucide-react';
import cacapaPreta from '../assets/cacapaPreta.jpeg';
import cacapaLaranja from '../assets/cacapaLaranja.jpeg';
import redeVermelha from '../assets/redeVermelha.jpeg';
import mesaLuxoDiamante from '../assets/mesaLuxoDiamante/WhatsApp Image 2025-10-07 at 13.36.40.jpeg';
import mesaLuxoMarques from '../assets/mesaLuxoMarques/WhatsApp Image 2025-10-07 at 13.31.36.jpeg';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Carlos Silva",
      location: "São Paulo - SP",
      rating: 5,
      text: "Mesa de qualidade excepcional! O acabamento é premium e os acessórios inclusos são de primeira. Recomendo!",
      image: cacapaPreta
    },
    {
      name: "Ana Carolina",
      location: "Campinas - SP",
      rating: 5,
      text: "Atendimento impecável e entrega dentro do prazo. A mesa ficou perfeita na nossa área de lazer.",
      image: cacapaLaranja
    },
    {
      name: "Roberto Santos",
      location: "Ribeirão Preto - SP",
      rating: 5,
      text: "Excelente custo-benefício! Parcelamento facilitado e montagem profissional. Estamos muito satisfeitos.",
      image: redeVermelha
    },
    {
      name: "Eduardo Marques",
      location: "Santos - SP",
      rating: 5,
      text: "A Mesa Luxo DIAMANTE superou todas as expectativas! O design é sofisticado e a qualidade é incomparável. Vale cada centavo investido.",
      image: mesaLuxoDiamante
    },
    {
      name: "Patricia Lima",
      location: "Sorocaba - SP",
      rating: 5,
      text: "Comprei a Mesa Luxo MARQUES e estou apaixonada! O acabamento em Jequitibá-Rosa é lindíssimo e o tampo de jantar é muito prático.",
      image: mesaLuxoMarques
    }
  ];

  return (
    <section id="depoimentos" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            O que nossos <span className="text-orange-500">clientes dizem</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Mais de 6000 clientes satisfeitos confiam na qualidade King Bilhar. 
            Veja alguns depoimentos de quem já transformou seu lar.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative"
            >
              <div className="absolute -top-4 left-8">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                  <Quote className="w-4 h-4 text-white" />
                </div>
              </div>

              <div className="pt-4">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>

                <p className="text-gray-700 leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 md:p-12 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center items-center space-x-2 mb-6">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-300 fill-current" />
                ))}
              </div>
              <span className="text-2xl font-bold text-white">4.9/5</span>
            </div>

            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Mais de 6000 clientes satisfeitos
            </h3>

            <p className="text-xl text-orange-100 mb-8 leading-relaxed">
              Nossa reputação foi construída mesa por mesa, cliente por cliente. 
              Junte-se à família King Bilhar e descubra por que somos referência em qualidade.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-3xl font-bold text-white mb-2">6000+</div>
                <div className="text-orange-100">Mesas Entregues</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-3xl font-bold text-white mb-2">99%</div>
                <div className="text-orange-100">Clientes Satisfeitos</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-3xl font-bold text-white mb-2">6 Meses</div>
                <div className="text-orange-100">Garantia Média</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
