import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { X, Cookie } from 'lucide-react';

interface CookieConsentProps {
  onOpenPrivacyPolicy: () => void;
}

const CookieConsent = ({ onOpenPrivacyPolicy }: CookieConsentProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const handleDismiss = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3 flex-1">
            <Cookie className="w-5 h-5 text-brand-blue mt-0.5 flex-shrink-0" />
            <div className="text-sm text-gray-600 dark:text-gray-300">
              <p className="mb-1">
                Utilizamos cookies para melhorar sua experiência de navegação e personalizar conteúdo. 
                Ao continuar navegando, você concorda com nossa{' '}
                <button
                  onClick={onOpenPrivacyPolicy}
                  className="text-brand-blue hover:text-blue-700 underline font-medium"
                >
                  Política de Privacidade
                </button>
                .
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <Button
              onClick={handleAccept}
              className="bg-brand-blue hover:bg-blue-700 text-white px-6 py-2 text-sm"
            >
              Aceitar
            </Button>
            <Button
              onClick={handleDismiss}
              variant="ghost"
              size="icon"
              className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;