
interface StatItemProps {
  value: string;
  label: string;
}

const StatItem = ({ value, label }: StatItemProps) => {
  return (
    <div className="text-center">
      <h3 className="text-4xl font-bold text-blue-700 mb-2">{value}</h3>
      <p className="text-gray-600">{label}</p>
    </div>
  );
};

const Stats = () => {
  const stats = [
    { value: "10+", label: "Лет на рынке" },
    { value: "500+", label: "Клиентов" },
    { value: "5000+", label: "Тонн продукции в год" },
    { value: "98%", label: "Довольных клиентов" }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatItem 
              key={index} 
              value={stat.value} 
              label={stat.label} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
