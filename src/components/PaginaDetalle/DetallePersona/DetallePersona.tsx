import ImagenBackground from "../ImagenBackground";
import AsidePersona from "./AsidePersona";
import HeaderPersona from "./HeaderPersona";
import DoblajesPersona from "./DoblajesPersona";
import OtrosRolesPersona from "./OtrosRolesPersona";
import MangasPersona from "./MangasPersona";
import useFetch from "../../../hooks/useFetch";
import { ApiResponsePersona } from "../../../types";
import { useParams } from "react-router-dom";
import { BASE_URL_DETAILS_PEOPLE } from "../../../constants";
import SectionPictures from "../SectionPictures";
import AsideDetalle from "../AsideDetalle";
import MainSectionDetalle from "../MainSectionDetalle";
import Loading from "../../Generales/Loading";

const DetallePersona = () => {
  const { id } = useParams();
  const { respuestaApi, loading } = useFetch<ApiResponsePersona>(
    `${BASE_URL_DETAILS_PEOPLE}/${id || ""}/full`
  );
  return (
    <>
      {loading || !respuestaApi ? (
        <Loading />
      ) : (
        <>
          <ImagenBackground
            imagenUrl={respuestaApi.data.images.jpg.image_url}
          />
          <AsideDetalle
            imagenUrl={respuestaApi.data.images.jpg.image_url}
            tituloAside="informacion"
          >
            <AsidePersona about={respuestaApi.data.about} />
          </AsideDetalle>
          <MainSectionDetalle>
            <>
              <HeaderPersona
                nombre={respuestaApi.data.name}
                nombresAlternativos={respuestaApi.data.alternate_names}
                cumpleaños={respuestaApi.data.birthday}
                sitioWeb={respuestaApi.data.website_url}
                favoritos={respuestaApi.data.favorites}
              />
              <DoblajesPersona voces={respuestaApi.data.voices} />
              {respuestaApi.data.anime.length >= 1 && (
                <OtrosRolesPersona otrosRolesAnime={respuestaApi.data.anime} />
              )}
              {respuestaApi.data.manga.length >= 1 && (
                <MangasPersona mangas={respuestaApi.data.manga} />
              )}
              <SectionPictures
                id={id}
                nombre={respuestaApi.data.name}
                baseUrl={BASE_URL_DETAILS_PEOPLE}
              />
            </>
          </MainSectionDetalle>
        </>
      )}
    </>
  );
};

export default DetallePersona;
