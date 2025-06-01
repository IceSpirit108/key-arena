
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container py-32 text-center">
      <h1 className="text-7xl font-bold text-game-purple mb-4">404</h1>
      <h2 className="text-3xl font-bold mb-6">Страница не найдена</h2>
      <p className="text-muted-foreground mb-8 max-w-md mx-auto">
        Похоже, вы нашли баг в нашей игре. Эта страница не существует или была удалена.
      </p>
      <Link to="/" className="game-button-primary px-6 py-3">
        Вернуться на главную
      </Link>
    </div>
  );
};

export default NotFound;
