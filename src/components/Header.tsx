import React, { useState } from 'react';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import logo from '../assets/logo.jpg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <img src={logo} alt="King Bilhar" className="h-12 w-auto rounded-lg" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="hover:text-orange-500 transition-colors">Início</a>
            <a href="#produtos" className="hover:text-orange-500 transition-colors">Produtos</a>
            <a href="#sobre" className="hover:text-orange-500 transition-colors">Sobre</a>
            <a href="#contato" className="hover:text-orange-500 transition-colors">Contato</a>
          </nav>

          

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-4">
              <a href="#inicio" className="hover:text-orange-500 transition-colors">Início</a>
              <a href="#produtos" className="hover:text-orange-500 transition-colors">Produtos</a>
              <a href="#sobre" className="hover:text-orange-500 transition-colors">Sobre</a>
              <a href="#contato" className="hover:text-orange-500 transition-colors">Contato</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;