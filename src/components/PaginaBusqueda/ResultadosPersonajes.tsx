import { VarianteSections, transition } from "../../VariantesFramerMotion";
import { BASE_URL_CHARACTER } from "../../constants";
import useFetch from "../../hooks/useFetch";
import { ApiResponseTopPersonaje } from "../../types";
import Loading from "../Generales/Loading";
import ListadoSinResultados from "../PaginaDetalle/DetalleAnime/MainSection/ListadoSinResultados";
import CardBusqueda from "./CardBusqueda";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";

type Props = {
  query: string | undefined;
};

const ResultadosPersonaje = ({ query }: Props) => {
  const [queryValida, setQueryValida] = useState<boolean>();
  const url = `${BASE_URL_CHARACTER}?q=${query || ""}`;
  const { respuestaApi, loading } = useFetch<ApiResponseTopPersonaje>(url);

  useEffect(() => {
    if (query) {
      setQueryValida(query.length >= 4 ? true : false);
    }
  }, [query]);

  return (
    <AnimatePresence>
      {loading || !respuestaApi ? (
        <Loading key={"loading"} />
      ) : (
        <>
          {queryValida && respuestaApi.data?.length >= 1 ? (
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={VarianteSections}
              transition={transition}
              key={"resultados"}
              className="grid gap-2 md:grid-cols-2 md:gap-4 lg:grid-cols-3"
            >
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
            </motion.div>
          ) : (
            <ListadoSinResultados nombreSeccion="personajes" />
          )}
        </>
      )}
    </AnimatePresence>
  );
};

export default ResultadosPersonaje;
