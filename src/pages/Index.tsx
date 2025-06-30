import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import WhatsAppWidget from '@/components/WhatsAppWidget';
import PortfolioSection from '@/components/PortfolioSection';

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
      <section id="inicio" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-blue-50/50 via-white to-yellow-50/50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-brand-blue/10 to-brand-red/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-brand-yellow/10 to-brand-blue/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className={`space-y-8 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              <div className="space-y-6">
                <h1 className="text-6xl lg:text-7xl font-bold text-gray-900 leading-tight tracking-tight">
                  Transforme suas
                  <span className="bg-gradient-to-r from-brand-red to-brand-yellow bg-clip-text text-transparent"> ideias</span> em
                  <span className="bg-gradient-to-r from-brand-blue to-brand-red bg-clip-text text-transparent"> realidade</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                  Impressão 3D profissional e acessível para PMEs, prototipagem, cosplay, 
                  action figures, réplicas e muito mais. Sua imaginação é o limite!
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => scrollToSection('contato')}
                  size="lg"
                  className="bg-gradient-to-r from-brand-red to-brand-yellow hover:from-red-600 hover:to-yellow-500 text-white px-8 py-4 text-lg font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Solicitar Orçamento Grátis
                </Button>
                <Button 
                  onClick={() => scrollToSection('servicos')}
                  variant="outline"
                  size="lg"
                  className="border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white px-8 py-4 text-lg font-medium rounded-xl transition-all duration-300"
                >
                  Conheça Nossos Serviços
                </Button>
              </div>
              
              <div className="flex items-center space-x-12 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-brand-red to-brand-yellow bg-clip-text text-transparent">100+</div>
                  <div className="text-gray-600 text-sm font-medium">Projetos Realizados</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-brand-yellow to-brand-blue bg-clip-text text-transparent">5⭐</div>
                  <div className="text-gray-600 text-sm font-medium">Avaliação Média</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-brand-blue to-brand-red bg-clip-text text-transparent">24h</div>
                  <div className="text-gray-600 text-sm font-medium">Resposta Rápida</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative w-full h-96 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-red/5 via-brand-yellow/5 to-brand-blue/5 rounded-3xl backdrop-blur-sm"></div>
                <img 
                  src="/lovable-uploads/efc49af6-9b49-4eea-81a9-0c4f028a6af9.png" 
                  alt="3DFPrint Logo" 
                  className="w-80 h-auto relative z-10 drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              Nossos <span className="bg-gradient-to-r from-brand-blue to-brand-red bg-clip-text text-transparent">Serviços</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Oferecemos soluções completas em impressão 3D para diversos segmentos
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-white/80 backdrop-blur-sm overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-brand-red to-brand-yellow"></div>
              <CardContent className="p-8">
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">🏭</div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Prototipagem para PMEs</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Desenvolvimento rápido de protótipos funcionais para validação de conceitos e testes.
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li className="flex items-center"><span className="w-2 h-2 bg-brand-red rounded-full mr-3"></span>Protótipos funcionais</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-brand-yellow rounded-full mr-3"></span>Validação de conceitos</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-brand-blue rounded-full mr-3"></span>Testes de mercado</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-white/80 backdrop-blur-sm overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-brand-yellow to-brand-blue"></div>
              <CardContent className="p-8">
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">🎭</div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Props para Cosplay</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Criação de props únicos e detalhados para cosplayers e eventos.
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li className="flex items-center"><span className="w-2 h-2 bg-brand-yellow rounded-full mr-3"></span>Armaduras e acessórios</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-brand-blue rounded-full mr-3"></span>Armas e escudos</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-brand-red rounded-full mr-3"></span>Capacetes e máscaras</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-white/80 backdrop-blur-sm overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-brand-blue to-brand-red"></div>
              <CardContent className="p-8">
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">🦸</div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Action Figures</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Impressão de action figures personalizados com alta qualidade e detalhamento.
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li className="flex items-center"><span className="w-2 h-2 bg-brand-blue rounded-full mr-3"></span>Personagens customizados</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-brand-red rounded-full mr-3"></span>Miniaturas detalhadas</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-brand-yellow rounded-full mr-3"></span>Colecionáveis únicos</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-white/80 backdrop-blur-sm overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-brand-red to-brand-yellow"></div>
              <CardContent className="p-8">
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">🏛️</div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Réplicas</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Reprodução fiel de objetos históricos, artísticos ou decorativos.
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li className="flex items-center"><span className="w-2 h-2 bg-brand-red rounded-full mr-3"></span>Objetos históricos</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-brand-yellow rounded-full mr-3"></span>Peças decorativas</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-brand-blue rounded-full mr-3"></span>Modelos arquitetônicos</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-white/80 backdrop-blur-sm overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-brand-yellow to-brand-blue"></div>
              <CardContent className="p-8">
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">⚙️</div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Peças Funcionais</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Produção de peças funcionais para reposição ou melhoria de equipamentos.
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li className="flex items-center"><span className="w-2 h-2 bg-brand-yellow rounded-full mr-3"></span>Peças de reposição</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-brand-blue rounded-full mr-3"></span>Ferramentas customizadas</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-brand-red rounded-full mr-3"></span>Suportes e bases</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-white/80 backdrop-blur-sm overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-brand-blue to-brand-red"></div>
              <CardContent className="p-8">
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">💡</div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Projetos Customizados</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Sua imaginação é o limite! Desenvolvemos soluções únicas para suas necessidades.
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li className="flex items-center"><span className="w-2 h-2 bg-brand-blue rounded-full mr-3"></span>Consultoria especializada</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-brand-red rounded-full mr-3"></span>Desenvolvimento sob medida</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-brand-yellow rounded-full mr-3"></span>Suporte técnico completo</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <PortfolioSection />

      {/* Equipe */}
      <section id="equipe" className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              Nossa <span className="bg-gradient-to-r from-brand-red to-brand-yellow bg-clip-text text-transparent">Equipe</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Uma família unida pela paixão em transformar ideias em realidade
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="text-center hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-white/80 backdrop-blur-sm group">
              <CardContent className="p-8">
                <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden shadow-xl group-hover:shadow-2xl transition-shadow duration-300">
                  <img 
                    src="/lovable-uploads/flavio.png" 
                    alt="Flavio Del Fiol Costa" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">Flavio Del Fiol Costa</h3>
                <p className="text-brand-red font-semibold mb-4 text-lg">CTO & Co-Fundador</p>
                <p className="text-gray-600 leading-relaxed">
                  Freelance full stack com experiência em soluções tecnológicas. 
                  Formado em Engenharia, pós-graduado em Análise e Auditoria de Sistemas 
                  e em Psicologia Transpessoal e Eneagrama.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-white/80 backdrop-blur-sm group">
              <CardContent className="p-8">
                <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden shadow-xl group-hover:shadow-2xl transition-shadow duration-300">
                  <img 
                    src="/lovable-uploads/paula.png" 
                    alt="Paula Del Fiol Costa" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">Paula Del Fiol Costa</h3>
                <p className="text-brand-yellow font-semibold mb-4 text-lg">Diretora Criativa</p>
                <p className="text-gray-600 leading-relaxed">
                  Mente criativa responsável pela criação e execução de projetos. 
                  Cosplay e prop maker experiente, marketing manager formada em Administração.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-white/80 backdrop-blur-sm group">
              <CardContent className="p-8">
                <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden shadow-xl group-hover:shadow-2xl transition-shadow duration-300">
                  <img 
                    src="/lovable-uploads/lucas.png" 
                    alt="Lucas Del Fiol Costa" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">Lucas Del Fiol Costa</h3>
                <p className="text-brand-blue font-semibold mb-4 text-lg">Engenheiro de Software</p>
                <p className="text-gray-600 leading-relaxed">
                  Formado em Engenharia Eletrônica pela POLI e técnico em Mecatrônica pela ETEC. 
                  Especialista em desenvolvimento de soluções técnicas inovadoras.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-16">
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Somos uma empresa familiar que acredita no poder da tecnologia para transformar ideias em realidade. 
              Cada projeto é tratado com carinho e dedicação, como se fosse nosso próprio sonho sendo realizado.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-r from-brand-red via-brand-yellow to-brand-blue relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl font-bold text-white mb-8 tracking-tight">
            Pronto para Dar Vida às Suas Ideias?
          </h2>
          <p className="text-xl text-white/95 mb-12 max-w-3xl mx-auto leading-relaxed">
            Entre em contato conosco e descubra como podemos transformar sua imaginação em realidade
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              onClick={() => scrollToSection('contato')}
              size="lg"
              className="bg-white text-gray-900 hover:bg-gray-100 px-10 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Solicitar Orçamento
            </Button>
            <Button 
              onClick={() => window.open('https://wa.me/5511913311780', '_blank')}
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-10 py-4 text-lg font-semibold rounded-xl transition-all duration-300"
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