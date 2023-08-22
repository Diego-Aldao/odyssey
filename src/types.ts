/*types para objetos de my anime list */
export type ObjetoMal = {
  mal_id: number;
  type: string;
  name: string;
  url: string;
};

export type FechaMal = {
  day: number;
  month: number;
  year: number;
};

export type Episodio = {
  mal_id: number;
  url: string;
  title: string;
  premium: boolean;
};

/*types customs */

export type Filtro = {
  nombre: string;
  query: string;
  id: number;
};

export type InfoAside = {
  nombre: string;
  data:
    | string
    | Date
    | number
    | never[]
    | ObjetoMal[]
    | undefined
    | Demographic;
};

export type InfoTags = {
  nombre?: string;
  data?: string | number | ObjetoMal[];
  icono?: JSX.Element;
  primerItem?: boolean;
  ocultoMovile?: boolean;
  id: number;
  esRankeable?: boolean;
};

/*TYPES FETCH*/

export type ApiResponseTemporada = {
  pagination: PaginationTemporada;
  data: DataTemporada[];
};
export type PaginationTemporada = {
  last_visible_page: number;
  has_next_page: boolean;
  current_page: number;
  items: Items;
};
export type DataTemporada = {
  mal_id: number;
  url: string;
  images: { [key: string]: Image };
  trailer: Trailer;
  approved: boolean;
  titles: Title[];
  title: string;
  title_english: null | string;
  title_japanese: string;
  title_synonyms: string[];
  type: DatumType;
  source: Source;
  episodes: number | null;
  status: Status;
  airing: boolean;
  aired: Aired;
  duration: string;
  rating: Rating;
  score: number;
  scored_by: number;
  rank: number;
  popularity: number;
  members: number;
  favorites: number;
  synopsis: string;
  background: null | string;
  season: Season | null;
  year: number | null;
  broadcast: Broadcast;
  producers: Demographic[];
  licensors: Demographic[];
  studios: Demographic[];
  genres: Demographic[];
  explicit_genres: [];
  themes: Demographic[];
  demographics: Demographic[];
};

/*types fetch pagina detalle */

export type ApiResponseDetalle = {
  data: DataDetalle;
};
export type DataDetalle = {
  mal_id: number;
  url: string;
  images: { [key: string]: Image };
  trailer: Trailer;
  approved: boolean;
  titles: Title[];
  title: string;
  title_english: string;
  title_japanese: string;
  title_synonyms: [];
  type: string;
  source: string;
  episodes: number;
  status: string;
  airing: boolean;
  aired: Aired;
  duration: string;
  rating: string;
  score: number;
  scored_by: number;
  rank: number;
  popularity: number;
  members: number;
  favorites: number;
  synopsis: string;
  background: null;
  season: string;
  year: number;
  broadcast: Broadcast;
  producers: Generic[];
  licensors: [];
  studios: Generic[];
  genres: Generic[];
  explicit_genres: [];
  themes: Generic[];
  demographics: Demographic;
  relations: Relation[];
  theme: Theme;
  external: External[];
  streaming: External[];
};

export type ApiResponseDetalleEpisodios = {
  pagination: Pagination;
  data: DataEpisode[];
};
export type DataEpisode = {
  mal_id: number;
  title: string;
  episode: string;
  url: string;
  images: ImagesSecondary;
};

export type ApiResponseDetalleNoticias = {
  pagination: Pagination;
  data: DataNews[];
};
export type DataNews = {
  mal_id: number;
  url: string;
  title: string;
  date: Date;
  author_username: string;
  author_url: string;
  forum_url: string;
  images: ImagesNews;
  comments: number;
  excerpt: string;
};

export type ApiResponseDetallePersonajes = {
  pagination: Pagination;
  data: DataPersonaje[];
};
export type DataPersonaje = {
  character: Character;
  role: Role;
  favorites: number;
  voice_actors: VoiceActor[];
};

export type ApiResponseDetalleRecomendado = {
  pagination: Pagination;
  data: DataRecomendados[];
};
export type DataRecomendados = {
  entry: Entry;
  url: string;
  votes: number;
};

