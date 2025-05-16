
import Icon from "@/components/ui/icon";

const About = () => {
  return (
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
  );
};

export default About;
