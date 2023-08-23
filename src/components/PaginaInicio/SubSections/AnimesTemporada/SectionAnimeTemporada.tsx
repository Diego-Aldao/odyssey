import { useEffect, useState } from "react";
import SectionContent from "../SectionContent";
import { SwiperSlide } from "swiper/react";
import SectionCard from "../SectionCards/SectionCard/SectionCard";
import { ApiResponseTemporada, DataTemporada } from "../../../../types";
import useFetchTemporadas from "../../../../hooks/useFetch";
import { BASE_URL_SEASONS } from "../../../../constants";

type Props = {
  children: JSX.Element;
};

const SectionAnimeTemporada: React.FC<Props> = ({ children }) => {
  const [currentData, setCurrentData] = useState<DataTemporada[]>();
  const { fetchData, data, loading } =
    useFetchTemporadas<ApiResponseTemporada>();

  useEffect(() => {
    void fetchData(`${BASE_URL_SEASONS}/now`);
  }, []);

  useEffect(() => {
    if (!data) return;
    setCurrentData(data.data.slice(0, 20));
  }, [data]);

  return (
    <section className="sub_section">
      {children}
      {loading || !currentData ? (
        <>cargando</>
      ) : (
        <SectionContent subtitulo={"verano 2023"}>
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
    </section>
  );
};
export default SectionAnimeTemporada;
