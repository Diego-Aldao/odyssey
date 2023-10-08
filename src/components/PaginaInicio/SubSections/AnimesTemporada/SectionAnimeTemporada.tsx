import { SwiperSlide } from "swiper/react";
import CardPaginaPrincipal from "../../../Cards/CardPaginaPrincipal/CardPaginaPrincipal";
import { ApiResponseTemporada } from "../../../../types";
import useFetchTemporadas from "../../../../hooks/useFetch";
import { BASE_URL_SEASONS } from "../../../../constants";
import SubSection from "../SubSection";
import SubSectionHeader from "../SubSectionHeader";
import SubSectionContent from "../SubSectionContent";
import SubSectionSwiper from "../SubSectionSwiper";
import Loading from "../../../Generales/Loading";

const SectionAnimeTemporada = () => {
  const { respuestaApi, loading } = useFetchTemporadas<ApiResponseTemporada>(
    `${BASE_URL_SEASONS}/now`
  );

  return (
    <SubSection>
      <>
        <SubSectionHeader
          destino="temporadas/now"
          titulo="anime de temporada"
          nombreIcono="streamline:interface-calendar-favorite-calendar-date-day-favorite-like-month-star"
          nombreInteraccion="ver más temporadas"
        />
        <SubSectionContent subtitulo={"verano 2023"} destino="temporadas/now">
          {loading || !respuestaApi ? (
            <Loading customClases="loading_height_subSection" />
          ) : (
            <SubSectionSwiper>
              <>
                {respuestaApi.data.map((item) => (
                  <SwiperSlide key={item.mal_id}>
                    <CardPaginaPrincipal
                      id={item.mal_id}
                      titulo={item.title}
                      imagenUrl={item.images.webp.image_url}
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
export default SectionAnimeTemporada;
