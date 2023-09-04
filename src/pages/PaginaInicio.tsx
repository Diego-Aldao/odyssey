import MainLayout from "../layout/MainLayout";
import MainTitulo from "../components/PaginaInicio/MainSection/MainTitulo";
import MainButtonRandom from "../components/PaginaInicio/MainSection/MainButtonRandom";
import MainInfoApp from "../components/PaginaInicio/MainSection/MainInfoApp";
import SectionHeader from "../components/PaginaInicio/SubSections/SectionHeader";
import SectionAnimeTemporada from "../components/PaginaInicio/SubSections/AnimesTemporada/SectionAnimeTemporada";
import AnimesTop from "../components/PaginaInicio/SubSections/Tops/AnimesTop";
import PersonajesTop from "../components/PaginaInicio/SubSections/Tops/PersonajesTop";
import SectionTops from "../components/PaginaInicio/SubSections/Tops/SectionTops";
import AnimesTopHistoria from "../components/PaginaInicio/SubSections/Tops/AnimesTopHistoria";
import SectionEpisodiosRecientes from "../components/PaginaInicio/SubSections/Episodios/SectionEpisodiosRecientes";
import SectionTrailersPopulares from "../components/PaginaInicio/SubSections/Trailers/SectionTrailersPopulares";
import LazyLoad from "react-lazy-load";
import MainImagen from "../components/PaginaInicio/MainSection/MainImagen";

const PaginaInicio = () => {
  return (
    <MainLayout>
      <>
        <section className="main_section">
          <MainTitulo texto={"odyssey: comunidad anime"} />
          <MainImagen />
          <MainButtonRandom />
          <MainInfoApp />
        </section>
        <LazyLoad
          offset={500}
          className="min-h-[480px] bg-main-color-background rounded-xl"
        >
          <SectionEpisodiosRecientes>
            <SectionHeader
              destino="episodios"
              titulo="episodios recientes"
              nombreIcono="streamline:interface-time-alarm-notification-alert-bell-wake-clock-alarm"
              nombreInteraccion="ver mas episodios"
            />
          </SectionEpisodiosRecientes>
        </LazyLoad>
        <LazyLoad
          offset={500}
          className="min-h-[480px] bg-main-color-background rounded-xl"
        >
          <SectionAnimeTemporada>
            <SectionHeader
              destino="temporadas"
              titulo="anime de temporada"
              nombreIcono="streamline:interface-calendar-favorite-calendar-date-day-favorite-like-month-star"
              nombreInteraccion="ver más temporadas"
            />
          </SectionAnimeTemporada>
        </LazyLoad>
        <LazyLoad offset={500} className="min-h-[363px]">
          <SectionTrailersPopulares noBackground={true}>
            <SectionHeader
              destino="trailers"
              titulo="trailers populares"
              nombreIcono="streamline:computer-logo-youtube-youtube-clip-social-video"
              nombreInteraccion="ver mas trailers"
              noBackground={true}
            />
          </SectionTrailersPopulares>
        </LazyLoad>
        <SectionTops>
          <>
            <SectionHeader
              destino="tops"
              titulo="top anime"
              nombreIcono="streamline:interface-award-crown-reward-social-rating-media-queen-vip-king-crown"
              nombreInteraccion="ver todos los tops"
            />
            <LazyLoad offset={800} className="min-h-[424px]">
              <AnimesTop />
            </LazyLoad>
            <LazyLoad offset={500} className="min-h-[424px]">
              <AnimesTopHistoria />
            </LazyLoad>
            <LazyLoad offset={500} className="min-h-[424px]">
              <PersonajesTop />
            </LazyLoad>
          </>
        </SectionTops>
      </>
    </MainLayout>
  );
};

export default PaginaInicio;
