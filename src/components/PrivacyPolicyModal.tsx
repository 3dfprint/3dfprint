import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PrivacyPolicyModal = ({ isOpen, onClose }: PrivacyPolicyModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-800 dark:text-gray-100">
            Política de Privacidade
          </DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-[60vh] pr-4">
          <div className="space-y-6 text-gray-600 dark:text-gray-300">
            <section>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-3">
                1. Informações Gerais
              </h3>
              <p className="mb-4">
                A 3DFPrint está comprometida em proteger a privacidade e os dados pessoais de nossos usuários. 
                Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos suas informações 
                quando você utiliza nossos serviços de impressão 3D.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-3">
                2. Informações que Coletamos
              </h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-gray-800 dark:text-gray-100">2.1 Informações Pessoais</h4>
                  <p>Coletamos informações que você nos fornece diretamente, incluindo:</p>
                  <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                    <li>Nome completo</li>
                    <li>Endereço de e-mail</li>
                    <li>Número de telefone/WhatsApp</li>
                    <li>Informações sobre projetos e serviços solicitados</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 dark:text-gray-100">2.2 Informações Técnicas</h4>
                  <p>Automaticamente coletamos informações sobre seu uso do site:</p>
                  <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                    <li>Endereço IP</li>
                    <li>Tipo de navegador e dispositivo</li>
                    <li>Páginas visitadas e tempo de permanência</li>
                    <li>Cookies e tecnologias similares</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-3">
                3. Como Utilizamos suas Informações
              </h3>
              <p className="mb-3">Utilizamos suas informações para:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Fornecer e melhorar nossos serviços de impressão 3D</li>
                <li>Processar solicitações de orçamento e pedidos</li>
                <li>Comunicar sobre projetos e atualizações</li>
                <li>Personalizar sua experiência no site</li>
                <li>Cumprir obrigações legais e contratuais</li>
                <li>Análise e melhoria de nossos serviços</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-3">
                4. Cookies e Tecnologias Similares
              </h3>
              <p className="mb-3">
                Utilizamos cookies para melhorar sua experiência de navegação. Os cookies nos ajudam a:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Lembrar suas preferências</li>
                <li>Analisar o tráfego do site</li>
                <li>Personalizar conteúdo</li>
                <li>Melhorar a funcionalidade do site</li>
              </ul>
              <p className="mt-3">
                Você pode gerenciar suas preferências de cookies através das configurações do seu navegador.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-3">
                5. Compartilhamento de Informações
              </h3>
              <p className="mb-3">
                Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros, exceto:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Com seu consentimento explícito</li>
                <li>Para cumprir obrigações legais</li>
                <li>Para proteger nossos direitos e segurança</li>
                <li>Com prestadores de serviços que nos auxiliam (sob acordos de confidencialidade)</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-3">
                6. Segurança dos Dados
              </h3>
              <p>
                Implementamos medidas de segurança técnicas e organizacionais apropriadas para proteger 
                suas informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-3">
                7. Seus Direitos
              </h3>
              <p className="mb-3">Você tem o direito de:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Acessar suas informações pessoais</li>
                <li>Corrigir dados incorretos ou incompletos</li>
                <li>Solicitar a exclusão de seus dados</li>
                <li>Retirar seu consentimento a qualquer momento</li>
                <li>Portabilidade de dados</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-3">
                8. Retenção de Dados
              </h3>
              <p>
                Mantemos suas informações pessoais apenas pelo tempo necessário para cumprir os 
                propósitos descritos nesta política ou conforme exigido por lei.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-3">
                9. Alterações nesta Política
              </h3>
              <p>
                Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos sobre 
                mudanças significativas através do nosso site ou por e-mail.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-3">
                10. Contato
              </h3>
              <p className="mb-3">
                Para questões sobre esta Política de Privacidade ou seus dados pessoais, entre em contato:
              </p>
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <p><strong>E-mail:</strong> contato@3dfprint3d.com.br</p>
                <p><strong>WhatsApp:</strong> (11) 91331-1780</p>
                <p><strong>Última atualização:</strong> Janeiro de 2025</p>
              </div>
            </section>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default PrivacyPolicyModal;