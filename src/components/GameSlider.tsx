
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { featuredGames } from "@/data/games";

const GameSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredGames.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredGames.length) % featuredGames.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[500px] md:h-[600px] overflow-hidden">
      {featuredGames.map((game, index) => (
        <div
          key={game.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            currentSlide === index ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="relative h-full w-full">
            <div className="absolute inset-0 bg-gradient-to-t from-game-dark to-transparent z-10" />
            <div className="absolute inset-0 bg-gradient-to-r from-game-dark to-transparent/0 z-10" />
            
            <img
              src={game.bgImage || game.image}
              alt={game.title}
              className="h-full w-full object-cover object-center"
            />
            
            <div className="absolute inset-0 z-20 flex items-end md:items-center">
              <div className="container py-16">
                <div className="max-w-xl">
                  <h2 className="text-3xl md:text-5xl font-bold mb-3">{game.title}</h2>
                  <p className="text-sm md:text-base text-muted-foreground mb-6 line-clamp-3">
                    {game.description}
                  </p>
                  <div className="flex items-center gap-4 mb-6">
                    {game.discount > 0 ? (
                      <div className="flex items-center gap-2">
                        <span className="text-xl font-bold text-game-orange">
                          {Math.round(game.price * (1 - game.discount / 100))} ₽
                        </span>
                        <span className="text-sm text-muted-foreground line-through">
                          {game.price} ₽
                        </span>
                      </div>
                    ) : (
                      <span className="text-xl font-bold">{game.price} ₽</span>
                    )}
                  </div>
                  <Link 
                    to={`/product/${game.id}`}
                    className="game-button-primary px-6 py-3"
                  >
                    Подробнее
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 h-10 w-10 rounded-full bg-background/50 backdrop-blur flex items-center justify-center hover:bg-background/80 transition-colors"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 h-10 w-10 rounded-full bg-background/50 backdrop-blur flex items-center justify-center hover:bg-background/80 transition-colors"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
        {featuredGames.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all ${
              currentSlide === index
                ? "w-6 bg-game-purple"
                : "w-2 bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default GameSlider;
