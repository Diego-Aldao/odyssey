import SectionContent from "../SectionContent";
import { SwiperSlide } from "swiper/react";
import SectionCard from "../SectionCards/SectionCard/SectionCard";
import useFetch from "../../../../hooks/useFetch";
import { ApiResponseTops } from "../../../../types";
import { BASE_URL_TOPS } from "../../../../constants";

const AnimesTopEmision = () => {
  const { respuestaApi, loading } = useFetch<ApiResponseTops>(
    `${BASE_URL_TOPS}/anime?type=tv&filter=airing`
  );

  return (
    <>
      {loading || !respuestaApi ? (
        <>cargando</>
      ) : (
        <SectionContent subtitulo="top en emision" destino="tops/anime">
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
        </SectionContent>
      )}
    </>
  );
};
export default AnimesTopEmision;
