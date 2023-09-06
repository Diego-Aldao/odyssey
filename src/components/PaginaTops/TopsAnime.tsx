import React, { useState, useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import { ApiResponseMain } from "../../types";
import { BASE_URL_TOPS, SECONDARY_FILTERS_TOPS } from "../../constants";
import CardTable from "../PaginaInicio/SubSections/SectionCards/CardTable/CardTable";
import Grids from "../PaginasSecundarias/Grids";
import Filtros from "../PaginasSecundarias/Filtros";

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
      <Grids tipoDeGrid="tabla">
        {loading || !respuestaApi ? (
          <>cargando</>
        ) : (
          <>
            {respuestaApi.data.map((item, index) => (
              <React.Fragment key={item.mal_id}>
                <CardTable
                  id={item.mal_id}
                  posicion={index}
                  rank={item.rank}
                  titulo={item.title}
                  imagen={item.images.webp.image_url}
                  tipo={item.type}
                  miembros={item.members}
                  fecha={item.aired}
                  episodios={item.episodes}
                  score={item.score}
                />
              </React.Fragment>
            ))}
          </>
        )}
      </Grids>
    </>
  );
};

export default TopsAnime;