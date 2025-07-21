import { Instagram, Mail, Phone } from 'lucide-react';
import { Facebook } from 'lucide-react';
import { useState } from 'react';
import CookieConsent from './CookieConsent';
import PrivacyPolicyModal from './PrivacyPolicyModal';
import TermsOfServiceModal from './TermsOfServiceModal';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);

  const handleInstagramClick = () => {
    window.open('https://instagram.com/3dfprint3d', '_blank');
  };

  const handleFacebookClick = () => {
    window.open('https://www.facebook.com/3dfprint3d', '_blank');
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Olá! Gostaria de saber mais sobre os serviços da 3DFPrint."
    );
    window.open(`https://wa.me/5511913311780?text=${message}`, '_blank');
  };

  return (
    <>
      <CookieConsent onOpenPrivacyPolicy={() => setIsPrivacyModalOpen(true)} />
      <PrivacyPolicyModal 
        isOpen={isPrivacyModalOpen} 
        onClose={() => setIsPrivacyModalOpen(false)} 
      />
      <TermsOfServiceModal 
        isOpen={isTermsModalOpen} 
        onClose={() => setIsTermsModalOpen(false)} 
      />
      
      <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo e Descrição */}
          <div>
            <div className="text-3xl font-bold mb-4">
              <span className="text-brand-red">3D</span>
              <span className="text-brand-blue">F</span>
              <span className="text-brand-yellow">Print</span>
            </div>
            <p className="text-gray-300 dark:text-gray-400 mb-4">
              Transformando ideias em realidade através da impressão 3D. 
              Soluções profissionais e acessíveis para empresas e pessoas físicas.
            </p>
            <div className="flex space-x-4">
              <button
                onClick={handleInstagramClick}
                className="w-10 h-10 bg-brand-red rounded-full flex items-center justify-center hover:bg-red-700 transition-colors"
              >
                <Instagram size={20} />
              </button>
              <button
                onClick={handleFacebookClick}
                className="w-10 h-10 bg-brand-blue rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                <Facebook size={20} />
              </button>
              <button
                onClick={handleWhatsAppClick}
                className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
              >
                <Phone size={20} />
              </button>
            </div>
          </div>

          {/* Serviços */}
          <div>
            <h3 className="text-xl font-bold mb-4">Nossos Serviços</h3>
            <ul className="space-y-2 text-gray-300 dark:text-gray-400">
              <li>Prototipagem para PMEs</li>
              <li>Props para Cosplay</li>
              <li>Action Figures Personalizados</li>
              <li>Réplicas e Miniaturas</li>
              <li>Projetos Customizados</li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <div className="space-y-2 text-gray-300 dark:text-gray-400">
              <p>📧 contato@3dfprint3d.com.br</p>
              <p><a href="https://wa.me/5511913311780" target="_Blank">🤖 Fale com a Ana (IA) via WhatsApp</a></p>
              <p>📱 (11) 91331-1780</p>
            </div>
          </div>

          {/* Links Legais */}
          <div>
            <h3 className="text-xl font-bold mb-4">Informações Legais</h3>
            <div className="space-y-2 text-gray-300 dark:text-gray-400">
              <button
                onClick={() => setIsPrivacyModalOpen(true)}
                className="block hover:text-white transition-colors text-left"
              >
                Política de Privacidade
              </button>
              <button
                onClick={() => setIsTermsModalOpen(true)}
                className="block hover:text-white transition-colors text-left"
              >
                Termos de Uso
              </button>
              <p className="text-sm">
                CNPJ: 00.000.000/0001-00
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 dark:border-gray-800 pt-8 text-center">
          <p className="text-gray-400 dark:text-gray-500">
            © {currentYear} 3DFPrint. Todos os direitos reservados. 
            Feito com ❤️ pela equipe 3DFPrint.
          </p>
        </div>
      </div>
      </footer>
    </>
  );
};

export default Footer;

  )
}