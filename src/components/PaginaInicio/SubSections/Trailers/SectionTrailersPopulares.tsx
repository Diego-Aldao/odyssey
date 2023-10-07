import { SwiperSlide } from "swiper/react";
import CardPaginaPrincipal from "../../../Cards/CardPaginaPrincipal/CardPaginaPrincipal";
import useFetch from "../../../../hooks/useFetch";
import { ApiResponseTrailers } from "../../../../types";
import { BASE_URL_TRAILERS } from "../../../../constants";
import SubSection from "../SubSection";
import SubSectionHeader from "../SubSectionHeader";
import SubSectionContent from "../SubSectionContent";
import SubSectionSwiper from "../SubSectionSwiper";
import Loading from "../../../Generales/Loading";

type Props = {
  noBackground: boolean;
};

const SectionTrailersPopulares = ({ noBackground }: Props) => {
  const { respuestaApi, loading } = useFetch<ApiResponseTrailers>(
    `${BASE_URL_TRAILERS}/popular`
  );

  return (
    <SubSection noBackground={true}>
      <>
        <SubSectionHeader
          destino="trailers"
          titulo="trailers populares"
          nombreIcono="streamline:computer-logo-youtube-youtube-clip-social-video"
          nombreInteraccion="ver mas trailers"
          noBackground={true}
        />
        <SubSectionContent noBackground={noBackground}>
          {loading || !respuestaApi ? (
            <Loading customClases="loading_height_subSection" />
          ) : (
            <SubSectionSwiper noBackground={noBackground}>
              <>
                {respuestaApi.data.map((item) => (
                  <SwiperSlide key={item.entry.mal_id}>
                    <CardPaginaPrincipal
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
            </SubSectionSwiper>
          )}
        </SubSectionContent>
      </>
    </SubSection>
  );
};
export default SectionTrailersPopulares;
