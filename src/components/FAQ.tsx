import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: "Qual é o prazo de entrega das mesas?",
      answer: "O prazo de entrega varia conforme a região e disponibilidade. Entre em contato conosco pelo WhatsApp para consultar o prazo específico para sua localidade."
    },
    {
      question: "Vocês fazem montagem?",
      answer: "Sim! Oferecemos serviço de montagem sob demanda. Nossa equipe especializada pode montar sua mesa no local desejado. Consulte disponibilidade e valores para sua região."
    },
    {
      question: "As mesas têm garantia?",
      answer: "Sim! Todas as nossas mesas possuem garantia de qualidade. Entre em contato conosco para mais detalhes sobre cobertura e prazos de garantia."
    },
    {
      question: "Quais são as formas de pagamento?",
      answer: "Aceitamos pagamento à vista no Pix/Cartão com condições especiais, ou parcelamento em até 10x no cartão de crédito. Consulte as melhores condições para seu caso."
    },
    {
      question: "Posso personalizar as cores?",
      answer: "Sim! Oferecemos opções de personalização para combinações de cores do campo e estrutura. Entre em contato para conhecer as opções disponíveis e fazer sua escolha."
    },
    {
      question: "Qual o espaço ideal para instalar a mesa?",
      answer: "Recomendamos um espaço mínimo que permita movimentação confortável ao redor da mesa. Para cada modelo, temos especificações ideais de ambiente. Consulte-nos para orientações específicas."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Perguntas <span className="text-orange-500">Frequentes</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Tiramos suas principais dúvidas sobre nossas mesas de bilhar. 
              Não encontrou o que procura? Entre em contato conosco!
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-300"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openFAQ === index ? (
                      <Minus className="w-6 h-6 text-orange-500" />
                    ) : (
                      <Plus className="w-6 h-6 text-gray-400" />
                    )}
                  </div>
                </button>
                
                {openFAQ === index && (
                  <div className="px-8 pb-6">
                    <div className="pt-4 border-t border-gray-100">
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
            
          </div>

       
        </div>
      </div>
    </section>
  );
};

export default FAQ;
