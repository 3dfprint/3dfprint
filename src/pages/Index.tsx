import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import WhatsAppWidget from '@/components/WhatsAppWidget';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      <WhatsAppWidget />

      {/* Hero Section */}
      <section id="inicio" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-yellow-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`space-y-6 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
                Transforme suas
                <span className="text-brand-red"> ideias</span> em
                <span className="text-brand-blue"> realidade</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Impressão 3D profissional e acessível para PMEs, prototipagem, cosplay, 
                action figures, réplicas e muito mais. Sua imaginação é o limite!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => scrollToSection('contato')}
                  size="lg"
                  className="bg-brand-red hover:bg-red-700 text-white px-8 py-4 text-lg"
                >
                  Solicitar Orçamento Grátis
                </Button>
                <Button 
                  onClick={() => scrollToSection('servicos')}
                  variant="outline"
                  size="lg"
                  className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white px-8 py-4 text-lg"
                >
                  Conheça Nossos Serviços
                </Button>
              </div>
              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-brand-red">100+</div>
                  <div className="text-gray-600">Projetos Realizados</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-brand-blue">5⭐</div>
                  <div className="text-gray-600">Avaliação Média</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-brand-yellow">24h</div>
                  <div className="text-gray-600">Resposta Rápida</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-brand-red/10 to-brand-blue/10 rounded-2xl flex items-center justify-center">
                <img 
                  src="/lovable-uploads/efc49af6-9b49-4eea-81a9-0c4f028a6af9.png" 
                  alt="3DFPrint Logo" 
                  className="w-80 h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Nossos <span className="text-brand-blue">Serviços</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Oferecemos soluções completas em impressão 3D para diversos segmentos
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-shadow duration-300 border-t-4 border-t-brand-red">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">🏭</div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">Prototipagem para PMEs</h3>
                <p className="text-gray-600 mb-4">
                  Desenvolvimento rápido de protótipos funcionais para validação de conceitos e testes.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Protótipos funcionais</li>
                  <li>• Validação de conceitos</li>
                  <li>• Testes de mercado</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow duration-300 border-t-4 border-t-brand-yellow">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">🎭</div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">Props para Cosplay</h3>
                <p className="text-gray-600 mb-4">
                  Criação de props únicos e detalhados para cosplayers e eventos.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Armaduras e acessórios</li>
                  <li>• Armas e escudos</li>
                  <li>• Capacetes e máscaras</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow duration-300 border-t-4 border-t-brand-blue">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">🦸</div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">Action Figures</h3>
                <p className="text-gray-600 mb-4">
                  Impressão de action figures personalizados com alta qualidade e detalhamento.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Personagens customizados</li>
                  <li>• Miniaturas detalhadas</li>
                  <li>• Colecionáveis únicos</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow duration-300 border-t-4 border-t-brand-red">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">🏛️</div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">Réplicas</h3>
                <p className="text-gray-600 mb-4">
                  Reprodução fiel de objetos históricos, artísticos ou decorativos.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Objetos históricos</li>
                  <li>• Peças decorativas</li>
                  <li>• Modelos arquitetônicos</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow duration-300 border-t-4 border-t-brand-yellow">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">⚙️</div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">Peças Funcionais</h3>
                <p className="text-gray-600 mb-4">
                  Produção de peças funcionais para reposição ou melhoria de equipamentos.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Peças de reposição</li>
                  <li>• Ferramentas customizadas</li>
                  <li>• Suportes e bases</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow duration-300 border-t-4 border-t-brand-blue">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">💡</div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">Projetos Customizados</h3>
                <p className="text-gray-600 mb-4">
                  Sua imaginação é o limite! Desenvolvemos soluções únicas para suas necessidades.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Consultoria especializada</li>
                  <li>• Desenvolvimento sob medida</li>
                  <li>• Suporte técnico completo</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Equipe */}
      <section id="equipe" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Nossa <span className="text-brand-red">Equipe</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Uma família unida pela paixão em transformar ideias em realidade
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden">
                  <img 
                    src="/lovable-uploads/flavio.png" 
                    alt="Flavio Del Fiol Costa" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">Flavio Del Fiol Costa</h3>
                <p className="text-brand-red font-semibold mb-3">CTO & Co-Fundador</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Freelance full stack com experiência em soluções tecnológicas. 
                  Formado em Engenharia, pós-graduado em Análise e Auditoria de Sistemas 
                  e em Psicologia Transpessoal e Eneagrama.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden">
                  <img 
                    src="/lovable-uploads/paula.png" 
                    alt="Paula Del Fiol Costa" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">Paula Del Fiol Costa</h3>
                <p className="text-brand-yellow font-semibold mb-3">Diretora Criativa</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Mente criativa responsável pela criação e execução de projetos. 
                  Cosplay e prop maker experiente, marketing manager formada em Administração.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden">
                  <img 
                    src="/lovable-uploads/lucas.png" 
                    alt="Lucas Del Fiol Costa" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">Lucas Del Fiol Costa</h3>
                <p className="text-brand-blue font-semibold mb-3">Engenheiro de Software</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Formado em Engenharia Eletrônica pela POLI e técnico em Mecatrônica pela ETEC. 
                  Especialista em desenvolvimento de soluções técnicas inovadoras.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Somos uma empresa familiar que acredita no poder da tecnologia para transformar ideias em realidade. 
              Cada projeto é tratado com carinho e dedicação, como se fosse nosso próprio sonho sendo realizado.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-brand-red to-brand-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Pronto para Dar Vida às Suas Ideias?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e descubra como podemos transformar sua imaginação em realidade
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => scrollToSection('contato')}
              size="lg"
              className="bg-white text-brand-red hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
            >
              Solicitar Orçamento
            </Button>
            <Button 
              onClick={() => window.open('https://wa.me/5511913311780', '_blank')}
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-brand-blue px-8 py-4 text-lg font-semibold"
            >
              Falar no WhatsApp
            </Button>
          </div>
        </div>
      </section>

      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;