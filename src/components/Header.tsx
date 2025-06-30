import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/efc49af6-9b49-4eea-81a9-0c4f028a6af9.png" 
              alt="3DFPrint Logo" 
              className="h-14 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="text-gray-700 hover:text-brand-blue transition-colors font-medium"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('servicos')}
              className="text-gray-700 hover:text-brand-blue transition-colors font-medium"
            >
              Serviços
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="text-gray-700 hover:text-brand-blue transition-colors font-medium"
            >
              Portfólio
            </button>
            <button 
              onClick={() => scrollToSection('equipe')}
              className="text-gray-700 hover:text-brand-blue transition-colors font-medium"
            >
              Equipe
            </button>
            <button 
              onClick={() => scrollToSection('contato')}
              className="text-gray-700 hover:text-brand-blue transition-colors font-medium"
            >
              Contato
            </button>
            <Button 
              onClick={() => scrollToSection('contato')}
              className="bg-gradient-to-r from-brand-red to-brand-yellow hover:from-red-600 hover:to-yellow-500 text-white font-medium px-6 py-2 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Orçamento Grátis
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-gray-100 bg-white/95 backdrop-blur-md">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('inicio')}
                className="text-left text-gray-700 hover:text-brand-blue transition-colors font-medium py-2"
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('servicos')}
                className="text-left text-gray-700 hover:text-brand-blue transition-colors font-medium py-2"
              >
                Serviços
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="text-left text-gray-700 hover:text-brand-blue transition-colors font-medium py-2"
              >
                Portfólio
              </button>
              <button 
                onClick={() => scrollToSection('equipe')}
                className="text-left text-gray-700 hover:text-brand-blue transition-colors font-medium py-2"
              >
                Equipe
              </button>
              <button 
                onClick={() => scrollToSection('contato')}
                className="text-left text-gray-700 hover:text-brand-blue transition-colors font-medium py-2"
              >
                Contato
              </button>
              <Button 
                onClick={() => scrollToSection('contato')}
                className="bg-gradient-to-r from-brand-red to-brand-yellow hover:from-red-600 hover:to-yellow-500 text-white font-medium w-fit mt-4 px-6 py-2 rounded-lg shadow-lg"
              >
                Orçamento Grátis
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;