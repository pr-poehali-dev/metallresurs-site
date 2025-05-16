
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center h-20">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-blue-700 rounded-md flex items-center justify-center">
            <Icon name="Layers" className="text-white" size={24} />
          </div>
          <h1 className="text-2xl font-bold text-blue-700">МеталлРесурс</h1>
        </div>
        <div className="hidden md:flex space-x-6">
          <a href="#about" className="text-gray-700 hover:text-blue-700 transition">О компании</a>
          <a href="#products" className="text-gray-700 hover:text-blue-700 transition">Продукция</a>
          <a href="#advantages" className="text-gray-700 hover:text-blue-700 transition">Преимущества</a>
          <a href="#contact" className="text-gray-700 hover:text-blue-700 transition">Контакты</a>
        </div>
        <Button className="bg-blue-700 hover:bg-blue-800">
          <Icon name="Phone" className="mr-2" size={16} />
          Связаться
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
