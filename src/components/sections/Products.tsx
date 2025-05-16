
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Products = () => {
  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Наша продукция</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Мы производим высококачественную металлопродукцию, которая находит применение 
            в различных отраслях промышленности и строительства.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ProductCard 
            title="Профнастил"
            description="Профилированные листы из оцинкованной стали с полимерным покрытием для кровли и ограждений."
            image="https://images.unsplash.com/photo-1578926375605-eaf7559b1458?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
            features={["Различные профили и толщина", "Широкая цветовая гамма"]}
          />

          <ProductCard 
            title="Плоский лист"
            description="Стальные листы различной толщины для производства и строительства."
            image="https://images.unsplash.com/photo-1612444516627-34c723a9b710?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
            features={["Широкий диапазон толщин", "Высокое качество поверхности"]}
          />

          <ProductCard 
            title="Штрипс"
            description="Стальная лента (штрипс) для различных производственных нужд."
            image="https://images.unsplash.com/photo-1575672013458-8d3a13da072d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
            features={["Точная нарезка по размерам", "Различные марки стали"]}
          />
        </div>
      </div>
    </section>
  );
};

interface ProductCardProps {
  title: string;
  description: string;
  image: string;
  features: string[];
}

const ProductCard = ({ title, description, image, features }: ProductCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-xl transition duration-300">
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform hover:scale-105"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-blue-700 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        {features.map((feature, index) => (
          <div key={index} className="flex items-center text-sm text-gray-500 mt-2 first:mt-0">
            <Icon name="Check" className="text-blue-700 mr-2" size={16} />
            <span>{feature}</span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default Products;
