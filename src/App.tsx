
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

function App() {
  useEffect(() => {
    // Плавная прокрутка при клике на навигационные ссылки
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href')?.substring(1);
        if (targetId) {
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop - 80,
              behavior: 'smooth'
            });
          }
        }
      });
    });

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', function () {});
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Навигационная панель */}
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

      {/* Главный экран */}
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

      {/* О компании */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">О компании <span className="text-blue-700">МеталлРесурс</span></h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
          </div>
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                alt="Производство металлопроката" 
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Надежный партнер в мире металлопроката</h3>
              <p className="text-gray-600 mb-6">
                Компания <span className="font-semibold text-blue-700">МеталлРесурс</span> — это современное предприятие, 
                специализирующееся на производстве высококачественного металлопроката. Мы создаем продукцию, 
                отвечающую всем требованиям современного строительства и производства.
              </p>
              <p className="text-gray-600 mb-6">
                Наше предприятие оснащено передовым оборудованием, которое позволяет нам выпускать 
                продукцию высочайшего качества, соответствующую всем отраслевым стандартам.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <Icon name="Award" className="text-blue-700" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold">Качество</h4>
                    <p className="text-sm text-gray-500">Гарантия долговечности</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
                    <Icon name="Timer" className="text-orange-500" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold">Оперативность</h4>
                    <p className="text-sm text-gray-500">Быстрая поставка</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Наша продукция */}
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
            <Card className="overflow-hidden hover:shadow-xl transition duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1578926375605-eaf7559b1458?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="Профнастил" 
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-blue-700 mb-2">Профнастил</h3>
                <p className="text-gray-600 mb-4">
                  Профилированные листы из оцинкованной стали с полимерным покрытием для кровли и ограждений.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <Icon name="Check" className="text-blue-700 mr-2" size={16} />
                  <span>Различные профили и толщина</span>
                </div>
                <div className="flex items-center text-sm text-gray-500 mt-2">
                  <Icon name="Check" className="text-blue-700 mr-2" size={16} />
                  <span>Широкая цветовая гамма</span>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1612444516627-34c723a9b710?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="Плоский лист" 
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-blue-700 mb-2">Плоский лист</h3>
                <p className="text-gray-600 mb-4">
                  Стальные листы различной толщины для производства и строительства.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <Icon name="Check" className="text-blue-700 mr-2" size={16} />
                  <span>Широкий диапазон толщин</span>
                </div>
                <div className="flex items-center text-sm text-gray-500 mt-2">
                  <Icon name="Check" className="text-blue-700 mr-2" size={16} />
                  <span>Высокое качество поверхности</span>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1575672013458-8d3a13da072d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="Штрипс" 
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-blue-700 mb-2">Штрипс</h3>
                <p className="text-gray-600 mb-4">
                  Стальная лента (штрипс) для различных производственных нужд.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <Icon name="Check" className="text-blue-700 mr-2" size={16} />
                  <span>Точная нарезка по размерам</span>
                </div>
                <div className="flex items-center text-sm text-gray-500 mt-2">
                  <Icon name="Check" className="text-blue-700 mr-2" size={16} />
                  <span>Различные марки стали</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Преимущества */}
      <section id="advantages" className="py-20 bg-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Почему выбирают нас</h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto opacity-90">
              Мы стремимся обеспечить нашим клиентам лучший сервис и качество продукции на рынке металлопроката.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-blue-800 p-6 rounded-lg hover:transform hover:-translate-y-2 transition duration-300">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Icon name="BadgeCheck" className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">Высокое качество</h3>
              <p className="text-center opacity-90">
                Вся продукция проходит строгий контроль качества на соответствие стандартам.
              </p>
            </div>
            
            <div className="bg-blue-800 p-6 rounded-lg hover:transform hover:-translate-y-2 transition duration-300">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Icon name="Truck" className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">Быстрая доставка</h3>
              <p className="text-center opacity-90">
                Организуем оперативную доставку продукции в любую точку России.
              </p>
            </div>
            
            <div className="bg-blue-800 p-6 rounded-lg hover:transform hover:-translate-y-2 transition duration-300">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Icon name="Users" className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">Опытные специалисты</h3>
              <p className="text-center opacity-90">
                Наша команда состоит из профессионалов с многолетним опытом в отрасли.
              </p>
            </div>
            
            <div className="bg-blue-800 p-6 rounded-lg hover:transform hover:-translate-y-2 transition duration-300">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Icon name="Settings" className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">Современное оборудование</h3>
              <p className="text-center opacity-90">
                Используем передовые технологии для производства высококачественной продукции.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Статистика */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <h3 className="text-4xl font-bold text-blue-700 mb-2">10+</h3>
              <p className="text-gray-600">Лет на рынке</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold text-blue-700 mb-2">500+</h3>
              <p className="text-gray-600">Клиентов</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold text-blue-700 mb-2">5000+</h3>
              <p className="text-gray-600">Тонн продукции в год</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold text-blue-700 mb-2">98%</h3>
              <p className="text-gray-600">Довольных клиентов</p>
            </div>
          </div>
        </div>
      </section>

      {/* Контакты */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Свяжитесь с нами</h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Наши специалисты готовы ответить на все ваши вопросы и помочь с выбором продукции.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition">
              <CardContent className="p-6 flex flex-col items-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Icon name="MapPin" className="text-blue-700" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Адрес</h3>
                <p className="text-gray-600 text-center">
                  г. Москва, ул. Промышленная, д. 15, стр. 3
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition">
              <CardContent className="p-6 flex flex-col items-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Phone" className="text-blue-700" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Телефон</h3>
                <p className="text-gray-600 text-center">
                  +7 (495) 123-45-67<br />
                  +7 (495) 765-43-21
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition">
              <CardContent className="p-6 flex flex-col items-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Mail" className="text-blue-700" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <p className="text-gray-600 text-center">
                  info@metallresurs.ru<br />
                  sales@metallresurs.ru
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-16 flex justify-center">
            <Button size="lg" className="bg-blue-700 hover:bg-blue-800">
              <Icon name="Send" className="mr-2" size={16} />
              Отправить запрос
            </Button>
          </div>
        </div>
      </section>

      {/* Футер */}
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

    </div>
  );
}

export default App;
