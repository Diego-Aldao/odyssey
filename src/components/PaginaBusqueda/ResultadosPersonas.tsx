import { AnimatePresence, motion } from "framer-motion";
import { BASE_URL_PEOPLE } from "../../constants";
import useFetch from "../../hooks/useFetch";
import { ApiResponseTopPersona } from "../../types";
import Loading from "../Generales/Loading";
import CardBusqueda from "./CardBusqueda";
import { VarianteSections, transition } from "../../VariantesFramerMotion";
import ListadoSinResultados from "../PaginaDetalle/DetalleAnime/MainSection/ListadoSinResultados";
import { useState, useEffect } from "react";

type Props = {
  query: string | undefined;
};

const ResultadosPersonas = ({ query }: Props) => {
  const [queryValida, setQueryValida] = useState<boolean>();
  const url = `${BASE_URL_PEOPLE}?q=${query || ""}`;
  const { respuestaApi, loading } = useFetch<ApiResponseTopPersona>(url);

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
              {respuestaApi.data.map((persona) => {
                let fechaCumpleaños;
                if (persona.birthday) {
                  fechaCumpleaños = new Date(
                    persona.birthday
                  ).toLocaleDateString("es-AR", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  });
                }

                return (
                  <CardBusqueda
                    titulo={persona.name}
                    imagen={persona.images.jpg.image_url}
                    id={persona.mal_id}
                    tipo="persona"
                  >
                    <>
                      {persona.given_name && (
                        <p className="text-xs font-semibold">
                          ({persona.given_name} {persona.family_name})
                        </p>
                      )}
                      {fechaCumpleaños && (
                        <p className="text-xs font-semibold">
                          cumpleaños:{" "}
                          <span className="font-normal">{fechaCumpleaños}</span>
                        </p>
                      )}

                      <p className="text-xs capitalize font-semibold">
                        favoritos:{" "}
                        <span className="font-normal">{persona.favorites}</span>
                      </p>
                    </>
                  </CardBusqueda>
                );
              })}
            </motion.div>
          ) : (
            <ListadoSinResultados nombreSeccion="personas" />
          )}
        </>
      )}
    </AnimatePresence>
  );
};

export default ResultadosPersonas;
