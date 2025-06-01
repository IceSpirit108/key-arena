
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border/40 bg-muted/30 py-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">KeyArena</h3>
            <p className="text-sm text-muted-foreground">
              Ваш надежный магазин игровых ключей с самыми выгодными предложениями.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-game-purple transition-colors">
                  Главная
                </Link>
              </li>
              <li>
                <Link to="/catalog" className="text-sm text-muted-foreground hover:text-game-purple transition-colors">
                  Каталог
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-game-purple transition-colors">
                  О нас
                </Link>
              </li>
              <li>
                <Link to="/contacts" className="text-sm text-muted-foreground hover:text-game-purple transition-colors">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Категории</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/catalog?genre=action" className="text-sm text-muted-foreground hover:text-game-purple transition-colors">
                  Экшен
                </Link>
              </li>
              <li>
                <Link to="/catalog?genre=rpg" className="text-sm text-muted-foreground hover:text-game-purple transition-colors">
                  RPG
                </Link>
              </li>
              <li>
                <Link to="/catalog?genre=strategy" className="text-sm text-muted-foreground hover:text-game-purple transition-colors">
                  Стратегии
                </Link>
              </li>
              <li>
                <Link to="/catalog?genre=simulation" className="text-sm text-muted-foreground hover:text-game-purple transition-colors">
                  Симуляторы
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">
                Email: info@keyarena.com
              </li>
              <li className="text-sm text-muted-foreground">
                Телефон: +7 (999) 123-45-67
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-border/40 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} KeyArena. Все права защищены.
          </p>
          <div className="mt-4 md:mt-0 flex gap-4">
            <a href="#" className="text-sm text-muted-foreground hover:text-game-purple transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-game-purple transition-colors">
              Условия использования
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
