import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulando envio do formulário
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Mensagem enviada com sucesso!",
        description: "Entraremos em contato em breve.",
      });
      
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    } catch (error) {
      toast({
        title: "Erro ao enviar mensagem",
        description: "Tente novamente ou entre em contato via WhatsApp.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contato" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Entre em <span className="bg-gradient-to-r from-brand-red to-brand-blue bg-clip-text text-transparent">Contato</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Pronto para transformar suas ideias em realidade? Fale conosco!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Informações de Contato */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-8">
                Fale Conosco
              </h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-4 rounded-xl bg-white shadow-lg">
                  <div className="w-14 h-14 bg-gradient-to-r from-brand-blue to-brand-red rounded-full flex items-center justify-center">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-lg">Email</p>
                    <p className="text-gray-600">contato@3dfprint3d.com.br</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-4 rounded-xl bg-white shadow-lg">
                  <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-lg">WhatsApp</p>
                    <p className="text-gray-600">(11) 91331-1780</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 rounded-xl bg-white shadow-lg">
                  <div className="w-14 h-14 bg-gradient-to-r from-brand-yellow to-brand-red rounded-full flex items-center justify-center">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-lg">Localização</p>
                    <p className="text-gray-600">São Paulo, SP</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 rounded-xl bg-white shadow-lg">
                  <div className="w-14 h-14 bg-gradient-to-r from-brand-blue to-brand-yellow rounded-full flex items-center justify-center">
                    <Clock className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-lg">Horário</p>
                    <p className="text-gray-600">Seg - Sex: 9h às 18h</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-brand-red/5 to-brand-blue/5">
              <h4 className="text-2xl font-bold text-gray-900 mb-4">
                Por que escolher a 3DFPrint?
              </h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-gradient-to-r from-brand-red to-brand-yellow rounded-full"></div>
                  <span>Soluções profissionais e acessíveis</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-gradient-to-r from-brand-yellow to-brand-blue rounded-full"></div>
                  <span>Equipe especializada e apaixonada</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-gradient-to-r from-brand-blue to-brand-red rounded-full"></div>
                  <span>Atendimento personalizado</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-gradient-to-r from-brand-red to-brand-blue rounded-full"></div>
                  <span>Qualidade garantida</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Formulário */}
          <Card className="border-0 shadow-2xl bg-white/90 backdrop-blur-sm">
            <CardHeader className="pb-6">
              <CardTitle className="text-3xl text-gray-900 text-center">
                Solicite seu Orçamento
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="text-base font-medium text-gray-900">Nome *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="mt-2 h-12 border-gray-200 focus:border-brand-blue focus:ring-brand-blue/20"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-base font-medium text-gray-900">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="mt-2 h-12 border-gray-200 focus:border-brand-blue focus:ring-brand-blue/20"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="phone" className="text-base font-medium text-gray-900">Telefone</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="mt-2 h-12 border-gray-200 focus:border-brand-blue focus:ring-brand-blue/20"
                    />
                  </div>
                  <div>
                    <Label htmlFor="service" className="text-base font-medium text-gray-900">Serviço de Interesse</Label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="mt-2 w-full h-12 px-3 border border-gray-200 rounded-lg focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 focus:outline-none"
                    >
                      <option value="">Selecione um serviço</option>
                      <option value="prototipagem">Prototipagem</option>
                      <option value="cosplay">Props para Cosplay</option>
                      <option value="action-figures">Action Figures</option>
                      <option value="replicas">Réplicas</option>
                      <option value="outros">Outros</option>
                    </select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="message" className="text-base font-medium text-gray-900">Mensagem *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="mt-2 border-gray-200 focus:border-brand-blue focus:ring-brand-blue/20 resize-none"
                    placeholder="Descreva seu projeto ou dúvida..."
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-brand-red to-brand-blue hover:from-red-600 hover:to-blue-600 text-white py-4 text-lg font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;