
import Icon from "@/components/ui/icon";

interface AdvantageCardProps {
  icon: string;
  title: string;
  description: string;
}

const AdvantageCard = ({ icon, title, description }: AdvantageCardProps) => {
  return (
    <div className="bg-blue-800 p-6 rounded-lg hover:transform hover:-translate-y-2 transition duration-300">
      <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mb-4 mx-auto">
        <Icon name={icon} className="text-white" size={32} />
      </div>
      <h3 className="text-xl font-semibold text-center mb-3">{title}</h3>
      <p className="text-center opacity-90">{description}</p>
    </div>
  );
};

const Advantages = () => {
  const advantages = [
    {
      icon: "BadgeCheck",
      title: "Высокое качество",
      description: "Вся продукция проходит строгий контроль качества на соответствие стандартам."
    },
    {
      icon: "Truck",
      title: "Быстрая доставка",
      description: "Организуем оперативную доставку продукции в любую точку России."
    },
    {
      icon: "Users",
      title: "Опытные специалисты",
      description: "Наша команда состоит из профессионалов с многолетним опытом в отрасли."
    },
    {
      icon: "Settings",
      title: "Современное оборудование",
      description: "Используем передовые технологии для производства высококачественной продукции."
    }
  ];

  return (
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
          {advantages.map((advantage, index) => (
            <AdvantageCard 
              key={index}
              icon={advantage.icon}
              title={advantage.title}
              description={advantage.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
