import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import { BASE_URL_DETAILS_CHARACTER } from "../../../constants";
import fakeRespuesta from "../../../mocks/DetallePersonajes.json";
import ImagenBackground from "../ImagenBackground";
import FiltrosDetalle from "../FiltrosDetalle";
import SectionDetalle from "../SectionDetalle";
import PersonajeInfo from "./PersonajeInfo";
import AsidePersonaje from "./AsidePersonaje";
import HeaderPersonaje from "./HeaderPersonaje";
import DoblajePersonaje from "./DoblajePersonaje";
import ImagenesPersonaje from "./ImagenesPersonaje";
import { ApiResponsePersonaje } from "../../../types";

const DetallePersonaje = () => {
  const { id } = useParams();

  const { respuestaApi, loading } = useFetch<ApiResponsePersonaje>(
    `${BASE_URL_DETAILS_CHARACTER}/${id || ""}/full`
  );

  return (
    <>
      {loading || !respuestaApi ? (
        <p>cargando...</p>
      ) : (
        <>
          <ImagenBackground
            imagenUrl={respuestaApi.data.images.webp.image_url}
          />
          <AsidePersonaje
            imagenUrl={respuestaApi.data.images.webp.image_url}
            dataAside={respuestaApi.data.anime}
          />

          <section className="relative z-20 md:col-span-2 lg:col-span-3 section-detalle lg:mt-20">
            <HeaderPersonaje
              nombre={respuestaApi.data.name}
              sobrenombres={respuestaApi.data.nicknames}
            />
            <PersonajeInfo info={respuestaApi.data.about} />
            <DoblajePersonaje dataDoblaje={respuestaApi.data.voices} />
            <ImagenesPersonaje id={id} />
          </section>
        </>
      )}
    </>
  );
};

export default DetallePersonaje;
