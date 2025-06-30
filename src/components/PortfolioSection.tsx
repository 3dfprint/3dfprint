import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Upload, X, Eye } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
}

const PortfolioSection = () => {
  const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>([
    {
      id: '1',
      title: 'Protótipo Automotivo',
      description: 'Desenvolvimento de protótipo funcional para indústria automotiva',
      category: 'Prototipagem',
      image: 'https://images.pexels.com/photos/190574/pexels-photo-190574.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: '2',
      title: 'Armadura Cosplay',
      description: 'Conjunto completo de armadura medieval para cosplay',
      category: 'Cosplay',
      image: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: '3',
      title: 'Action Figure Personalizado',
      description: 'Miniatura detalhada baseada em personagem original',
      category: 'Action Figures',
      image: 'https://images.pexels.com/photos/1002638/pexels-photo-1002638.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: '4',
      title: 'Réplica Histórica',
      description: 'Reprodução fiel de artefato arqueológico',
      category: 'Réplicas',
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ]);

  const [isUploading, setIsUploading] = useState(false);
  const [newItem, setNewItem] = useState({
    title: '',
    description: '',
    category: '',
    image: ''
  });
  const { toast } = useToast();

  const categories = ['Prototipagem', 'Cosplay', 'Action Figures', 'Réplicas', 'Peças Funcionais', 'Projetos Customizados'];

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setIsUploading(true);
      // Simular upload
      setTimeout(() => {
        const imageUrl = URL.createObjectURL(file);
        setNewItem(prev => ({ ...prev, image: imageUrl }));
        setIsUploading(false);
        toast({
          title: "Imagem carregada com sucesso!",
          description: "Agora preencha os outros campos.",
        });
      }, 1500);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newItem.title || !newItem.description || !newItem.category || !newItem.image) {
      toast({
        title: "Campos obrigatórios",
        description: "Preencha todos os campos antes de enviar.",
        variant: "destructive",
      });
      return;
    }

    const newPortfolioItem: PortfolioItem = {
      id: Date.now().toString(),
      ...newItem
    };

    setPortfolioItems(prev => [newPortfolioItem, ...prev]);
    setNewItem({ title: '', description: '', category: '', image: '' });
    
    toast({
      title: "Projeto adicionado!",
      description: "Seu projeto foi adicionado ao portfólio com sucesso.",
    });
  };

  const removeItem = (id: string) => {
    setPortfolioItems(prev => prev.filter(item => item.id !== id));
  };

  return (
    <section id="portfolio" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Nosso <span className="bg-gradient-to-r from-brand-red via-brand-yellow to-brand-blue bg-clip-text text-transparent">Portfólio</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore nossos projetos realizados e compartilhe o seu próprio trabalho conosco
          </p>
        </div>

        {/* Upload Section */}
        <div className="mb-16">
          <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Compartilhe Seu Projeto
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Image Upload */}
                  <div className="space-y-4">
                    <Label htmlFor="image-upload" className="text-base font-medium text-gray-900">
                      Imagem do Projeto
                    </Label>
                    
                    {!newItem.image ? (
                      <div className="relative">
                        <input
                          id="image-upload"
                          type="file"
                          accept="image/*"
                          onChange={handleImageUpload}
                          className="hidden"
                        />
                        <label
                          htmlFor="image-upload"
                          className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed border-gray-300 rounded-2xl cursor-pointer hover:border-brand-blue transition-colors bg-gray-50 hover:bg-gray-100"
                        >
                          <Upload className="w-12 h-12 text-gray-400 mb-4" />
                          <p className="text-gray-600 text-center">
                            {isUploading ? 'Carregando...' : 'Clique para enviar uma imagem'}
                          </p>
                          <p className="text-sm text-gray-400 mt-2">PNG, JPG até 10MB</p>
                        </label>
                      </div>
                    ) : (
                      <div className="relative">
                        <img
                          src={newItem.image}
                          alt="Preview"
                          className="w-full h-48 object-cover rounded-2xl"
                        />
                        <button
                          type="button"
                          onClick={() => setNewItem(prev => ({ ...prev, image: '' }))}
                          className="absolute top-2 right-2 p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Form Fields */}
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="title" className="text-base font-medium text-gray-900">
                        Título do Projeto
                      </Label>
                      <Input
                        id="title"
                        value={newItem.title}
                        onChange={(e) => setNewItem(prev => ({ ...prev, title: e.target.value }))}
                        placeholder="Ex: Protótipo Inovador"
                        className="mt-2 h-12 border-gray-200 focus:border-brand-blue focus:ring-brand-blue/20"
                      />
                    </div>

                    <div>
                      <Label htmlFor="category" className="text-base font-medium text-gray-900">
                        Categoria
                      </Label>
                      <select
                        id="category"
                        value={newItem.category}
                        onChange={(e) => setNewItem(prev => ({ ...prev, category: e.target.value }))}
                        className="mt-2 w-full h-12 px-3 border border-gray-200 rounded-lg focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 focus:outline-none"
                      >
                        <option value="">Selecione uma categoria</option>
                        {categories.map(cat => (
                          <option key={cat} value={cat}>{cat}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <Label htmlFor="description" className="text-base font-medium text-gray-900">
                        Descrição
                      </Label>
                      <textarea
                        id="description"
                        value={newItem.description}
                        onChange={(e) => setNewItem(prev => ({ ...prev, description: e.target.value }))}
                        placeholder="Descreva seu projeto..."
                        rows={4}
                        className="mt-2 w-full px-3 py-3 border border-gray-200 rounded-lg focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 focus:outline-none resize-none"
                      />
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <Button
                    type="submit"
                    className="bg-gradient-to-r from-brand-red to-brand-blue hover:from-red-600 hover:to-blue-600 text-white px-8 py-3 text-lg font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Adicionar ao Portfólio
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {portfolioItems.map((item) => (
            <Card key={item.id} className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white overflow-hidden">
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-3 right-3 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors">
                    <Eye className="w-4 h-4 text-gray-700" />
                  </button>
                  <button 
                    onClick={() => removeItem(item.id)}
                    className="p-2 bg-red-500/90 rounded-full hover:bg-red-500 transition-colors"
                  >
                    <X className="w-4 h-4 text-white" />
                  </button>
                </div>
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 bg-white/90 text-gray-800 text-xs font-medium rounded-full">
                    {item.category}
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-1">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
