import React from "react";
import useFetch from "../../hooks/useFetch";
import { ApiResponseTopPersonaje } from "../../types";
import { BASE_URL_TOPS } from "../../constants";
import CardTops from "../Cards/CardPaginaTops/CardTops";
import Grids from "../PaginasSecundarias/Grids";
import MainInfoPersonaje from "../Cards/CardPaginaTops/MainInfoPersonaje";
import { AnimatePresence } from "framer-motion";
import Loading from "../Generales/Loading";
import useTitle from "../../hooks/useTitle";
import { useEffect } from "react";

const TopsPersonajes = () => {
  const { respuestaApi, loading } = useFetch<ApiResponseTopPersonaje>(
    `${BASE_URL_TOPS}/characters`
  );
  const { fijarTitulo } = useTitle();

  useEffect(() => {
    fijarTitulo(`Top Personajes -`);
  }, []);

  return (
    <AnimatePresence>
      {loading || !respuestaApi ? (
        <Loading key={"loading"} />
      ) : (
        <Grids
          tipoDeGrid="tabla"
          headerDos="personaje"
          headerTres="nombre en kanji"
          headerCuatro="favoritos"
          key={"grid-personaje"}
        >
          <>
            {respuestaApi.data.map((item, index) => (
              <React.Fragment key={item.mal_id}>
                <CardTops
                  id={item.mal_id}
                  tipo={"personaje"}
                  posicion={index}
                  titulo={item.name}
                  imagen={item.images.webp.image_url}
                  favoritos={item.favorites}
                  sideInfo={item.name_kanji}
                >
                  <MainInfoPersonaje sobrenombres={item.nicknames} />
                </CardTops>
              </React.Fragment>
            ))}
          </>
        </Grids>
      )}
    </AnimatePresence>
  );
};

export default TopsPersonajes;
