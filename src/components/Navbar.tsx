import { Link, useNavigate } from "react-router-dom";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/contexts/CartContext";
import { useAuth } from "@/contexts/AuthContext";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartItems } = useCart();
  const { userEmail, logout } = useAuth();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-game-dark/95 backdrop-blur-sm border-b border-border/40">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-game-purple">
              Key<span className="text-white">Arena</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link
              to="/"
              className="text-sm font-medium text-foreground/70 hover:text-game-purple transition-colors"
            >
              Главная
            </Link>
            <Link
              to="/catalog"
              className="text-sm font-medium text-foreground/70 hover:text-game-purple transition-colors"
            >
              Каталог
            </Link>
            <Link
              to="/about"
              className="text-sm font-medium text-foreground/70 hover:text-game-purple transition-colors"
            >
              О нас
            </Link>
            <Link
              to="/contacts"
              className="text-sm font-medium text-foreground/70 hover:text-game-purple transition-colors"
            >
              Контакты
            </Link>
            {!userEmail && (
              <Link
                to="/auth"
                className="text-sm font-medium text-foreground/70 hover:text-game-purple transition-colors"
              >
                Вход / Регистрация
              </Link>
            )}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          {userEmail && (
            <div className="text-sm text-white">
              {userEmail}{" "}
              <button
                onClick={handleLogout}
                className="ml-2 text-red-400 hover:underline"
              >
                Выйти
              </button>
            </div>
          )}

        <button
          onClick={() => {
            if (userEmail) {
              navigate("/cart");
            } else {
              navigate("/auth");
            }
          }}
          className="relative"
        >
          <ShoppingCart className="text-foreground/70 hover:text-game-purple transition-colors" />
          {cartItems.length > 0 && (
            <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-game-orange flex items-center justify-center text-xs text-white">
              {cartItems.length}
            </span>
          )}
        </button>

          <button className="md:hidden" onClick={toggleMenu}>
            <Menu className="text-foreground/70 hover:text-game-purple transition-colors" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-background/95 z-50 animate-fade-in">
          <div className="container flex flex-col h-full pt-16">
            <button className="absolute top-4 right-4" onClick={toggleMenu}>
              <X className="text-foreground/70 hover:text-game-purple transition-colors" />
            </button>

            <nav className="flex flex-col items-center justify-center h-full gap-8 -mt-16">
              <Link
                to="/"
                className="text-xl font-medium hover:text-game-purple transition-colors"
                onClick={toggleMenu}
              >
                Главная
              </Link>
              <Link
                to="/catalog"
                className="text-xl font-medium hover:text-game-purple transition-colors"
                onClick={toggleMenu}
              >
                Каталог
              </Link>
              <Link
                to="/about"
                className="text-xl font-medium hover:text-game-purple transition-colors"
                onClick={toggleMenu}
              >
                О нас
              </Link>
              <Link
                to="/contacts"
                className="text-xl font-medium hover:text-game-purple transition-colors"
                onClick={toggleMenu}
              >
                Контакты
              </Link>
              {!userEmail && (
                <Link
                  to="/auth"
                  className="text-xl font-medium hover:text-game-purple transition-colors"
                  onClick={toggleMenu}
                >
                  Вход / Регистрация
                </Link>
              )}
              {userEmail && (
                <button
                  onClick={() => {
                    toggleMenu();
                    handleLogout();
                  }}
                  className="text-xl font-medium text-red-500 hover:underline"
                >
                  Выйти
                </button>
              )}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
