
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface ContactCardProps {
  icon: string;
  title: string;
  content: React.ReactNode;
}

const ContactCard = ({ icon, title, content }: ContactCardProps) => {
  return (
    <Card className="hover:shadow-lg transition">
      <CardContent className="p-6 flex flex-col items-center">
        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
          <Icon name={icon} className="text-blue-700" size={32} />
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 text-center">{content}</p>
      </CardContent>
    </Card>
  );
};

const Contact = () => {
  return (
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
          <ContactCard 
            icon="MapPin" 
            title="Адрес" 
            content="г. Москва, ул. Промышленная, д. 15, стр. 3"
          />
          
          <ContactCard 
            icon="Phone" 
            title="Телефон" 
            content={
              <>
                +7 (495) 123-45-67<br />
                +7 (495) 765-43-21
              </>
            }
          />
          
          <ContactCard 
            icon="Mail" 
            title="Email" 
            content={
              <>
                info@metallresurs.ru<br />
                sales@metallresurs.ru
              </>
            }
          />
        </div>
        
        <div className="mt-16 flex justify-center">
          <Button size="lg" className="bg-blue-700 hover:bg-blue-800">
            <Icon name="Send" className="mr-2" size={16} />
            Отправить запрос
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
