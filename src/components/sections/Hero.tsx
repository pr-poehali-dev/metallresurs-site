
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <header className="pt-32 pb-20 bg-gradient-to-br from-blue-700 via-blue-600 to-blue-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-white mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Производство и поставка <span className="text-orange-500">металлопроката</span></h1>
            <p className="text-xl mb-8 opacity-90">Качественные решения для строительства и производства</p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                Получить предложение
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
                Каталог продукции
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img 
              src="https://images.unsplash.com/photo-1518529151228-7bf45c8d276a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
              alt="Металлопрокат" 
              className="rounded-lg shadow-xl max-w-full h-auto object-cover"
              style={{ maxHeight: '400px' }}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
