import SectionContent from "../SectionContent";
import { SwiperSlide } from "swiper/react";
import SectionCard from "../SectionCards/SectionCard/SectionCard";
import { ApiResponseTemporada } from "../../../../types";
import useFetchTemporadas from "../../../../hooks/useFetch";
import { BASE_URL_SEASONS } from "../../../../constants";

type Props = {
  children: JSX.Element;
};

const SectionAnimeTemporada: React.FC<Props> = ({ children }) => {
  const { respuestaApi, loading } = useFetchTemporadas<ApiResponseTemporada>(
    `${BASE_URL_SEASONS}/now`
  );

  return (
    <section className="sub_section">
      {children}
      {loading || !respuestaApi ? (
        <>cargando</>
      ) : (
        <SectionContent subtitulo={"verano 2023"} destino="temporadas/now">
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
    </section>
  );
};
export default SectionAnimeTemporada;
