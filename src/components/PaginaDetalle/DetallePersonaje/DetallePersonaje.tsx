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
import AsideDetalle from "../AsideDetalle";
import MainSectionDetalle from "../MainSectionDetalle";
import Loading from "../../Generales/Loading";
import useTitle from "../../../hooks/useTitle";
import { useEffect } from "react";

const DetallePersonaje = () => {
  const { id } = useParams();

  const { respuestaApi, loading } = useFetch<ApiResponsePersonaje>(
    `${BASE_URL_DETAILS_CHARACTER}/${id || ""}/full`
  );
  const { fijarTitulo } = useTitle();

  useEffect(() => {
    if (!respuestaApi) return;
    fijarTitulo(`${respuestaApi.data.name} -`);
  }, [respuestaApi]);

  return (
    <>
      {loading || !respuestaApi ? (
        <Loading />
      ) : (
        <>
          <ImagenBackground
            imagenUrl={respuestaApi.data.images.webp.image_url}
          />
          <AsideDetalle
            tituloAside="animeografia"
            imagenUrl={respuestaApi.data.images.webp.image_url}
          >
            <AsidePersonaje dataAside={respuestaApi.data.anime} />
          </AsideDetalle>
          <MainSectionDetalle>
            <>
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
            </>
          </MainSectionDetalle>
        </>
      )}
    </>
  );
};

export default DetallePersonaje;
