import SectionContent from "../SectionContent";
import { SwiperSlide } from "swiper/react";
import SectionCard from "../SectionCards/SectionCard/SectionCard";
import useFetch from "../../../../hooks/useFetch";
import { ApiResponseTrailers } from "../../../../types";
import { BASE_URL_TRAILERS } from "../../../../constants";

type Props = {
  children: JSX.Element;
  noBackground: boolean;
};

const SectionTrailersPopulares: React.FC<Props> = ({
  noBackground,
  children,
}) => {
  const { respuestaApi, loading } = useFetch<ApiResponseTrailers>(
    `${BASE_URL_TRAILERS}/popular`
  );

  return (
    <>
      {loading || !respuestaApi ? (
        <>cargando</>
      ) : (
        <section className="sub_section">
          {children}
          <SectionContent noBackground={noBackground} destino="trailers">
            <>
              {respuestaApi.data.map((item) => (
                <SwiperSlide key={item.entry.mal_id}>
                  <SectionCard
                    noBackground={noBackground}
                    id={item.entry.mal_id}
                    titulo={item.entry.title}
                    imagenUrl={item.trailer.images.medium_image_url}
                    subtitulo={item.title}
                    tipo="anime"
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
export default SectionTrailersPopulares;
