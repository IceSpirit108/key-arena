
import { useParams, Link } from "react-router-dom";
import { games } from "@/data/games";
import { useCart } from "@/contexts/CartContext";
import { Star, ChevronLeft } from "lucide-react";
import GameCard from "@/components/GameCard";

const Product = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  
  const game = games.find((g) => g.id === Number(id));
  
  if (!game) {
    return (
      <div className="container py-16 text-center">
        <h1 className="text-3xl font-bold mb-6">Товар не найден</h1>
        <Link to="/catalog" className="game-button-primary px-6 py-3">
          Вернуться в каталог
        </Link>
      </div>
    );
  }
  
  // Find similar games by genre overlap
  const similarGames = games
    .filter((g) => g.id !== game.id && g.genre.some((genre) => game.genre.includes(genre)))
    .slice(0, 4);
  
  const handleAddToCart = () => {
    addToCart(game);
  };

  return (
    <div className="container py-16">
      <Link to="/catalog" className="inline-flex items-center text-muted-foreground hover:text-game-purple mb-6">
        <ChevronLeft className="w-4 h-4 mr-1" />
        Вернуться в каталог
      </Link>
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* Image */}
        <div className="relative rounded-lg overflow-hidden border border-border/50">
          <img 
            src={game.bgImage || game.image} 
            alt={game.title} 
            className="w-full aspect-[4/3] object-cover"
          />
          {game.discount > 0 && (
            <div className="absolute top-4 left-4 bg-game-orange px-3 py-1 rounded-lg text-sm font-bold">
              -{game.discount}%
            </div>
          )}
        </div>
        
        {/* Info */}
        <div>
          <h1 className="text-3xl font-bold mb-2">{game.title}</h1>
          
          <div className="flex items-center gap-2 mb-4">
            <div className="flex items-center gap-1">
              <Star className="w-5 h-5 fill-game-orange text-game-orange" />
              <span className="font-medium">{game.rating}</span>
            </div>
            <span className="text-sm text-muted-foreground">({game.rating * 100} отзывов)</span>
          </div>
          
          <div className="flex items-center gap-4 mb-6">
            {game.discount > 0 ? (
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-game-orange">
                  {Math.round(game.price * (1 - game.discount / 100))} ₽
                </span>
                <span className="text-muted-foreground line-through">
                  {game.price} ₽
                </span>
              </div>
            ) : (
              <span className="text-2xl font-bold">{game.price} ₽</span>
            )}
          </div>
          
          <button 
            onClick={handleAddToCart}
            className="game-button-primary px-6 py-3 w-full md:w-auto mb-8"
          >
            В корзину
          </button>
          
          <div className="bg-muted/30 rounded-lg p-4 mb-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Разработчик</p>
                <p className="font-medium">{game.developer}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Издатель</p>
                <p className="font-medium">{game.publisher}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Дата выхода</p>
                <p className="font-medium">{game.releaseDate}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Платформы</p>
                <p className="font-medium">{game.platform.join(", ")}</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {game.genre.map((genre) => (
              <Link
                key={genre}
                to={`/catalog?genre=${genre}`}
                className="bg-muted px-3 py-1 rounded-full text-sm hover:bg-muted/70 transition-colors"
              >
                {genre}
              </Link>
            ))}
          </div>
        </div>
      </div>
      
      {/* Description */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Описание</h2>
        <p className="text-muted-foreground whitespace-pre-line">{game.description}</p>
      </div>
      
      {/* Similar Games */}
      {similarGames.length > 0 && (
        <div className="mt-16">
          <h2 className="text-xl font-semibold mb-6">Похожие игры</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {similarGames.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;
