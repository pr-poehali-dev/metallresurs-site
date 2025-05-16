
import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="py-10 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <div className="w-10 h-10 bg-blue-700 rounded-md flex items-center justify-center">
              <Icon name="Layers" className="text-white" size={24} />
            </div>
            <h1 className="text-xl font-bold">МеталлРесурс</h1>
          </div>
          <div className="mb-4 md:mb-0">
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400 transition">
                <Icon name="Facebook" size={24} />
              </a>
              <a href="#" className="hover:text-blue-400 transition">
                <Icon name="Instagram" size={24} />
              </a>
              <a href="#" className="hover:text-blue-400 transition">
                <Icon name="Youtube" size={24} />
              </a>
              <a href="#" className="hover:text-blue-400 transition">
                <Icon name="MessageCircle" size={24} />
              </a>
            </div>
          </div>
          <div className="text-center md:text-right text-gray-400 text-sm">
            © 2025 МеталлРесурс. Все права защищены.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
