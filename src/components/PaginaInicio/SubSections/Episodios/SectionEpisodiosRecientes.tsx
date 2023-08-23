import { useEffect, useState } from "react";
import SectionContent from "../SectionContent";
import { SwiperSlide } from "swiper/react";
import SectionCard from "../SectionCards/SectionCard/SectionCard";
import useFetch from "../../../../hooks/useFetch";
import { ApiResponseEpisodios, DataEpisodios } from "../../../../types";
import { BASE_URL_EPISODES } from "../../../../constants";

type Props = {
  children: JSX.Element;
};

const SectionEpisodiosRecientes: React.FC<Props> = ({ children }) => {
  const { fetchData, data, loading } = useFetch<ApiResponseEpisodios>();
  const [currentData, setCurrentData] = useState<DataEpisodios[]>();

  useEffect(() => {
    void fetchData(BASE_URL_EPISODES);
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
        <section className="sub_section">
          {children}
          <SectionContent subtitulo="los ultimos capítulos">
            <>
              {currentData.map((item) => (
                <SwiperSlide key={item.entry.mal_id}>
                  <SectionCard
                    id={item.entry.mal_id}
                    titulo={item.entry.title}
                    episodios={item.episodes}
                    imagenUrl={item.entry.images?.webp.image_url}
                  />
                </SwiperSlide>
              ))}
            </>
          </SectionContent>
        </section>
      )}
    </>
  );
};
export default SectionEpisodiosRecientes;
