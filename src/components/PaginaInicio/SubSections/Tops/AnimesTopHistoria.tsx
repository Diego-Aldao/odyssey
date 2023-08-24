import SectionContent from "../SectionContent";
import { useEffect } from "react";
import { SwiperSlide } from "swiper/react";
import SectionCard from "../SectionCards/SectionCard/SectionCard";
import useFetch from "../../../../hooks/useFetch";
import { BASE_URL_TOPS } from "../../../../constants";
import { ApiResponseTops } from "../../../../types";

const AnimesTopHistoria = () => {
  const { respuestaApi, loading } = useFetch<ApiResponseTops>(
    `${BASE_URL_TOPS}/anime?type=tv`
  );

  return (
    <>
      {loading || !respuestaApi ? (
        <>cargando</>
      ) : (
        <SectionContent subtitulo="top de la historia">
          <>
            {respuestaApi.data.map((item) => (
              <SwiperSlide key={item.mal_id}>
                <SectionCard
                  id={item.mal_id}
                  titulo={item.title}
                  imagenUrl={item.images.webp.image_url}
                />
              </SwiperSlide>
            ))}
          </>
        </SectionContent>
      )}
    </>
  );
};
export default AnimesTopHistoria;
