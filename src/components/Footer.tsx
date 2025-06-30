
import { Instagram, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleInstagramClick = () => {
    window.open('https://instagram.com/3dfprint', '_blank');
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:contato@3dfprint.com.br';
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Olá! Gostaria de saber mais sobre os serviços da 3DFPrint."
    );
    window.open(`https://wa.me/5551999999999?text=${message}`, '_blank');
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo e Descrição */}
          <div>
            <div className="text-3xl font-bold mb-4">
              <span className="text-brand-red">3D</span>
              <span className="text-brand-blue">F</span>
              <span className="text-brand-yellow">Print</span>
            </div>
            <p className="text-gray-300 mb-4">
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
                onClick={handleEmailClick}
                className="w-10 h-10 bg-brand-blue rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                <Mail size={20} />
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
            <ul className="space-y-2 text-gray-300">
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
            <div className="space-y-2 text-gray-300">
              <p>📧 contato@3dfprint.com.br</p>
              <p>📱 (51) 99999-9999</p>
              <p>🤖 Fale com a Ana (IA) via WhatsApp</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} 3DFPrint. Todos os direitos reservados. 
            Feito com ❤️ pela equipe 3DFPrint.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
