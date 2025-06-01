
import GameSlider from "@/components/GameSlider";
import GameCard from "@/components/GameCard";
import { Link } from "react-router-dom";
import { games, specialOffers } from "@/data/games";

const Index = () => {
  // Select 4 random games for "Popular Games" section
  const popularGames = [...games].sort(() => 0.5 - Math.random()).slice(0, 4);

  return (
    <div>
      <GameSlider />
      
      {/* Special Offers Section */}
      <section className="py-16">
        <div className="container">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">Специальные предложения</h2>
            <Link 
              to="/catalog?discount=true"
              className="text-game-purple hover:text-game-purple/80 text-sm font-medium"
            >
              Смотреть все
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {specialOffers.slice(0, 4).map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Banner */}
      <section className="py-16 bg-game-purple/10">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Лучшие игровые ключи по доступным ценам</h2>
              <p className="text-muted-foreground mb-6">
                В нашем магазине вы найдете ключи для популярных игровых платформ: 
                Steam, Epic Games, Origin, Uplay, Battle.net и многих других. 
                Мгновенная доставка и гарантия качества.
              </p>
              <Link to="/catalog" className="game-button-primary px-6 py-3">
                Перейти в каталог
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-lg overflow-hidden border border-game-purple/20">
                <img 
                  src="../../images/galaxy.jpg" 
                  alt="Game Keys" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -right-4 -bottom-4 bg-game-purple text-white p-4 rounded-lg">
                <p className="font-bold">24/7</p>
                <p className="text-sm">Поддержка</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Popular Games */}
      <section className="py-16">
        <div className="container">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">Популярные игры</h2>
            <Link 
              to="/catalog"
              className="text-game-purple hover:text-game-purple/80 text-sm font-medium"
            >
              Смотреть все
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {popularGames.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Features */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <h2 className="text-2xl font-bold text-center mb-12">Почему выбирают нас</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-background p-6 rounded-lg border border-border/50">
              <div className="h-12 w-12 rounded-full bg-game-purple/20 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-game-purple">
                  <path d="M12 2v20"/>
                  <path d="m17 5-5-3-5 3"/>
                  <path d="m17 19-5 3-5-3"/>
                  <path d="M2 12h20"/>
                  <path d="m5 7-3 5 3 5"/>
                  <path d="m19 7 3 5-3 5"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Мгновенная доставка</h3>
              <p className="text-muted-foreground">Получите ключ сразу после оплаты на вашу электронную почту.</p>
            </div>
            
            <div className="bg-background p-6 rounded-lg border border-border/50">
              <div className="h-12 w-12 rounded-full bg-game-purple/20 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-game-purple">
                  <path d="M7 10v12"/>
                  <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">100% Гарантия</h3>
              <p className="text-muted-foreground">Мы гарантируем работоспособность всех продаваемых ключей.</p>
            </div>
            
            <div className="bg-background p-6 rounded-lg border border-border/50">
              <div className="h-12 w-12 rounded-full bg-game-purple/20 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-game-purple">
                  <path d="M12 13V2l8 4-8 4"/>
                  <path d="M20.55 10.23A9 9 0 1 1 8 4.94"/>
                  <path d="M8 10a5 5 0 1 0 8.9 2.02"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Поддержка 24/7</h3>
              <p className="text-muted-foreground">Наши специалисты всегда готовы помочь вам с любыми вопросами.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
