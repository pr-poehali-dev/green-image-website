import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({ name: '', phone: '' });

  const services = [
    {
      icon: 'Home',
      title: 'Экодома и конструкции',
      description: 'Каркасные дома, деревянные балки и фермы. Прочность, скорость и экологичность.',
    },
    {
      icon: 'Droplets',
      title: 'Очистные сооружения',
      description: 'Комплексные системы для стоков и канализации. Соответствие стандартам.',
    },
    {
      icon: 'FlaskConical',
      title: 'Водоподготовка',
      description: 'Оборудование для промышленности и частного использования. Индивидуальный подбор.',
    },
    {
      icon: 'Container',
      title: 'Модульные здания',
      description: 'Быстровозводимые решения для вахтовых поселков и офисов. Мобильность и надежность.',
    },
    {
      icon: 'TrendingUp',
      title: 'Лизинг оборудования',
      description: 'Приобретайте наше оборудование с минимальным первоначальным взносом. Для бизнеса по всей России.',
    },
  ];

  const advantages = [
    { icon: 'Award', title: 'Официальный дилер', text: 'Гарантия качества и прямые поставки' },
    { icon: 'Layers', title: 'Комплексный подход', text: 'От строительства до инженерии и финансирования' },
    { icon: 'Leaf', title: 'Экологичность', text: 'Все решения соответствуют актуальным стандартам' },
    { icon: 'CreditCard', title: 'Финансовая поддержка', text: 'Помогаем приобрести оборудование в лизинг' },
    { icon: 'Users', title: 'Опыт и экспертиза', text: 'Индивидуальный подбор и сопровождение' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Icon name="Leaf" className="text-primary-foreground" size={24} />
            </div>
            <span className="text-2xl font-bold text-foreground">Зеленый Имидж</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm font-semibold text-muted-foreground hover:text-primary transition-colors">Услуги</a>
            <a href="#about" className="text-sm font-semibold text-muted-foreground hover:text-primary transition-colors">О компании</a>
            <a href="#projects" className="text-sm font-semibold text-muted-foreground hover:text-primary transition-colors">Проекты</a>
            <a href="#contacts" className="text-sm font-semibold text-muted-foreground hover:text-primary transition-colors">Контакты</a>
          </nav>

          <div className="flex items-center gap-4">
            <a href="tel:+78001234567" className="hidden lg:block text-lg font-bold text-primary">+7 (800) 123-45-67</a>
            <Button>Получить консультацию</Button>
          </div>
        </div>
      </header>

      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://cdn.poehali.dev/projects/f639b57a-fd38-4c3f-ab45-f1caa11e76fc/files/ad14840c-910b-48f2-9a69-8abd21e70124.jpg" 
            alt="Eco house" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in">
              Экологичные решения для бизнеса и жизни
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-4 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Строим, очищаем, обеспечиваем. Комплексный подход от проекта до финансирования.
            </p>
            <p className="text-lg text-white/80 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Официальный дилер ведущих производителей
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <Button size="lg" className="text-lg px-8 py-6">
                Рассчитать проект
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20">
                Смотреть услуги
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
            Наши решения для вашего развития
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
            Полный спектр услуг для создания экологичной и эффективной инфраструктуры
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <Icon name={service.icon as any} className="text-primary group-hover:text-white transition-colors" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <a href="#" className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                    Подробнее
                    <Icon name="ArrowRight" size={16} />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-accent/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
            С нами выгодно и надежно
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-12">
            Преимущества работы с Зеленым Имиджем
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
            {advantages.map((adv, index) => (
              <div 
                key={index} 
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mb-4 mx-auto hover:scale-110 transition-transform">
                  <Icon name={adv.icon as any} className="text-white" size={36} />
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">{adv.title}</h3>
                <p className="text-muted-foreground">{adv.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
            Создаем экосистему для вашего проекта
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-12 max-w-3xl mx-auto">
            Мы не просто продаем оборудование. Мы предлагаем готовые, технологичные и финансово доступные решения, которые работают как единый организм.
          </p>
          
          <div className="max-w-6xl mx-auto">
            <div className="relative bg-gradient-to-br from-accent/30 to-primary/5 rounded-3xl p-8 md:p-12">
              <div className="grid md:grid-cols-5 gap-6 items-center">
                <Card className="bg-white border-2 border-primary/20 hover:border-primary transition-all hover:shadow-lg">
                  <CardContent className="p-6 text-center">
                    <Icon name="Home" className="text-primary mx-auto mb-3" size={48} />
                    <h4 className="font-bold text-lg">Экодом</h4>
                  </CardContent>
                </Card>
                
                <div className="flex justify-center">
                  <Icon name="ArrowRight" className="text-primary hidden md:block" size={32} />
                  <Icon name="ArrowDown" className="text-primary md:hidden" size={32} />
                </div>
                
                <div className="space-y-4">
                  <Card className="bg-white border-2 border-primary/20 hover:border-primary transition-all hover:shadow-lg">
                    <CardContent className="p-4 text-center">
                      <Icon name="Droplets" className="text-primary mx-auto mb-2" size={40} />
                      <h4 className="font-bold text-sm">Очистные сооружения</h4>
                    </CardContent>
                  </Card>
                  <Card className="bg-white border-2 border-primary/20 hover:border-primary transition-all hover:shadow-lg">
                    <CardContent className="p-4 text-center">
                      <Icon name="FlaskConical" className="text-primary mx-auto mb-2" size={40} />
                      <h4 className="font-bold text-sm">Водоподготовка</h4>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="flex justify-center">
                  <Icon name="ArrowRight" className="text-primary hidden md:block" size={32} />
                  <Icon name="ArrowDown" className="text-primary md:hidden" size={32} />
                </div>
                
                <div className="space-y-4">
                  <Card className="bg-primary text-white border-0 hover:shadow-xl transition-all">
                    <CardContent className="p-6 text-center">
                      <Icon name="CreditCard" className="text-white mx-auto mb-3" size={48} />
                      <h4 className="font-bold text-lg">Лизинг</h4>
                      <p className="text-xs text-white/80 mt-2">Финансирование всего проекта</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-primary/20">
                <div className="flex items-center justify-center gap-4">
                  <Icon name="Plus" className="text-primary" size={24} />
                  <Card className="bg-white border-2 border-primary/20 hover:border-primary transition-all hover:shadow-lg flex-1 max-w-xs">
                    <CardContent className="p-4 text-center">
                      <Icon name="Container" className="text-primary mx-auto mb-2" size={40} />
                      <h4 className="font-bold text-sm">Модульный поселок</h4>
                      <p className="text-xs text-muted-foreground mt-1">Для рабочих и персонала</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-lg text-muted-foreground mb-6">
                Комплексный подход позволяет реализовать проект под ключ с единой ответственностью и гарантиями
              </p>
              <Button size="lg" className="text-lg px-8">
                Рассчитать комплексное решение
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://cdn.poehali.dev/projects/f639b57a-fd38-4c3f-ab45-f1caa11e76fc/files/64f7fbf8-6105-4607-9d22-666517e6bb83.jpg" 
            alt="Team" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/80" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Готовы сделать ваш проект экологичным и эффективным?
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Оставьте заявку и получите бесплатную консультацию по подбору оборудования и расчету лизинга
            </p>
            
            <Card className="max-w-md mx-auto">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input 
                    placeholder="Ваше имя" 
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="text-lg py-6"
                  />
                  <Input 
                    placeholder="Телефон" 
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="text-lg py-6"
                  />
                  <Button type="submit" size="lg" className="w-full text-lg py-6">
                    Отправить заявку
                  </Button>
                  <p className="text-xs text-muted-foreground">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <Icon name="Leaf" className="text-white" size={24} />
                </div>
                <span className="text-xl font-bold">Зеленый Имидж</span>
              </div>
              <p className="text-white/70 italic">Задаем тренды в индустрии</p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 text-lg">Услуги</h4>
              <ul className="space-y-2 text-white/70">
                <li><a href="#" className="hover:text-primary transition-colors">Экодома</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Очистные сооружения</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Водоподготовка</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Модульные здания</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Лизинг</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 text-lg">Контакты</h4>
              <ul className="space-y-2 text-white/70">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  <a href="tel:+78001234567" className="hover:text-primary transition-colors">+7 (800) 123-45-67</a>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  <a href="mailto:info@greenimage.ru" className="hover:text-primary transition-colors">info@greenimage.ru</a>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  <span>Москва, ул. Примерная, 123</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 text-lg">Социальные сети</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                  <Icon name="Facebook" size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                  <Icon name="Instagram" size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                  <Icon name="Linkedin" size={20} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-white/70 text-sm">
            <p>© 2024 Зеленый Имидж. Все права защищены.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary transition-colors">Политика конфиденциальности</a>
              <a href="#" className="hover:text-primary transition-colors">Условия использования</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;