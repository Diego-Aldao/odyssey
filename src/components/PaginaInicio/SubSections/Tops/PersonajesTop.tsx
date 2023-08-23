import SectionContent from "../SectionContent";
import { useState, useEffect } from "react";
import { SwiperSlide } from "swiper/react";
import SectionCard from "../SectionCards/SectionCard/SectionCard";
import { ApiResponseTopPersonaje, DataPersonajeTop } from "../../../../types";
import useFetch from "../../../../hooks/useFetch";
import { BASE_URL_TOPS } from "../../../../constants";

const PersonajesTop = () => {
  const { fetchData, data, loading } = useFetch<ApiResponseTopPersonaje>();
  const [currentData, setCurrentData] = useState<DataPersonajeTop[]>();
  useFetch;

  useEffect(() => {
    void fetchData(`${BASE_URL_TOPS}/characters`);
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
        <SectionContent subtitulo="top en emision">
          <>
            {currentData.map((item) => (
              <SwiperSlide key={item.mal_id}>
                <SectionCard
                  id={item.mal_id}
                  titulo={item.name}
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
export default PersonajesTop;
