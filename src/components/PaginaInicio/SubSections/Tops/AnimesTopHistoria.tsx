import SectionContent from "../SectionContent";
import { useEffect, useState } from "react";
import { SwiperSlide } from "swiper/react";
import SectionCard from "../SectionCards/SectionCard/SectionCard";
import useFetch from "../../../../hooks/useFetch";
import { BASE_URL_TOPS } from "../../../../constants";
import { ApiResponseTops, MainData } from "../../../../types";

const AnimesTopHistoria = () => {
  const { fetchData, data, loading } = useFetch<ApiResponseTops>();
  const [currentData, setCurrentData] = useState<MainData[]>();

  useEffect(() => {
    void fetchData(`${BASE_URL_TOPS}/anime?type=tv`);
  }, []);

  useEffect(() => {
    if (!data) return;
    setCurrentData(data.data.slice(0, 20));
  }, [data]);

  return (
    <>
      {loading || !currentData ? (
        <>cargando</>
      ) : (
        <SectionContent subtitulo="top de la historia">
          <>
            {currentData.map((item) => (
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
