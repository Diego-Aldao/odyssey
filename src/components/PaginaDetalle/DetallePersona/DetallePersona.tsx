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

const DetallePersona = () => {
  const { id } = useParams();
  const { respuestaApi, loading } = useFetch<ApiResponsePersona>(
    `${BASE_URL_DETAILS_PEOPLE}/${id || ""}/full`
  );
  return (
    <>
      {loading || !respuestaApi ? (
        <>cargando...</>
      ) : (
        <>
          <ImagenBackground
            imagenUrl={respuestaApi.data.images.jpg.image_url}
          />
          <AsidePersona
            imagen={respuestaApi.data.images.jpg.image_url}
            about={respuestaApi.data.about}
          />
          <section className="relative z-20 md:col-span-2 lg:col-span-3 section-detalle lg:mt-20">
            <HeaderPersona
              nombre={respuestaApi.data.name}
              nombresAlternativos={respuestaApi.data.alternate_names}
              cumpleaños={respuestaApi.data.birthday}
              sitioWeb={respuestaApi.data.website_url}
              favoritos={respuestaApi.data.favorites}
            />
            <DoblajesPersona voces={respuestaApi.data.voices} />
            <OtrosRolesPersona otrosRolesAnime={respuestaApi.data.anime} />
            {respuestaApi.data.manga.length >= 1 && (
              <MangasPersona mangas={respuestaApi.data.manga} />
            )}
            <SectionPictures
              id={id}
              nombre={respuestaApi.data.name}
              baseUrl={BASE_URL_DETAILS_PEOPLE}
            />
          </section>
        </>
      )}
    </>
  );
};

export default DetallePersona;
