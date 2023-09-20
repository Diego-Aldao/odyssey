import { AnimatePresence, motion } from "framer-motion";
import { BASE_URL_ANIME } from "../../constants";
import useFetch from "../../hooks/useFetch";
import { ApiResponseMain } from "../../types";
import Loading from "../Generales/Loading";
import CardBusqueda from "./CardBusqueda";
import { VarianteSections, transition } from "../../VariantesFramerMotion";
import ListadoSinResultados from "../PaginaDetalle/DetalleAnime/MainSection/ListadoSinResultados";

type Props = {
  query: string | undefined;
};

const ResultadosAnime = ({ query }: Props) => {
  const url = `${BASE_URL_ANIME}?q=${query || ""}`;
  const { respuestaApi, loading } = useFetch<ApiResponseMain>(url);

  return (
    <AnimatePresence>
      {loading || !respuestaApi ? (
        <Loading key={"loading"} />
      ) : (
        <>
          {respuestaApi.data.length >= 1 ? (
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={VarianteSections}
              transition={transition}
              className="grid gap-2 md:grid-cols-2 md:gap-4 lg:grid-cols-3"
            >
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
            </motion.div>
          ) : (
            <ListadoSinResultados nombreSeccion="animes" />
          )}
        </>
      )}
    </AnimatePresence>
  );
};

export default ResultadosAnime;
