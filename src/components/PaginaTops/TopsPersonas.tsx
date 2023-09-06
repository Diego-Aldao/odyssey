import React from "react";
import useFetch from "../../hooks/useFetch";
import { ApiResponseTopPersona } from "../../types";
import { BASE_URL_TOPS } from "../../constants";
import CardTable from "../PaginaInicio/SubSections/SectionCards/CardTable/CardTable";
import Grids from "../PaginasSecundarias/Grids";
import MainInfoPersona from "../PaginaInicio/SubSections/SectionCards/CardTable/MainInfoPersona";

const TopsPersonas = () => {
  const { respuestaApi, loading } = useFetch<ApiResponseTopPersona>(
    `${BASE_URL_TOPS}/people`
  );

  return (
    <>
      {loading || !respuestaApi ? (
        <>cargando</>
      ) : (
        <Grids
          tipoDeGrid="tabla"
          headerDos="persona"
          headerTres="cumpleaños"
          headerCuatro="favoritos"
        >
          <>
            {respuestaApi.data.map((item, index) => {
              const fechaCumpleaños = new Date(
                item.birthday
              ).toLocaleDateString("es-AR", {
                day: "numeric",
                month: "long",
                year: "numeric",
              });
              return (
                <React.Fragment key={item.mal_id}>
                  <CardTable
                    id={item.mal_id}
                    tipo={"persona"}
                    posicion={index}
                    titulo={item.name}
                    imagen={item.images.jpg.image_url}
                    sideInfo={fechaCumpleaños}
                    favoritos={item.favorites}
                  >
                    <MainInfoPersona
                      nombreSecundario={`${item.given_name} ${item.family_name}`}
                    />
                  </CardTable>
                </React.Fragment>
              );
            })}
          </>
        </Grids>
      )}
    </>
  );
};

export default TopsPersonas;
