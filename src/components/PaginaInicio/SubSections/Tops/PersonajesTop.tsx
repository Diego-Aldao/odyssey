import { SwiperSlide } from "swiper/react";
import SectionCard from "../SectionCards/SectionCard/SectionCard";
import { ApiResponseTopPersonaje } from "../../../../types";
import useFetch from "../../../../hooks/useFetch";
import { BASE_URL_TOPS } from "../../../../constants";
import SubSectionContent from "../SubSectionContent";
import SubSectionSwiper from "../SubSectionSwiper";
import Loading from "../../../Generales/Loading";
import LazyLoad from "react-lazy-load";

const PersonajesTop = () => {
  const { respuestaApi, loading } = useFetch<ApiResponseTopPersonaje>(
    `${BASE_URL_TOPS}/characters`
  );

  return (
    <LazyLoad
      offset={300}
      className="min-h-[480px] bg-main-color-background rounded-xl"
    >
      <SubSectionContent subtitulo="top personajes" destino="tops/personajes">
        {loading || !respuestaApi ? (
          <Loading customClases="max-h-[400px] mt-0" />
        ) : (
          <SubSectionSwiper>
            <>
              {respuestaApi.data.map((item) => (
                <SwiperSlide key={item.mal_id}>
                  <SectionCard
                    id={item.mal_id}
                    titulo={item.name}
                    imagenUrl={item.images.webp.image_url}
                    tipo="personaje"
                  />
                </SwiperSlide>
              ))}
            </>
          </SubSectionSwiper>
        )}
      </SubSectionContent>
    </LazyLoad>
  );
};
export default PersonajesTop;
