import { useParams } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import { BASE_URL_DETAILS_CHARACTER } from "../../../constants";
import ImagenBackground from "../ImagenBackground";
import PersonajeInfo from "./PersonajeInfo";
import AsidePersonaje from "./AsidePersonaje";
import HeaderPersonaje from "./HeaderPersonaje";
import DoblajePersonaje from "./DoblajePersonaje";
import { ApiResponsePersonaje } from "../../../types";
import SectionPictures from "../SectionPictures";

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
            <SectionPictures
              id={id}
              nombre={respuestaApi.data.name}
              baseUrl={BASE_URL_DETAILS_CHARACTER}
            />
          </section>
        </>
      )}
    </>
  );
};

export default DetallePersonaje;
