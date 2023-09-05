import React from "react";
import useFetch from "../../hooks/useFetch";
import { ApiResponseTopPersonaje } from "../../types";
import { BASE_URL_TOPS } from "../../constants";
import CardTable from "../PaginaInicio/SubSections/SectionCards/CardTable/CardTable";
import Grids from "../PaginasSecundarias/Grids";

const TopsPersonajes = () => {
  const { respuestaApi, loading } = useFetch<ApiResponseTopPersonaje>(
    `${BASE_URL_TOPS}/characters`
  );

  return (
    <>
      {loading || !respuestaApi ? (
        <>cargando</>
      ) : (
        <Grids tipoDeGrid="tabla">
          <>
            {respuestaApi.data.map((item, index) => (
              <React.Fragment key={item.mal_id}>
                <CardTable
                  id={item.mal_id}
                  tipo={"personaje"}
                  posicion={index}
                  titulo={item.name}
                  imagen={item.images.webp.image_url}
                  subtitulo={item.name_kanji}
                  sobrenombres={item.nicknames}
                  favoritos={item.favorites}
                />
              </React.Fragment>
            ))}
          </>
        </Grids>
      )}
    </>
  );
};

export default TopsPersonajes;
