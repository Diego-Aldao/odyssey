import SectionContent from "../SectionContent";
import { SwiperSlide } from "swiper/react";
import SectionCard from "../SectionCards/SectionCard/SectionCard";
import useFetch from "../../../../hooks/useFetch";
import { ApiResponseEpisodios } from "../../../../types";
import { BASE_URL_EPISODES } from "../../../../constants";

type Props = {
  children: JSX.Element;
};

const SectionEpisodiosRecientes: React.FC<Props> = ({ children }) => {
  const { respuestaApi, loading } =
    useFetch<ApiResponseEpisodios>(BASE_URL_EPISODES);

  return (
    <>
      {loading || !respuestaApi ? (
        <>cargando</>
      ) : (
        <section className="sub_section">
          {children}
          <SectionContent subtitulo="los ultimos capítulos" destino="episodios">
            <>
              {respuestaApi.data.map((item) => (
                <SwiperSlide key={item.entry.mal_id}>
                  <SectionCard
                    id={item.entry.mal_id}
                    titulo={item.entry.title}
                    episodios={item.episodes}
                    imagenUrl={item.entry.images?.webp.image_url}
                    tipo="anime"
                    seccion="episodios"
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
