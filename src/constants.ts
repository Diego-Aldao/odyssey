export const MAIN_FILTERS_SEASONS = [
  {
    nombre: "verano 2023",
    query: "now",
    id: 1,
  },
  {
    nombre: "otoño 2023",
    query: "2023/fall",
    id: 2,
  },
  {
    nombre: "invierno 2024",
    query: "2024/winter",
    id: 3,
  },
];

export const MAIN_FILTERS_EPISODES = [
  {
    nombre: "recientes",
    query: undefined,
    id: 1,
  },
  {
    nombre: "populares",
    query: "popular",
    id: 2,
  },
];

export const SECONDARY_FILTERS_SEASONS = [
  {
    nombre: "todos",
    query: "",
    id: 1,
  },
  {
    nombre: "tv",
    query: "tv",
    id: 2,
  },
  {
    nombre: "ona",
    query: "ona",
    id: 3,
  },
  {
    nombre: "ova",
    query: "ova",
    id: 4,
  },
  {
    nombre: "pelicula",
    query: "movie",
    id: 5,
  },
  {
    nombre: "especial",
    query: "special",
    id: 6,
  },
];

export const MAIN_FILTERS_TRAILERS = [
  {
    nombre: "recientes",
    query: undefined,
    id: 1,
  },
  {
    nombre: "populares",
    query: "popular",
    id: 2,
  },
];

export const MAIN_FILTERS_TOPS = [
  {
    nombre: "animes",
    query: "anime",
    id: 1,
  },
  {
    nombre: "personajes",
    query: "personajes",
    id: 2,
  },
  {
    nombre: "personas",
    query: "personas",
    id: 3,
  },
];

export const SECONDARY_FILTERS_TOPS = [
  {
    nombre: "todos",
    query: "",
    id: 1,
  },
  {
    nombre: "tv",
    query: "tv",
    id: 2,
  },
  {
    nombre: "ona",
    query: "ona",
    id: 3,
  },
  {
    nombre: "ova",
    query: "ova",
    id: 4,
  },
  {
    nombre: "pelicula",
    query: "movie",
    id: 5,
  },
  {
    nombre: "especial",
    query: "special",
    id: 6,
  },
];

export const BASE_URL_EPISODES = "https://api.jikan.moe/v4/watch/episodes";

export const BASE_URL_SEASONS = "https://api.jikan.moe/v4/seasons";

export const BASE_URL_TRAILERS = "https://api.jikan.moe/v4/watch/promos";

export const BASE_URL_TOPS = "https://api.jikan.moe/v4/top";

export const BASE_URL_DETAILS = "https://api.jikan.moe/v4";

export const BASE_URL_DETAILS_CHARACTER = "https://api.jikan.moe/v4/characters";

export const BASE_URL_DETAILS_PEOPLE = "https://api.jikan.moe/v4/people";
