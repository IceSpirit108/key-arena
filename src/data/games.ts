
import { GameInterface } from "@/types/game";

export const games: GameInterface[] = [
  {
    id: 1,
    title: "Cyberpunk 2077",
    description: "Cyberpunk 2077 — приключенческая ролевая игра с открытым миром, рассказывающая о киберпанке-наёмнике Ви и борьбе за жизнь в мегаполисе Найт-Сити. Мрачное будущее стало ещё более впечатляющим в обновлении для PlayStation 5. В этом огромном открытом мире также доступно дополнение-шпионский триллер «Призрачная свобода».",
    price: 2499,
    discount: 15,
    image: "../../images/cyberpunk.jpg",
    bgImage: "../../images/cyberpunk.jpg",
    rating: 4.5,
    genre: ["RPG", "Action", "Open World"],
    releaseDate: "10.12.2020",
    platform: ["PC", "PlayStation", "Xbox"],
    developer: "CD Projekt RED",
    publisher: "CD Projekt RED"
  },
  {
    id: 2,
    title: "Baldur's Gate 3",
    description: "Соберите отряд и возвращайтесь в Забытые Королевства в истории о товариществе и предательстве, выживании и самопожертвовании, о сладком привкусе темных желаний.",
    price: 3499,
    discount: 0,
    image: "../../images/BLG3.jpg",
    bgImage: "../../images/BLG3.jpg",
    rating: 4.9,
    genre: ["RPG", "Strategy", "Adventure"],
    releaseDate: "03.08.2023",
    platform: ["PC", "PlayStation", "Mac"],
    developer: "Larian Studios",
    publisher: "Larian Studios"
  },
  {
    id: 3,
    title: "Elden Ring",
    description: "ELDEN RING, разработанный FromSoftware, Inc. и BANDAI NAMCO Entertainment Inc., является фэнтезийным ролевым боевиком, действие которого происходит в мире, созданном Хидэтакой Миядзаки и Джорджем Р.Р. Мартином.",
    price: 3199,
    discount: 10,
    image: "../../images/EldenRing.jpg",
    bgImage: "../../images/EldenRing.jpg",
    rating: 4.8,
    genre: ["RPG", "Action", "Open World", "Souls-like"],
    releaseDate: "25.02.2022",
    platform: ["PC", "PlayStation", "Xbox"],
    developer: "FromSoftware",
    publisher: "Bandai Namco"
  },
  {
    id: 4,
    title: "Red Dead Redemption 2",
    description: "Америка, 1899 год. Эпоха Дикого Запада подходит к концу. После ограбления в Блэкуотере Артур Морган и другие подручные Датча ван дер Линде вынуждены пуститься в бега.",
    price: 2199,
    discount: 20,
    image: "../../images/RDR2.jpg",
    bgImage: "../../images/RDR2.jpg",
    rating: 4.9,
    genre: ["Action", "Adventure", "Open World"],
    releaseDate: "26.10.2018",
    platform: ["PC", "PlayStation", "Xbox"],
    developer: "Rockstar Games",
    publisher: "Rockstar Games"
  },
  {
    id: 5,
    title: "The Witcher 3: Wild Hunt",
    description: "The Witcher 3: Wild Hunt — это сюжетная ролевая игра с открытым миром. Вы играете за Геральта из Ривии, охотника на чудовищ. Вас ждёт огромный открытый мир, полный торговых городов, пиратских островов, опасных горных перевалов и заброшенных пещер.",
    price: 1499,
    discount: 70,
    image: "../../images/witcher3.jpg",
    bgImage: "../../images/witcher3.jpg",
    rating: 4.8,
    genre: ["RPG", "Action", "Open World"],
    releaseDate: "19.05.2015",
    platform: ["PC", "PlayStation", "Xbox", "Nintendo Switch"],
    developer: "CD Projekt RED",
    publisher: "CD Projekt RED"
  },
  {
    id: 6,
    title: "FIFA 24",
    description: "EA SPORTS FC™ 24 приветствует вас в The World's Game: самой реалистичной футбольной симуляции с передовыми технологиями HyperMotionV, улучшенным движком Frostbite и обновленными версиями режимов Ultimate Team, карьеры и прочих.",
    price: 3999,
    discount: 0,
    image: "../../images/fifa25.jpg",
    bgImage: "../../images/fifa25.jpg",
    rating: 4.2,
    genre: ["Sports", "Simulation"],
    releaseDate: "29.09.2023",
    platform: ["PC", "PlayStation", "Xbox", "Nintendo Switch"],
    developer: "EA Vancouver",
    publisher: "Electronic Arts"
  },
  {
    id: 7,
    title: "Counter-Strike 2",
    description: "Counter-Strike 2 знаменует собой крупнейший технический скачок в истории серии, обеспечивая новейшие возможности и обновления для грядущих лет. Всё это стало возможным благодаря новому движку Source 2 и множеству улучшений по просьбам сообщества.",
    price: 0,
    discount: 0,
    image: "../../images/CS2.jpg",
    bgImage: "../../images/CS2.jpg",
    rating: 4.6,
    genre: ["Shooter", "Action", "Multiplayer"],
    releaseDate: "27.09.2023",
    platform: ["PC"],
    developer: "Valve",
    publisher: "Valve"
  },
  {
    id: 8,
    title: "Starfield",
    description: "Starfield — это первая новая игровая вселенная Bethesda Game Studios за 25 лет. В этой игре нового поколения в жанре RPG действие происходит среди звёзд. Создайте любого персонажа и исследуйте с беспрецедентной свободой.",
    price: 4299,
    discount: 5,
    image: "../../images/starfield.jpg",
    bgImage: "../../images/starfield.jpg",
    rating: 4.0,
    genre: ["RPG", "Open World", "Adventure", "Sci-Fi"],
    releaseDate: "06.09.2023",
    platform: ["PC", "Xbox"],
    developer: "Bethesda Game Studios",
    publisher: "Bethesda Softworks"
  }

];

export const featuredGames = [
  games[0], // Cyberpunk 2077
  games[1], // Baldur's Gate 3
  games[2], // Elden Ring
  games[3], // Red Dead Redemption 2
];

export const specialOffers = games.filter(game => game.discount >= 15); //спецпредл
