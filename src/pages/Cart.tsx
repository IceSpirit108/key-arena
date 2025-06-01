
import { useCart } from "@/contexts/CartContext";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { Minus, Plus, X } from "lucide-react";

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart, totalPrice } = useCart();

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      toast.error("Корзина пуста");
      return;
    }

    clearCart();

    toast.success("Товар отправлен на почту!", {
      description: "Спасибо за покупку!",
    });
    
    
  };

  if (cartItems.length === 0) {
    return (
      <div className="container py-16 text-center">
        <h1 className="text-3xl font-bold mb-6">Корзина пуста</h1>
        <p className="text-muted-foreground mb-8">
          В вашей корзине пока нет товаров. Перейдите в каталог, чтобы выбрать игры.
        </p>
        <Link to="/catalog" className="game-button-primary px-6 py-3">
          Перейти в каталог
        </Link>
      </div>
    );
  }

  return (
    <div className="container py-16">
      <h1 className="text-3xl font-bold mb-8">Корзина</h1>
      
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-muted/30 rounded-lg overflow-hidden">
            <div className="grid grid-cols-[1fr_auto] md:grid-cols-[100px_1fr_120px_120px_auto] p-4 border-b border-border font-medium">
              <div className="hidden md:block">Изображение</div>
              <div>Название</div>
              <div className="hidden md:block">Цена</div>
              <div className="hidden md:block">Количество</div>
              <div></div>
            </div>
            
            {cartItems.map((item) => {
              const discountedPrice = item.game.discount 
                ? Math.round(item.game.price * (1 - item.game.discount / 100)) 
                : item.game.price;
              
              return (
                <div key={item.game.id} className="grid grid-cols-[1fr_auto] md:grid-cols-[100px_1fr_120px_120px_auto] gap-4 p-4 items-center border-b border-border/50 last:border-0">
                  {/* Image - hidden on mobile */}
                  <div className="hidden md:block">
                    <img 
                      src={item.game.image} 
                      alt={item.game.title} 
                      className="h-16 w-16 object-cover rounded"
                    />
                  </div>
                  
                  {/* Game info */}
                  <div className="flex items-center gap-3">
                    {/* Image - shown only on mobile */}
                    <div className="md:hidden">
                      <img 
                        src={item.game.image} 
                        alt={item.game.title} 
                        className="h-16 w-16 object-cover rounded"
                      />
                    </div>
                    
                    <div>
                      <Link 
                        to={`/product/${item.game.id}`}
                        className="font-medium hover:text-game-purple transition-colors"
                      >
                        {item.game.title}
                      </Link>
                      
                      {/* Price - shown only on mobile */}
                      <div className="md:hidden mt-1">
                        {item.game.discount > 0 ? (
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-game-orange">
                              {discountedPrice} ₽
                            </span>
                            <span className="text-xs text-muted-foreground line-through">
                              {item.game.price} ₽
                            </span>
                          </div>
                        ) : (
                          <span className="font-bold">{item.game.price} ₽</span>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  {/* Price - hidden on mobile */}
                  <div className="hidden md:block">
                    {item.game.discount > 0 ? (
                      <div className="flex flex-col">
                        <span className="font-bold text-game-orange">
                          {discountedPrice} ₽
                        </span>
                        <span className="text-xs text-muted-foreground line-through">
                          {item.game.price} ₽
                        </span>
                      </div>
                    ) : (
                      <span className="font-bold">{item.game.price} ₽</span>
                    )}
                  </div>
                  
                  {/* Quantity control */}
                  <div className="flex items-center">
                    <button 
                      onClick={() => updateQuantity(item.game.id, item.quantity - 1)}
                      className="h-8 w-8 flex items-center justify-center bg-muted rounded-l-md hover:bg-muted/70"
                      aria-label="Уменьшить количество"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <div className="h-8 min-w-[40px] flex items-center justify-center bg-background">
                      {item.quantity}
                    </div>
                    <button 
                      onClick={() => updateQuantity(item.game.id, item.quantity + 1)}
                      className="h-8 w-8 flex items-center justify-center bg-muted rounded-r-md hover:bg-muted/70"
                      aria-label="Увеличить количество"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                  
                  {/* Remove button */}
                  <div className="justify-self-end">
                    <button 
                      onClick={() => removeFromCart(item.game.id)}
                      className="h-8 w-8 flex items-center justify-center bg-muted/50 rounded-md hover:bg-destructive/10 hover:text-destructive"
                      aria-label="Удалить товар"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
        <div className="bg-muted/30 rounded-lg p-6 h-fit">
          <h2 className="text-xl font-semibold mb-4">Сумма заказа</h2>
          
          <div className="space-y-3 mb-6">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Товаров</span>
              <span>{cartItems.reduce((sum, item) => sum + item.quantity, 0)}</span>
            </div>
            
            <div className="flex justify-between font-bold">
              <span>Итого</span>
              <span>{totalPrice} ₽</span>
            </div>
          </div>
          
          <button 
            onClick={handleCheckout}
            className="game-button-primary w-full px-6 py-3 mb-4"
          >
            Оформить заказ
          </button>
          
          <button 
            onClick={clearCart}
            className="text-sm text-muted-foreground hover:text-game-purple transition-colors w-full text-center"
          >
            Очистить корзину
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
