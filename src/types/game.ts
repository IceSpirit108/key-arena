
export interface GameInterface {
  id: number;
  title: string;
  description: string;
  price: number;
  discount: number;
  image: string;
  bgImage?: string;
  rating: number;
  genre: string[];
  releaseDate: string;
  platform: string[];
  developer: string;
  publisher: string;
}
