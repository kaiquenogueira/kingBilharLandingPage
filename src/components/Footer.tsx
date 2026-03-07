import React from 'react';
import { Instagram, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold text-white">K</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-orange-500">King Bilhar</h3>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Especialistas em mesas de bilhar de madeira maciça jequitibá rosa 
              com campo de ardósia. Qualidade premium direto da fábrica.
            </p>
            <div className="flex space-x-4">
              
              <a href="https://www.instagram.com/kingbilhar/?igsh=MWx5cGYxanU3MjM1eQ%3D%3D&utm_source=qr#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-orange-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-orange-500">Links Rápidos</h4>
            <ul className="space-y-3">
              <li><a href="#inicio" className="text-gray-400 hover:text-white transition-colors">Início</a></li>
              <li><a href="#produtos" className="text-gray-400 hover:text-white transition-colors">Produtos</a></li>
              <li><a href="#sobre" className="text-gray-400 hover:text-white transition-colors">Sobre Nós</a></li>
              <li><a href="#contato" className="text-gray-400 hover:text-white transition-colors">Contato</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Galeria</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Depoimentos</a></li>
            </ul>
          </div>


          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-orange-500">Email</h4>
            <div className="space-y-4">
              
              
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-orange-500 mt-1" />
                <div>
                  <p className="text-white font-semibold">
                    <a href="mailto:kingbilhar1@gmail.com" className="hover:text-orange-400">kingbilhar1@gmail.com</a>
                  </p>
                  <p className="text-gray-400 text-sm">Resposta em até 24h</p>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-gray-900 rounded-lg">
              <p className="text-sm text-gray-400 mb-2">Horário de Atendimento:</p>
              <p className="text-white text-sm">Segunda a Sexta: 8h às 18h</p>
              <p className="text-white text-sm">Sábado: 8h às 12h</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              <p>&copy;2025 King Bilhar. Todos os direitos reservados.</p>
            </div>
          
          </div>
          
           
        </div>
      </div>
    </footer>
  );
};

export default Footer;
