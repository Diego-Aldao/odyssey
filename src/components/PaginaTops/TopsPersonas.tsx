import React from "react";
import useFetch from "../../hooks/useFetch";
import { ApiResponseTopPersona } from "../../types";
import { BASE_URL_TOPS } from "../../constants";
import CardTable from "../PaginaInicio/SubSections/SectionCards/CardTable/CardTable";
import Grids from "../PaginasSecundarias/Grids";

const TopsPersonas = () => {
  const { respuestaApi, loading } = useFetch<ApiResponseTopPersona>(
    `${BASE_URL_TOPS}/people`
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
                  tipo={"persona"}
                  posicion={index}
                  titulo={item.name}
                  imagen={item.images.jpg.image_url}
                  subtitulo={`${item.given_name} ${item.family_name}`}
                  cumpleaños={item.birthday}
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

export default TopsPersonas;
