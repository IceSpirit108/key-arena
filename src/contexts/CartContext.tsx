
import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { GameInterface } from "@/types/game";
import { toast } from "sonner";

// Sound for adding to cart
const addToCartSound = new Audio("/cart-add.mp3");

interface CartItem {
  game: GameInterface;
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (game: GameInterface) => void;
  removeFromCart: (gameId: number) => void;
  updateQuantity: (gameId: number, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  
  // Load cart from localStorage on initial load
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart));
      } catch (error) {
        console.error("Failed to parse cart data:", error);
      }
    }
  }, []);
  
  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (game: GameInterface) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.game.id === game.id);
      
      if (existingItem) {
        // Play sound
        addToCartSound.play().catch(err => console.error("Error playing sound:", err));
        
        toast("Товар добавлен в корзину", {
          description: `${game.title} (${existingItem.quantity + 1} шт.)`,
        });
        
        return prevItems.map((item) =>
          item.game.id === game.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // Play sound
        addToCartSound.play().catch(err => console.error("Error playing sound:", err));
        
        toast("Товар добавлен в корзину", {
          description: game.title,
        });
        
        return [...prevItems, { game, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (gameId: number) => {
    setCartItems((prevItems) => {
      const updatedCart = prevItems.filter((item) => item.game.id !== gameId);
      
      toast("Товар удален из корзины");
      
      return updatedCart;
    });
  };

  const updateQuantity = (gameId: number, quantity: number) => {
    if (quantity < 1) {
      removeFromCart(gameId);
      return;
    }
    
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.game.id === gameId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
    toast("Корзина очищена");
  };

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalPrice = cartItems.reduce((total, item) => {
    const price = item.game.price;
    const discountedPrice = item.game.discount 
      ? Math.round(price * (1 - item.game.discount / 100)) 
      : price;
    
    return total + discountedPrice * item.quantity;
  }, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
