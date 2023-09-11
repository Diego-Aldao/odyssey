import { BASE_URL_CHARACTER } from "../../constants";
import useFetch from "../../hooks/useFetch";
import { ApiResponseTopPersonaje } from "../../types";
import CardBusqueda from "./CardBusqueda";

type Props = {
  query: string | undefined;
};

const ResultadosPersonaje = ({ query }: Props) => {
  const url = `${BASE_URL_CHARACTER}?q=${query || ""}`;
  const { respuestaApi, loading } = useFetch<ApiResponseTopPersonaje>(url);

  return (
    <div className="grid gap-2 mt-10 md:grid-cols-2 md:gap-4 lg:grid-cols-3">
      <>
        {loading || !respuestaApi ? (
          <>cargando...</>
        ) : (
          <>
            {respuestaApi.data.map((personaje) => (
              <CardBusqueda
                titulo={personaje.name}
                imagen={personaje.images.webp.image_url}
                id={personaje.mal_id}
                tipo="personaje"
              >
                <>
                  {personaje.name_kanji && (
                    <p className="text-xs font-semibold">
                      ({personaje.name_kanji})
                    </p>
                  )}
                  <p className="text-xs capitalize font-semibold">
                    favoritos:{" "}
                    <span className="font-normal">{personaje.favorites}</span>
                  </p>
                </>
              </CardBusqueda>
            ))}
          </>
        )}
      </>
    </div>
  );
};

export default ResultadosPersonaje;
