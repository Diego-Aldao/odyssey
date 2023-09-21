import { SwiperSlide } from "swiper/react";
import SectionCard from "../SectionCards/SectionCard/SectionCard";
import useFetch from "../../../../hooks/useFetch";
import { ApiResponseTops } from "../../../../types";
import { BASE_URL_TOPS } from "../../../../constants";
import SubSectionContent from "../SubSectionContent";
import SubSectionSwiper from "../SubSectionSwiper";
import Loading from "../../../Generales/Loading";
import LazyLoad from "react-lazy-load";

const AnimesTopEmision = () => {
  const { respuestaApi, loading } = useFetch<ApiResponseTops>(
    `${BASE_URL_TOPS}/anime?type=tv&filter=airing`
  );

  return (
    <LazyLoad offset={500} className="min-h-[300px]">
      <SubSectionContent subtitulo="top en emision" destino="tops/anime">
        {loading ? (
          <Loading customClases="loading_height_subSection" />
        ) : (
          <SubSectionSwiper>
            <>
              {respuestaApi &&
                respuestaApi.data.map((item) => (
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
export default AnimesTopEmision;
