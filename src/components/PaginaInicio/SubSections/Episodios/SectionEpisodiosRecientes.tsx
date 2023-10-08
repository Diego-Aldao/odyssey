import SubSectionContent from "../SubSectionContent";
import { SwiperSlide } from "swiper/react";
import CardPaginaPrincipal from "../../../Cards/CardPaginaPrincipal/CardPaginaPrincipal";
import useFetch from "../../../../hooks/useFetch";
import { ApiResponseEpisodios } from "../../../../types";
import { BASE_URL_EPISODES } from "../../../../constants";
import SubSection from "../SubSection";
import SubSectionHeader from "../SubSectionHeader";
import Loading from "../../../Generales/Loading";
import SubSectionSwiper from "../SubSectionSwiper";

const SectionEpisodiosRecientes = () => {
  const { respuestaApi, loading } =
    useFetch<ApiResponseEpisodios>(BASE_URL_EPISODES);

  return (
    <SubSection>
      <>
        <SubSectionHeader
          destino="episodios"
          titulo="episodios recientes"
          nombreIcono="streamline:interface-time-alarm-notification-alert-bell-wake-clock-alarm"
          nombreInteraccion="ver mas episodios"
        />
        <SubSectionContent
          subtitulo="los ultimos capítulos"
          destino="episodios"
        >
          {loading || !respuestaApi ? (
            <Loading customClases="loading_height_subSection" />
          ) : (
            <SubSectionSwiper>
              <>
                {respuestaApi.data.map((item) => (
                  <SwiperSlide key={item.entry.mal_id}>
                    <CardPaginaPrincipal
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
            </SubSectionSwiper>
          )}
        </SubSectionContent>
      </>
    </SubSection>
  );
};
export default SectionEpisodiosRecientes;
