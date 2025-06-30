import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const WhatsAppWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Olá! Gostaria de falar com a Ana, a assistente de IA da 3DFPrint, sobre serviços de impressão 3D."
    );
    window.open(`https://wa.me/5511913311780?text=${message}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="mb-4 p-4 bg-white rounded-lg shadow-xl border border-gray-200 max-w-sm animate-fade-in">
          <div className="flex justify-between items-start mb-3">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <MessageCircle size={16} className="text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Ana - IA Assistant</h4>
                <p className="text-xs text-green-600">Online agora</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-gray-600"
            >
              <X size={16} />
            </button>
          </div>
          <p className="text-sm text-gray-600 mb-3">
            Olá! Sou a Ana, assistente de IA da 3DFPrint. Como posso ajudar você hoje?
          </p>
          <Button
            onClick={handleWhatsAppClick}
            className="w-full bg-green-500 hover:bg-green-600 text-white text-sm"
          >
            Iniciar conversa
          </Button>
        </div>
      )}
      
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 animate-pulse-glow"
      >
        <MessageCircle size={24} className="text-white" />
      </button>
    </div>
  );
};

export default WhatsAppWidget;
