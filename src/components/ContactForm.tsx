import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, Upload, X, AlertCircle } from 'lucide-react';
import InputMask from 'react-input-mask';
import emailjs from '@emailjs/browser';

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
    deadline: ''
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

  const validateFile = (file: File): string | null => {
    const fileExtension = '.' + file.name.split('.').pop()?.toLowerCase();
    
    if (!allowedFileTypes.includes(fileExtension)) {
      return `Tipo de arquivo não permitido. Formatos aceitos: ${allowedFileTypes.join(', ')}`;
    }
    
    if (file.size > maxFileSize) {
      return `Arquivo muito grande. Tamanho máximo: 50MB`;
    }
    
    return null;
  };

  const handleFileSelect = (selectedFiles: FileList | null) => {
    if (!selectedFiles) return;

    const newFiles: FileWithPreview[] = [];
    const errors: string[] = [];

    Array.from(selectedFiles).forEach(file => {
      const error = validateFile(file);
      if (error) {
        errors.push(`${file.name}: ${error}`);
        return;
      }

      if (files.length + newFiles.length >= maxFiles) {
        errors.push(`Máximo de ${maxFiles} arquivos permitidos`);
        return;
      }

      const fileWithPreview = file as FileWithPreview;
      
      // Create preview for images
      if (file.type.startsWith('image/')) {
        fileWithPreview.preview = URL.createObjectURL(file);
      }
      
      newFiles.push(fileWithPreview);
    });

    if (errors.length > 0) {
      toast({
        title: "Erro no upload",
        description: errors.join('\n'),
        variant: "destructive",
      });
    }

    if (newFiles.length > 0) {
      setFiles(prev => [...prev, ...newFiles]);
      toast({
        title: "Arquivos adicionados",
        description: `${newFiles.length} arquivo(s) adicionado(s) com sucesso`,
      });
    }
  };

  const removeFile = (index: number) => {
    setFiles(prev => {
      const newFiles = [...prev];
      const removedFile = newFiles[index];
      
      // Revoke object URL to prevent memory leaks
      if (removedFile.preview) {
        URL.revokeObjectURL(removedFile.preview);
      }
      
      newFiles.splice(index, 1);
      return newFiles;
    });
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileSelect(e.dataTransfer.files);
    }
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const getFileIcon = (fileName: string) => {
    const extension = fileName.split('.').pop()?.toLowerCase();
    switch (extension) {
      case 'zip':
        return '📦';
      case '3mf':
      case 'stl':
        return '🔧';
      case 'jpg':
      case 'jpeg':
      case 'png':
        return '🖼️';
      default:
        return '📄';
    }
  };

  // Dynamic mask based on input length
  const getWhatsAppMask = (value: string) => {
    const cleanValue = value.replace(/\D/g, '');
    // If it has 11 digits, use mobile format (xx) 9xxxx-xxxx
    // If it has 10 digits, use landline format (xx) xxxx-xxxx
    if (cleanValue.length <= 10) {
      return '(99) 9999-9999';
    }
    return '(99) 99999-9999';
  };

  const validateWhatsApp = (whatsapp: string): boolean => {
    // Remove all non-numeric characters
    const cleanNumber = whatsapp.replace(/\D/g, '');
    
    // Check if it has 10 digits (landline: DDD + 8 digits) or 11 digits (mobile: DDD + 9 digits)
    if (cleanNumber.length === 10) {
      // Landline format: DDD + 8 digits (first digit of phone number should be 2-5)
      const phoneFirstDigit = cleanNumber.charAt(2);
      return ['2', '3', '4', '5'].includes(phoneFirstDigit);
    } else if (cleanNumber.length === 11) {
      // Mobile format: DDD + 9 digits (third digit should be 9)
      return cleanNumber.charAt(2) === '9';
    }
    
    return false;
  };

  const sendEmail = async (templateParams: any) => {
    try {
      // Initialize EmailJS with your public key
      emailjs.init("97K5ZQREsUKq0nJLh"); // Replace with your actual public key
      
      const result = await emailjs.send(
        "service_79cs237", // Replace with your service ID
        "template_3dfprint", // Replace with your template ID
        templateParams
      );
      
      return result;
    } catch (error) {
      console.error('EmailJS Error:', error);
      throw error;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate WhatsApp
    if (!validateWhatsApp(formData.whatsapp)) {
      toast({
        title: "WhatsApp inválido",
        description: "Por favor, insira um número válido: (xx) xxxx-xxxx para fixo ou (xx) 9xxxx-xxxx para celular",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Prepare email template parameters
      const templateParams = {
        to_email: 'flaviodfc@gmail.com',
        from_name: formData.name,
        from_email: formData.email,
        whatsapp: formData.whatsapp,
        service: formData.service || 'Não especificado',
        deadline: formData.deadline || 'Não informado',
        message: formData.message,
        files_count: files.length,
        files_list: files.map(file => `${file.name} (${formatFileSize(file.size)})`).join('\n'),
        reply_to: formData.email,
        subject: `Nova Solicitação de Orçamento - ${formData.name}`,
        current_date: new Date().toLocaleString('pt-BR'),
      };

      // Send email via EmailJS
      await sendEmail(templateParams);
      
      toast({
        title: "Solicitação enviada com sucesso! 🎉",
        description: "Email enviado para flaviodfc@gmail.com. Entraremos em contato em breve!",
      });
      
      // Reset form
      setFormData({ 
        name: '', 
        email: '', 
        whatsapp: '', 
        service: '', 
        message: '', 
        deadline: '' 
      });
      
      // Clean up file previews
      files.forEach(file => {
        if (file.preview) {
          URL.revokeObjectURL(file.preview);
        }
      });
      setFiles([]);
      
    } catch (error) {
      console.error('Error sending email:', error);
      
      // Fallback to WhatsApp
      const whatsappMessage = `
🎯 *Nova Solicitação de Orçamento - 3DFPrint*

👤 *Cliente:* ${formData.name}
📧 *Email:* ${formData.email}
📱 *WhatsApp:* ${formData.whatsapp}
🛠️ *Serviço:* ${formData.service || 'Não especificado'}
⏰ *Prazo:* ${formData.deadline || 'Não informado'}

📝 *Mensagem:*
${formData.message}

📎 *Arquivos anexados:* ${files.length} arquivo(s)
${files.map(file => `• ${file.name} (${formatFileSize(file.size)})`).join('\n')}

---
⚠️ Erro no envio automático do email - enviando via WhatsApp
Enviado via formulário do site 3DFPrint
      `.trim();

      const encodedMessage = encodeURIComponent(whatsappMessage);
      window.open(`https://wa.me/5511913311780?text=${encodedMessage}`, '_blank');
      
      toast({
        title: "Erro no envio do email",
        description: "Houve um problema no envio automático. Redirecionando para WhatsApp como alternativa.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contato" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">
            Entre em <span className="text-brand-red">Contato</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Pronto para transformar suas ideias em realidade? Fale conosco!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Informações de Contato */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">
                Fale Conosco
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-brand-blue rounded-full flex items-center justify-center">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 dark:text-gray-100">Email</p>
                    <p className="text-gray-600 dark:text-gray-300">flaviodfc@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 dark:text-gray-100">WhatsApp</p>
                    <p className="text-gray-600 dark:text-gray-300">(11) 91331-1780</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                Por que escolher a 3DFPrint?
              </h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-brand-red rounded-full"></div>
                  <span>Soluções profissionais e acessíveis</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-brand-yellow rounded-full"></div>
                  <span>Equipe especializada e apaixonada ****</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-brand-blue rounded-full"></div>
                  <span>Atendimento personalizado</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-brand-red rounded-full"></div>
                  <span>Qualidade garantida</span>
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
              <div className="flex items-start space-x-3">
                <AlertCircle className="text-blue-600 dark:text-blue-400 mt-0.5" size={20} />
                <div>
                  <h5 className="font-semibold text-blue-800 dark:text-blue-300 mb-1">
                    Formatos de arquivo aceitos:
                  </h5>
                  <p className="text-sm text-blue-700 dark:text-blue-400">
                    .ZIP, .3MF, .STL, .JPG, .PNG
                  </p>
                  <p className="text-xs text-blue-600 dark:text-blue-500 mt-1">
                    Tamanho máximo: 50MB por arquivo | Máximo: 5 arquivos
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Formulário */}
          <Card className="dark:bg-gray-800 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-800 dark:text-gray-100">
                Solicite seu Orçamento
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
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
                      mask={getWhatsAppMask(formData.whatsapp)}
                      value={formData.whatsapp}
                      onChange={handleInputChange}
                    >
                      {(inputProps: any) => (
                        <Input
                          {...inputProps}
                          id="whatsapp"
                          name="whatsapp"
                          required
                          className="mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
                          placeholder="(11) 9999-9999 ou (11) 99999-9999"
                        />
                      )}
                    </InputMask>
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
                  <Label htmlFor="deadline" className="dark:text-gray-200">Prazo Desejado</Label>
                  <select
                    id="deadline"
                    name="deadline"
                    value={formData.deadline}
                    onChange={handleInputChange}
                    className="mt-1 w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue dark:bg-gray-700 dark:text-gray-100"
                  >
                    <option value="">Selecione o prazo</option>
                    <option value="urgente">Urgente (1-3 dias)</option>
                    <option value="1-semana">1 semana</option>
                    <option value="2-semanas">2 semanas</option>
                    <option value="1-mes">1 mês</option>
                    <option value="flexivel">Flexível</option>
                  </select>
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

                {/* File Upload Area */}
                <div>
                  <Label className="dark:text-gray-200 mb-2 block">
                    Anexar Arquivos (Opcional)
                  </Label>
                  <div
                    className={`border-2 border-dashed rounded-lg p-6 text-center transition-colors ${
                      dragActive
                        ? 'border-brand-blue bg-blue-50 dark:bg-blue-900/20'
                        : 'border-gray-300 dark:border-gray-600 hover:border-brand-blue dark:hover:border-brand-blue'
                    }`}
                    onDragEnter={handleDrag}
                    onDragLeave={handleDrag}
                    onDragOver={handleDrag}
                    onDrop={handleDrop}
                  >
                    <Upload className="mx-auto h-12 w-12 text-gray-400 dark:text-gray-500 mb-4" />
                    <p className="text-gray-600 dark:text-gray-300 mb-2">
                      Arraste e solte seus arquivos aqui ou
                    </p>
                    <label htmlFor="file-upload" className="cursor-pointer">
                      <span className="text-brand-blue hover:text-blue-700 font-medium">
                        clique para selecionar
                      </span>
                      <input
                        id="file-upload"
                        type="file"
                        multiple
                        accept=".zip,.3mf,.jpg,.jpeg,.png,.stl"
                        onChange={(e) => handleFileSelect(e.target.files)}
                        className="hidden"
                      />
                    </label>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                      Formatos: ZIP, 3MF, STL, JPG, PNG | Máx: 50MB por arquivo
                    </p>
                  </div>

                  {/* File List */}
                  {files.length > 0 && (
                    <div className="mt-4 space-y-2">
                      <h4 className="font-medium text-gray-800 dark:text-gray-200">
                        Arquivos selecionados ({files.length}/{maxFiles}):
                      </h4>
                      {files.map((file, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
                        >
                          <div className="flex items-center space-x-3">
                            <span className="text-2xl">{getFileIcon(file.name)}</span>
                            <div>
                              <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                                {file.name}
                              </p>
                              <p className="text-xs text-gray-500 dark:text-gray-400">
                                {formatFileSize(file.size)}
                              </p>
                            </div>
                          </div>
                          <button
                            type="button"
                            onClick={() => removeFile(index)}
                            className="text-red-500 hover:text-red-700 p-1"
                          >
                            <X size={16} />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

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
                  Sua solicitação será enviada automaticamente por email para flaviodfc@gmail.com.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
