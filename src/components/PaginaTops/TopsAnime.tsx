import React, { useState, useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import { ApiResponseMain } from "../../types";
import { BASE_URL_TOPS, SECONDARY_FILTERS_TOPS } from "../../constants";
import CardTable from "../PaginaInicio/SubSections/SectionCards/CardTable/CardTable";
import Grids from "../PaginasSecundarias/Grids";
import Filtros from "../PaginasSecundarias/Filtros";
import MainInfoAnime from "../PaginaInicio/SubSections/SectionCards/CardTable/MainInfoAnime";
import Loading from "../Generales/Loading";
import { AnimatePresence } from "framer-motion";

const TopsAnime = () => {
  const baseUrlAnime = `${BASE_URL_TOPS}/anime`;
  const [currentUrl, setCurrentUrl] = useState<string>(baseUrlAnime);
  const { respuestaApi, loading } = useFetch<ApiResponseMain>(currentUrl);
  const [currentFiltro, setCurrentFiltro] = useState<string>();

  useEffect(() => {
    setCurrentUrl(
      `${baseUrlAnime}${currentFiltro ? `?type=${currentFiltro}` : ""}`
    );
  }, [currentFiltro]);
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
                  <CardTable
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
                  </CardTable>
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
