import { SwiperSlide } from "swiper/react";
import SectionCard from "../SectionCards/SectionCard/SectionCard";
import useFetch from "../../../../hooks/useFetch";
import { BASE_URL_TOPS } from "../../../../constants";
import { ApiResponseTops } from "../../../../types";
import SubSectionContent from "../SubSectionContent";
import Loading from "../../../Generales/Loading";
import SubSectionSwiper from "../SubSectionSwiper";
import LazyLoad from "react-lazy-load";

const AnimesTopHistoria = () => {
  const { respuestaApi, loading } = useFetch<ApiResponseTops>(
    `${BASE_URL_TOPS}/anime?type=tv`
  );

  return (
    <LazyLoad
      offset={300}
      className="min-h-[480px] bg-main-color-background rounded-xl"
    >
      <SubSectionContent subtitulo="top de la historia" destino="tops/animes">
        {loading || !respuestaApi ? (
          <Loading customClases="max-h-[400px] mt-0" />
        ) : (
          <SubSectionSwiper>
            <>
              {respuestaApi.data.map((item) => (
                <SwiperSlide key={item.mal_id}>
                  <SectionCard
                    id={item.mal_id}
                    titulo={item.title}
                    imagenUrl={item.images.webp.image_url}
                    tipo="anime"
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
export default AnimesTopHistoria;