export type ApiResponseDetalleReviews = {
  pagination: Pagination;
  data: DataReviews[];
};
export type DataReviews = {
  mal_id: number;
  url: string;
  type: Type;
  reactions: Reactions;
  date: Date;
  review: string;
  score: number;
  tags: Tag[];
  is_spoiler: boolean;
  is_preliminary: boolean;
  episodes_watched: null;
  user: User;
};

export type ImagesNews = {
  jpg: Jpg;
};

export type Entry = {
  mal_id: number;
  url: string;
  images: { [key: string]: Image };
  title: string;
};

export type Aired = {
  from: Date;
  to: null;
  prop: Prop;
  string: string;
};

export type Prop = {
  from: From;
  to: From;
};

export type From = {
  day: number | null;
  month: number | null;
  year: number | null;
};

export type Broadcast = {
  day: string;
  time: string;
  timezone: string;
  string: string;
};

export type Demographic = {
  mal_id: number;
  type: Type;
  name: string;
  url: string;
};

export enum Type {
  Anime = "anime",
  Manga = "manga",
}

export type External = {
  name: string;
  url: string;
};

export type Image = {
  image_url: string;
  small_image_url: string;
  large_image_url: string;
};

export type Relation = {
  relation: string;
  entry: Demographic[];
};

export type Theme = {
  openings: string[];
  endings: string[];
};

export type Title = {
  type: string;
  title: string;
};

export type Trailer = {
  youtube_id: string;
  url: string;
  embed_url: string;
  images: Images;
};

export type Images = {
  image_url: string;
  small_image_url: string;
  medium_image_url: string;
  large_image_url: string;
  maximum_image_url: string;
};

export type ImagesSecondary = {
  jpg: Jpg;
};

export type Jpg = {
  image_url: string;
};

export type Pagination = {
  last_visible_page: number;
  has_next_page: boolean;
};

export type Character = {
  mal_id: number;
  url: string;
  images: CharacterImages;
  name: string;
};

export type CharacterImages = {
  jpg: Jpg;
  webp: Webp;
};

export type Webp = {
  image_url: string;
  small_image_url: string;
};

export enum Role {
  Main = "Main",
  Supporting = "Supporting",
}

export type VoiceActor = {
  person: Person;
  language: Language;
};

export enum Language {
  English = "English",
  French = "French",
  German = "German",
  Italian = "Italian",
  Japanese = "Japanese",
  PortugueseBR = "Portuguese (BR)",
  Spanish = "Spanish",
}

export type Person = {
  mal_id: number;
  url: string;
  images: PersonImages;
  name: string;
};

export type PersonImages = {
  jpg: Jpg;
};

export type Reactions = {
  overall: number;
  nice: number;
  love_it: number;
  funny: number;
  confusing: number;
  informative: number;
  well_written: number;
  creative: number;
};

export enum Tag {
  Funny = "Funny",
  MixedFeelings = "Mixed Feelings",
  NotRecommended = "Not Recommended",
  Recommended = "Recommended",
}

export type User = {
  url: string;
  username: string;
  images: { [key: string]: Image };
};

export enum Timezone {
  AsiaTokyo = "Asia/Tokyo",
}

export enum DemographicType {
  Anime = "anime",
}

export enum Rating {
  PG13Teens13OrOlder = "PG-13 - Teens 13 or older",
  R17ViolenceProfanity = "R - 17+ (violence & profanity)",
}

export enum Season {
  Summer = "summer",
}

export enum Source {
  LightNovel = "Light novel",
  Manga = "Manga",
  Novel = "Novel",
  Original = "Original",
}

export enum Status {
  CurrentlyAiring = "Currently Airing",
  FinishedAiring = "Finished Airing",
}

export enum TitleType {
  Default = "Default",
  English = "English",
  Japanese = "Japanese",
  Synonym = "Synonym",
}

export type ImagesTemporada = {
  image_url: null | string;
  small_image_url: null | string;
  medium_image_url: null | string;
  large_image_url: null | string;
  maximum_image_url: null | string;
};

export enum DatumType {
  Ona = "ONA",
  Special = "Special",
  Tv = "TV",
}

export type Items = {
  count: number;
  total: number;
  per_page: number;
};

export type Generic = {
  mal_id: number;
  type: Type;
  name: string;
  url: string;
};
