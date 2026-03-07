import React, { useState } from 'react';
import { Filter, ShoppingCart } from 'lucide-react';
import cacapaLaranja from '../assets/cacapaLaranja.jpeg';
import cacapaPreta from '../assets/cacapaPreta.jpeg';
import redePreta from '../assets/redePreta.jpeg';
import redeVermelha from '../assets/redeVermelha.jpeg';
import mesaLuxoDiamante1 from '../assets/mesaLuxoDiamante/WhatsApp Image 2025-10-07 at 13.36.40.jpeg';
import mesaLuxoDiamante2 from '../assets/mesaLuxoDiamante/WhatsApp Image 2025-10-07 at 13.36.52.jpeg';
import mesaLuxoMarques1 from '../assets/mesaLuxoMarques/WhatsApp Image 2025-10-07 at 13.31.36.jpeg';

const ProductGallery = () => {
  const [activeFilter, setActiveFilter] = useState('Todos');

  const products = [
    {
      id: 1,
      type: 'Caçapa',
      name: 'Mesa Caçapa 1,90 × 1,20',
      price: 3600,
      installments: 387,
      image: cacapaPreta,
      accessories: ['6 tacos', 'jogo de bolas', 'bolão', 'giz', 'taqueira', 'triângulo', 'capa', 'pés niveladores']
    },
    {
      id: 2,
      type: 'Caçapa',
      name: 'Mesa Caçapa 2,26 × 1,26',
      price: 3950,
      installments: 420,
      image: cacapaLaranja,
      accessories: ['6 tacos', 'jogo de bolas', 'bolão', 'giz', 'taqueira', 'triângulo', 'capa', 'pés niveladores']
    },
    {
      id: 3,
      type: 'Redinha',
      name: 'Mesa Redinha 1,85 × 1,14',
      price: 3300,
      installments: 367,
      image: redePreta,
      accessories: ['6 tacos', 'jogo de bolas', 'bolão', 'giz', 'taqueira', 'triângulo', 'capa', 'pés niveladores']
    },
    {
      id: 4,
      type: 'Redinha',
      name: 'Mesa Redinha 2,20 × 1,20',
      price: 3550,
      installments: 395,
      image: redeVermelha,
      accessories: ['6 tacos', 'jogo de bolas', 'bolão', 'giz', 'taqueira', 'triângulo', 'capa', 'pés niveladores']
    },
    {
      id: 5,
      type: 'Luxo',
      name: 'Mesa Luxo DIAMANTE 1,95 × 1,25',
      price: 19990,
      installments: 2220,
      image: mesaLuxoDiamante1,
      accessories: ['6 tacos', '1 kit de giz', '1 jogo de bolas', '1 triângulo', '1 tampo de jantar', '1 kit de ping pong'],
      description: 'A Mesa Luxo Diamante é a escolha perfeita para quem busca sofisticação, durabilidade e design exclusivo. Com estrutura em metalon e madeira e caçapas embutidas, oferece acabamento refinado e máxima performance para momentos de lazer com elegância.'
    },
    {
      id: 6,
      type: 'Luxo',
      name: 'Mesa Luxo DIAMANTE 2,26 × 1,26',
      price: 22399,
      installments: 2487,
      image: mesaLuxoDiamante2,
      accessories: ['6 tacos', '1 kit de giz', '1 jogo de bolas', '1 triângulo', '1 tampo de jantar', '1 kit de ping pong'],
      description: 'A Mesa Luxo Diamante é a escolha perfeita para quem busca sofisticação, durabilidade e design exclusivo. Com estrutura em metalon e madeira e caçapas embutidas, oferece acabamento refinado e máxima performance para momentos de lazer com elegância.'
    },
    {
      id: 7,
      type: 'Luxo',
      name: 'Mesa Luxo MARQUES 1,95 × 1,25',
      price: 18699,
      installments: 2076,
      image: mesaLuxoMarques1,
      accessories: ['6 tacos', '1 kit de giz', '1 jogo de bolas', '1 triângulo', '1 tampo de jantar', '1 kit de ping pong'],
      description: 'A Mesa Luxo MARQUES une sofisticação, resistência e acabamento de alto padrão. Produzida com estrutura em madeira e metalon, campo em pedra ardósia, e tabelas em madeira maciça Jequitibá-Rosa, estofadas internamente para garantir performance e conforto no jogo.'
    }
  ];

  const filters = ['Todos', 'Caçapa', 'Redinha', 'Luxo'];

  const filteredProducts = activeFilter === 'Todos' 
    ? products 
    : products.filter(product => product.type === activeFilter);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price);
  };

  return (
    <section id="produtos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nosso <span className="text-orange-500">Catálogo</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Escolha o modelo ideal para sua residência. Todos incluem acessórios completos.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 p-2 rounded-xl inline-flex space-x-2">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-orange-500 text-white shadow-lg'
                    : 'text-gray-600 hover:text-orange-500'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {product.type}
                  </span>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{product.name}</h3>
                
                <div className="mb-6">
                  <div className="flex items-baseline space-x-2 mb-2">
                    <span className="text-3xl font-bold text-orange-500">
                      {formatPrice(product.price)}
                    </span>
                    <span className="text-gray-600">À vista</span>
                  </div>
                  <p className="text-gray-600">
                    10x de <span className="font-semibold">{formatPrice(product.installments)}</span>
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Acompanha:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {product.accessories.map((accessory, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                        <span className="text-sm text-gray-600">{accessory}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button className="w-full bg-orange-500 hover:bg-orange-600 text-white px-6 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
                  <ShoppingCart className="w-5 h-5" />
                  <span>Quero este modelo</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Formas de Pagamento</h3>
            <p className="text-gray-600 leading-relaxed">
              À vista no Pix/Cartão ou parcelamento em até 10x
            </p>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Personalização</h3>
            <p className="text-gray-600 leading-relaxed">
              Consulte combinações de cores para campo e estrutura
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Entrega & Montagem</h3>
            <p className="text-gray-600 leading-relaxed">
              Prazo varia por região. Montagem disponível sob demanda
            </p>
          </div>
        </div>

        {/* Informações Relevantes */}
        <div className="mt-16 bg-gradient-to-br from-gray-100 to-gray-50 p-8 rounded-2xl border border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Informações Relevantes</h3>
          <p className="text-gray-700 leading-relaxed">
            Nossas mesas padrão são feitas com MDF de 18 mililitros nobre e acabamento artesanal, com o campo de pedra em ardósia e o tecido da tecelagem Thais, borracha L profissional, já vai completa com os acessórios e com garantia 6 meses.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductGallery;
