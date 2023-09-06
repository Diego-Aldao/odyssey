import React from "react";
import useFetch from "../../hooks/useFetch";
import { ApiResponseTopPersonaje } from "../../types";
import { BASE_URL_TOPS } from "../../constants";
import CardTable from "../PaginaInicio/SubSections/SectionCards/CardTable/CardTable";
import Grids from "../PaginasSecundarias/Grids";
import MainInfoPersonaje from "../PaginaInicio/SubSections/SectionCards/CardTable/MainInfoPersonaje";

const TopsPersonajes = () => {
  const { respuestaApi, loading } = useFetch<ApiResponseTopPersonaje>(
    `${BASE_URL_TOPS}/characters`
  );
  console.log(respuestaApi);
  return (
    <>
      {loading || !respuestaApi ? (
        <>cargando</>
      ) : (
        <Grids
          tipoDeGrid="tabla"
          headerDos="personaje"
          headerTres="nombre en kanji"
          headerCuatro="favoritos"
        >
          <>
            {respuestaApi.data.map((item, index) => (
              <React.Fragment key={item.mal_id}>
                <CardTable
                  id={item.mal_id}
                  tipo={"personaje"}
                  posicion={index}
                  titulo={item.name}
                  imagen={item.images.webp.image_url}
                  favoritos={item.favorites}
                  sideInfo={item.name_kanji}
                >
                  <MainInfoPersonaje sobrenombres={item.nicknames} />
                </CardTable>
              </React.Fragment>
            ))}
          </>
        </Grids>
      )}
    </>
  );
};

export default TopsPersonajes;
