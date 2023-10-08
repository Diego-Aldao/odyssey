import React, { useState, useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import { ApiResponseMain } from "../../types";
import { BASE_URL_TOPS, SECONDARY_FILTERS_TOPS } from "../../constants";
import CardTops from "../Cards/CardPaginaTops/CardTops";
import Grids from "../PaginasSecundarias/Grids";
import Filtros from "../PaginasSecundarias/Filtros";
import MainInfoAnime from "../Cards/CardPaginaTops/MainInfoAnime";
import Loading from "../Generales/Loading";
import { AnimatePresence } from "framer-motion";
import useTitle from "../../hooks/useTitle";

const TopsAnime = () => {
  const baseUrlAnime = `${BASE_URL_TOPS}/anime`;
  const [currentUrl, setCurrentUrl] = useState<string>(baseUrlAnime);
  const { respuestaApi, loading } = useFetch<ApiResponseMain>(currentUrl);
  const [currentFiltro, setCurrentFiltro] = useState<string>();
  const { fijarTitulo } = useTitle();

  useEffect(() => {
    setCurrentUrl(
      `${baseUrlAnime}${currentFiltro ? `?type=${currentFiltro}` : ""}`
    );
  }, [currentFiltro]);

  useEffect(() => {
    fijarTitulo(`Top Animes -`);
  }, []);

  return (
    <>
      <Filtros
        pathInicial="tops"
        isFilterSecondary={true}
        setCurrentFiltro={setCurrentFiltro}
        filtros={SECONDARY_FILTERS_TOPS}
      />
      <AnimatePresence>
        {loading || !respuestaApi ? (
          <Loading key={"loading"} />
        ) : (
          <Grids
            tipoDeGrid="tabla"
            headerDos="titulo"
            headerTres="score"
            headerCuatro="favoritos"
            key={"grid-anime"}
          >
            <>
              {respuestaApi.data.map((item, index) => (
                <React.Fragment key={item.mal_id}>
                  <CardTops
                    id={item.mal_id}
                    posicion={index}
                    titulo={item.title}
                    imagen={item.images.webp.small_image_url}
                    tipo="anime"
                    score={item.score}
                    favoritos={item.favorites}
                  >
                    <MainInfoAnime
                      tipo={item.type}
                      episodios={item.episodes}
                      fecha={item.aired}
                      miembros={item.members}
                    />
                  </CardTops>
                </React.Fragment>
              ))}
            </>
          </Grids>
        )}
      </AnimatePresence>
    </>
  );
};

export default TopsAnime;
