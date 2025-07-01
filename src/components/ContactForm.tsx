import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, Upload, X, AlertCircle } from 'lucide-react';
import InputMask from 'react-input-mask';

interface FileWithPreview extends File {
  preview?: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    service: '',
    message: '',
  });
  const [files, setFiles] = useState<FileWithPreview[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const { toast } = useToast();

  const allowedFileTypes = ['.zip', '.3mf', '.jpg', '.jpeg', '.png', '.stl'];
  const maxFileSize = 50 * 1024 * 1024; // 50MB
  const maxFiles = 5;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Validação de número de telefone no formato (xx) xxxx-xxxx ou (xx) xxxxx-xxxx
  const validatePhoneFormat = (phone: string): boolean => {
    const phoneRegex = /^\(\d{2}\) \d{4,5}-\d{4}$/;
    return phoneRegex.test(phone);
  };

  // Rest of the component code remains the same until the form section...

  return (
    <section id="contato" className="py-20 bg-gray-50 dark:bg-gray-900">
      {/* Previous content remains the same... */}

      <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Informações de Contato remains the same... */}

        {/* Formulário */}
        <Card className="dark:bg-gray-800 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="text-2xl text-gray-800 dark:text-gray-100">
              Solicite seu Orçamento
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={async (e) => {
                e.preventDefault();
                await sendEmail();
              }} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name" className="dark:text-gray-200">Nome *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="dark:text-gray-200">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="whatsapp" className="dark:text-gray-200">WhatsApp *</Label>
                  <InputMask
                    mask="(99) 9999-9999?9"
                    value={formData.whatsapp}
                    onChange={handleInputChange}
                    beforeMaskedValueChange={(newState, oldState, userInput) => {
                      let { value } = newState;
                      // Remove all non-digits
                      const digits = value.replace(/\D/g, '');
                      // Check if the digits length is 10 or 11
                      if (digits.length <= 10) {
                        return { ...newState, value: `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}` };
                      } else {
                        return { ...newState, value: `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}` };
                      }
                    }}
                  >
                    {(inputProps: any) => (
                      <Input
                        {...inputProps}
                        id="whatsapp"
                        name="whatsapp"
                        required
                        className="mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
                        placeholder="(xx) xxxx-xxxx ou (xx) xxxxx-xxxx"
                      />
                    )}
                  </InputMask>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    Formato: (xx) xxxx-xxxx ou (xx) xxxxx-xxxx
                  </p>
                </div>
                <div>
                  <Label htmlFor="service" className="dark:text-gray-200">Serviço de Interesse</Label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="mt-1 w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue dark:bg-gray-700 dark:text-gray-100"
                  >
                    <option value="">Selecione um serviço</option>
                    <option value="prototipagem">Prototipagem para PMEs</option>
                    <option value="cosplay">Props para Cosplay</option>
                    <option value="action-figures">Action Figures</option>
                    <option value="replicas">Réplicas</option>
                    <option value="pecas-funcionais">Peças Funcionais</option>
                    <option value="projetos-customizados">Projetos Customizados</option>
                  </select>
                </div>
              </div>

              <div>
                <Label htmlFor="message" className="dark:text-gray-200">Descrição do Projeto *</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
                  placeholder="Descreva detalhadamente seu projeto, incluindo dimensões, materiais preferidos, acabamento desejado, etc."
                />
              </div>

              {/* File Upload Area remains the same... */}

              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-brand-red hover:bg-red-700 text-white py-3 text-lg font-semibold"
              >
                {isSubmitting ? (
                  <div className="flex items-center space-x-2">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    <span>Enviando...</span>
                  </div>
                ) : (
                  'Solicitar Orçamento'
                )}
              </Button>

              <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                Sua solicitação será enviada automaticamente.
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContactForm;
