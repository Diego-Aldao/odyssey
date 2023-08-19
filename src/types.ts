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
  data: string | Date | number | never[] | ObjetoMal[] | undefined;
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

export type APIResult = {
  data: Data;
};

export type SecondaryApiResult = {
  pagination?: Pagination;
  data: DataPersonaje[] | DataEpisode[] | DataRecomendados[];
};

export type DataRecomendados = {
  entry: Entry;
  url: string;
  votes: number;
};

export type DataPersonaje = {
  character: Character;
  role: Role;
  favorites: number;
  voice_actors: VoiceActor[];
};

export type DataEpisode = {
  mal_id: number;
  title: string;
  episode: string;
  url: string;
  images: ImagesSecondary;
};

export type Entry = {
  mal_id: number;
  url: string;
  images: { [key: string]: Image };
  title: string;
};

export type Data = {
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
  background: string;
  season: string;
  year: number;
  broadcast: Broadcast;
  producers: Demographic[];
  licensors: [];
  studios: Demographic[];
  genres: Demographic[];
  explicit_genres: [];
  themes: Demographic[];
  demographics: Demographic[];
  relations: Relation[];
  theme: Theme;
  external: External[];
  streaming: External[];
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
