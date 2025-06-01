
import { Link } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { GameInterface } from "@/types/game";
import { Star } from "lucide-react";

interface GameCardProps {
  game: GameInterface;
}

const GameCard = ({ game }: GameCardProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(game);
  };

  return (
    <Link to={`/product/${game.id}`} className="game-card group">
      <div className="relative aspect-[3/4] overflow-hidden">
        <img 
          src={game.image} 
          alt={game.title} 
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-2 right-2 flex items-center gap-1 bg-game-dark/80 px-2 py-1 rounded-lg backdrop-blur-sm">
          <Star className="w-4 h-4 fill-game-orange text-game-orange" />
          <span className="text-xs font-medium">{game.rating}</span>
        </div>
        {game.discount > 0 && (
          <div className="absolute top-2 left-2 bg-game-orange px-2 py-1 rounded-lg text-xs font-bold">
            -{game.discount}%
          </div>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold line-clamp-1 mb-2">{game.title}</h3>
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            {game.discount > 0 ? (
              <>
                <span className="text-xs text-muted-foreground line-through">
                  {game.price} ₽
                </span>
                <span className="font-bold text-game-orange">
                  {Math.round(game.price * (1 - game.discount / 100))} ₽
                </span>
              </>
            ) : (
              <span className="font-bold">{game.price} ₽</span>
            )}
          </div>
          <button
            className="game-button-accent px-3 py-1 text-xs"
            onClick={handleAddToCart}
          >
            В корзину
          </button>
        </div>
      </div>
    </Link>
  );
};

export default GameCard;
