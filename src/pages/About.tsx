
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="container py-16">
      <h1 className="text-3xl font-bold mb-8">О нас</h1>
      
      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-2xl font-bold mb-4">KeyArena — ваш надежный магазин игровых ключей</h2>
          <p className="text-muted-foreground mb-4">
            Мы работаем с 2024 года и за это время завоевали доверие тысяч геймеров. Наша цель — предоставить вам лучшие игры по самым выгодным ценам.
          </p>
          <p className="text-muted-foreground mb-4">
            В нашем ассортименте вы найдете ключи для всех популярных платформ: Steam, Epic Games, Origin, Uplay, Battle.net и других. Мы сотрудничаем только с проверенными поставщиками, поэтому гарантируем 100% качество всех продаваемых товаров.
          </p>
          <p className="text-muted-foreground">
            Наша служба поддержки работает круглосуточно, чтобы помочь вам с любыми вопросами.
          </p>
        </div>
        <div>
          <img 
            src="../../images/galaxy.jpg" 
            alt="About KeyArena" 
            className="rounded-xl w-full"
          />
        </div>
      </div>
      
      {/* Stats */}
      <div className="bg-muted/30 rounded-xl p-8 mb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl font-bold text-game-purple mb-2">10,000+</div>
            <div className="text-muted-foreground">Довольных клиентов</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-game-purple mb-2">5,000+</div>
            <div className="text-muted-foreground">Игровых ключей</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-game-purple mb-2">24/7</div>
            <div className="text-muted-foreground">Поддержка клиентов</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-game-purple mb-2">5+</div>
            <div className="text-muted-foreground">Лет на рынке</div>
          </div>
        </div>
      </div>
      
      {/* Team */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Наша команда</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { 
              name: "Александр Петров", 
              role: "Основатель и CEO", 
              image: "../../images/icespirit.jpg" 
            },
            { 
              name: "Екатерина Смирнова", 
              role: "Менеджер по закупкам", 
              image: "../../images/healspirit.jpg" 
            },
            { 
              name: "Дмитрий Иванов", 
              role: "Технический директор", 
              image: "../../images/electrospirit.jpg" 
            },
            { 
              name: "Мария Козлова", 
              role: "Служба поддержки", 
              image: "../../images/firespirit.jpg" 
            }
          ].map((member, index) => (
            <div key={index} className="bg-muted/30 rounded-lg overflow-hidden">
              <div className="aspect-square overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold mb-1">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* CTA */}
      <div className="bg-game-purple/10 rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Готовы начать игру?</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Приобретайте ключи для ваших любимых игр прямо сейчас и наслаждайтесь увлекательными приключениями!
        </p>
        <Link to="/catalog" className="game-button-primary px-6 py-3">
          Перейти в каталог
        </Link>
      </div>
    </div>
  );
};

export default About;
