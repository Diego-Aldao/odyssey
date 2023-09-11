import { BASE_URL_ANIME } from "../../constants";
import useFetch from "../../hooks/useFetch";
import { ApiResponseMain } from "../../types";
import CardBusqueda from "./CardBusqueda";

type Props = {
  query: string | undefined;
};

const ResultadosAnime = ({ query }: Props) => {
  const url = `${BASE_URL_ANIME}?q=${query || ""}`;
  const { respuestaApi, loading } = useFetch<ApiResponseMain>(url);

  return (
    <div className="grid gap-2 mt-10 md:grid-cols-2 md:gap-4 lg:grid-cols-3">
      <>
        {loading || !respuestaApi ? (
          <>cargando...</>
        ) : (
          <>
            {respuestaApi.data.map((anime) => (
              <CardBusqueda
                titulo={anime.title}
                imagen={anime.images.webp.image_url}
                id={anime.mal_id}
                tipo="anime"
              >
                <>
                  <p className="text-xs font-semibold">{anime.type}</p>
                  <p className="text-xs capitalize font-semibold">
                    score: <span className="font-normal">{anime.score}</span>
                  </p>
                  <p className="text-xs capitalize font-semibold">
                    miembros:{" "}
                    <span className="font-normal">
                      {anime.members.toLocaleString()}{" "}
                    </span>
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

export default ResultadosAnime;
