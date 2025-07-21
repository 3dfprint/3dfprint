import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';

interface TermsOfServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TermsOfServiceModal = ({ isOpen, onClose }: TermsOfServiceModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-800 dark:text-gray-100">
            Termos de Uso
          </DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-[60vh] pr-4">
          <div className="space-y-6 text-gray-600 dark:text-gray-300">
            <section>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-3">
                1. Aceitação dos Termos
              </h3>
              <p>
                Ao acessar e utilizar os serviços da 3DFPrint, você concorda em cumprir e estar 
                vinculado a estes Termos de Uso. Se você não concordar com qualquer parte destes 
                termos, não deve utilizar nossos serviços.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-3">
                2. Descrição dos Serviços
              </h3>
              <p className="mb-3">A 3DFPrint oferece serviços de impressão 3D, incluindo:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Prototipagem para PMEs</li>
                <li>Props para cosplay</li>
                <li>Action figures personalizados</li>
                <li>Réplicas e miniaturas</li>
                <li>Peças funcionais</li>
                <li>Projetos customizados</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-3">
                3. Responsabilidades do Cliente
              </h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-gray-800 dark:text-gray-100">3.1 Arquivos e Projetos</h4>
                  <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                    <li>Fornecer arquivos em formatos compatíveis (.STL, .OBJ, .3MF)</li>
                    <li>Garantir que possui direitos autorais ou licença para impressão</li>
                    <li>Verificar a viabilidade técnica do projeto</li>
                    <li>Fornecer especificações claras e completas</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 dark:text-gray-100">3.2 Pagamento</h4>
                  <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                    <li>Efetuar pagamento conforme condições acordadas</li>
                    <li>Informar sobre alterações no projeto antes da produção</li>
                    <li>Retirar ou receber o produto no prazo estabelecido</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-3">
                4. Responsabilidades da 3DFPrint
              </h3>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Executar os serviços com qualidade e dentro do prazo acordado</li>
                <li>Manter confidencialidade dos projetos dos clientes</li>
                <li>Fornecer suporte técnico durante o desenvolvimento</li>
                <li>Comunicar eventuais problemas ou limitações técnicas</li>
                <li>Garantir a qualidade dos materiais utilizados</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-3">
                5. Propriedade Intelectual
              </h3>
              <div className="space-y-3">
                <p>
                  <strong>5.1</strong> O cliente declara possuir todos os direitos necessários sobre 
                  os arquivos e projetos fornecidos para impressão.
                </p>
                <p>
                  <strong>5.2</strong> A 3DFPrint não se responsabiliza por violações de direitos 
                  autorais ou propriedade intelectual de terceiros.
                </p>
                <p>
                  <strong>5.3</strong> Não imprimimos itens que violem direitos autorais, marcas 
                  registradas ou sejam ilegais.
                </p>
              </div>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-3">
                6. Prazos e Entregas
              </h3>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Prazos são estimados e podem variar conforme complexidade do projeto</li>
                <li>Comunicaremos imediatamente sobre atrasos ou problemas</li>
                <li>Entregas podem ser feitas pessoalmente ou via correios (custos à parte)</li>
                <li>Cliente deve conferir o produto no momento da entrega</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-3">
                7. Qualidade e Garantias
              </h3>
              <div className="space-y-3">
                <p>
                  <strong>7.1</strong> Garantimos a qualidade de impressão conforme especificações técnicas acordadas.
                </p>
                <p>
                  <strong>7.2</strong> Pequenas variações dimensionais são normais no processo de impressão 3D.
                </p>
                <p>
                  <strong>7.3</strong> Não garantimos a funcionalidade de peças móveis ou mecanismos complexos 
                  sem testes prévios.
                </p>
                <p>
                  <strong>7.4</strong> Reimpressões por defeitos de fabricação serão feitas sem custo adicional.
                </p>
              </div>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-3">
                8. Limitações de Responsabilidade
              </h3>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Nossa responsabilidade limita-se ao valor pago pelo serviço</li>
                <li>Não nos responsabilizamos por danos indiretos ou lucros cessantes</li>
                <li>Não imprimimos itens perigosos, ilegais ou inadequados</li>
                <li>Cliente assume riscos de uso inadequado do produto final</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-3">
                9. Cancelamentos e Reembolsos
              </h3>
              <div className="space-y-3">
                <p>
                  <strong>9.1</strong> Cancelamentos antes do início da produção: reembolso integral.
                </p>
                <p>
                  <strong>9.2</strong> Cancelamentos após início da produção: cobrança proporcional ao trabalho realizado.
                </p>
                <p>
                  <strong>9.3</strong> Produtos personalizados não podem ser cancelados após conclusão.
                </p>
              </div>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-3">
                10. Privacidade e Confidencialidade
              </h3>
              <p>
                Mantemos sigilo absoluto sobre projetos e informações dos clientes. 
                Consulte nossa Política de Privacidade para mais detalhes sobre tratamento de dados pessoais.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-3">
                11. Alterações nos Termos
              </h3>
              <p>
                Reservamo-nos o direito de modificar estes termos a qualquer momento. 
                Alterações significativas serão comunicadas através do nosso site ou por e-mail.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-3">
                12. Lei Aplicável e Foro
              </h3>
              <p>
                Estes termos são regidos pela legislação brasileira. 
                Eventuais disputas serão resolvidas no foro da comarca de São Paulo/SP.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-3">
                13. Contato
              </h3>
              <p className="mb-3">
                Para dúvidas sobre estes Termos de Uso, entre em contato:
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

export default TermsOfServiceModal;