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
