
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import GameCard from "@/components/GameCard";
import { games } from "@/data/games";
import { GameInterface } from "@/types/game";
import { Slider } from "@/components/ui/slider";

const Catalog = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredGames, setFilteredGames] = useState<GameInterface[]>(games);
  const [activeGenres, setActiveGenres] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 5000]);
  const [showDiscount, setShowDiscount] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  // Extract unique genres
  const allGenres = Array.from(
    new Set(games.flatMap((game) => game.genre))
  ).sort();

  // Get max price from all games
  const maxPrice = Math.max(...games.map((game) => game.price));

  // Initialize filters from URL params
  useEffect(() => {
    const genreParam = searchParams.get("genre");
    if (genreParam) {
      setActiveGenres([genreParam]);
    }
    
    const discountParam = searchParams.get("discount");
    if (discountParam === "true") {
      setShowDiscount(true);
    }
    
    const searchParam = searchParams.get("search");
    if (searchParam) {
      setSearchTerm(searchParam);
    }
    
    const minPrice = searchParams.get("minPrice");
    const maxPrice = searchParams.get("maxPrice");
    if (minPrice && maxPrice) {
      setPriceRange([Number(minPrice), Number(maxPrice)]);
    }
  }, []);

  // Apply filters
  useEffect(() => {
    let result = [...games];
    
    // Filter by search term
    if (searchTerm) {
      result = result.filter((game) =>
        game.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Filter by genres
    if (activeGenres.length > 0) {
      result = result.filter((game) =>
        game.genre.some((genre) => activeGenres.includes(genre))
      );
    }
    
    // Filter by price range
    result = result.filter(
      (game) => {
        const discountedPrice = game.discount 
          ? Math.round(game.price * (1 - game.discount / 100)) 
          : game.price;
        
        return discountedPrice >= priceRange[0] && discountedPrice <= priceRange[1];
      }
    );
    
    // Filter by discount
    if (showDiscount) {
      result = result.filter((game) => game.discount > 0);
    }
    
    setFilteredGames(result);
    
    // Update URL params
    const params = new URLSearchParams();
    if (activeGenres.length === 1) {
      params.set("genre", activeGenres[0]);
    }
    if (showDiscount) {
      params.set("discount", "true");
    }
    if (searchTerm) {
      params.set("search", searchTerm);
    }
    params.set("minPrice", priceRange[0].toString());
    params.set("maxPrice", priceRange[1].toString());
    
    setSearchParams(params, { replace: true });
  }, [activeGenres, priceRange, showDiscount, searchTerm]);

  const toggleGenre = (genre: string) => {
    setActiveGenres((prev) =>
      prev.includes(genre)
        ? prev.filter((g) => g !== genre)
        : [...prev, genre]
    );
  };

  const resetFilters = () => {
    setActiveGenres([]);
    setPriceRange([0, maxPrice]);
    setShowDiscount(false);
    setSearchTerm("");
    setSearchParams({});
  };

  return (
    <div className="container py-16">
      <h1 className="text-3xl font-bold mb-8">Каталог игр</h1>
      
      <div className="grid md:grid-cols-4 gap-8">
        {/* Filters Sidebar */}
        <div className="md:col-span-1">
          <div className="bg-muted/30 rounded-lg p-6 sticky top-20">
            <h2 className="font-semibold mb-4">Фильтры</h2>
            
            {/* Search */}
            <div className="mb-6">
              <label htmlFor="search" className="block text-sm font-medium mb-2">
                Поиск
              </label>
              <input
                type="text"
                id="search"
                placeholder="Название игры..."
                className="w-full p-2 rounded-md bg-background border border-border"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            {/* Price Range */}
            <div className="mb-6">
              <label className="block text-sm font-medium mb-3">
                Цена: {priceRange[0]} ₽ - {priceRange[1]} ₽
              </label>
              <Slider
                defaultValue={[priceRange[0], priceRange[1]]}
                min={0}
                max={maxPrice}
                step={100}
                value={priceRange}
                onValueChange={(value) => setPriceRange(value as [number, number])}
                className="my-4"
              />
            </div>
            
            {/* Discount filter */}
            <div className="mb-6">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={showDiscount}
                  onChange={() => setShowDiscount(!showDiscount)}
                  className="rounded border-border bg-background h-4 w-4"
                />
                <span>Только со скидкой</span>
              </label>
            </div>
            
            {/* Genres */}
            <div className="mb-6">
              <h3 className="text-sm font-medium mb-2">Жанры</h3>
              <div className="space-y-1">
                {allGenres.map((genre) => (
                  <label key={genre} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={activeGenres.includes(genre)}
                      onChange={() => toggleGenre(genre)}
                      className="rounded border-border bg-background h-4 w-4"
                    />
                    <span>{genre}</span>
                  </label>
                ))}
              </div>
            </div>
            
            <button
              onClick={resetFilters}
              className="w-full bg-muted hover:bg-muted/70 text-muted-foreground px-4 py-2 rounded-md mt-4"
            >
              Сбросить фильтры
            </button>
          </div>
        </div>
        
        {/* Game Grid */}
        <div className="md:col-span-3">
          {filteredGames.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredGames.map((game) => (
                <GameCard key={game.id} game={game} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-xl font-medium mb-2">Игры не найдены</h3>
              <p className="text-muted-foreground">
                Попробуйте изменить параметры фильтрации
              </p>
              <button
                onClick={resetFilters}
                className="game-button-secondary px-4 py-2 mt-4"
              >
                Сбросить фильтры
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Catalog;
