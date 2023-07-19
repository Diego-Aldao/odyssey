import MainLayout from "../layout/MainLayout";
import personaje from "../assets/personaje.png";
import animeWallpaper from "../assets/anime.jpg";
import MainTitulo from "../components/PaginaInicio/MainSection/MainTitulo";
import MainCardPersonaje from "../components/PaginaInicio/MainSection/MainCardPersonaje";
import MainCardAnime from "../components/PaginaInicio/MainSection/MainCardAnime";
import MainButtonRandom from "../components/PaginaInicio/MainSection/MainButtonRandom";
import MainInfoApp from "../components/PaginaInicio/MainSection/MainInfoApp";
import SectionHeader from "../components/PaginaInicio/SubSections/SectionHeader";
import SectionAnimeTemporada from "../components/PaginaInicio/SubSections/AnimesTemporada/SectionAnimeTemporada";
import AnimesTop from "../components/PaginaInicio/SubSections/Tops/AnimesTop";
import PersonajesTop from "../components/PaginaInicio/SubSections/Tops/PersonajesTop";
import SectionTops from "../components/PaginaInicio/SubSections/Tops/SectionTops";
import AnimesTopHistoria from "../components/PaginaInicio/SubSections/Tops/AnimesTopHistoria";

const PaginaInicio = () => {
  return (
    <MainLayout>
      <>
        <section className="main_section">
          <MainTitulo texto={"odyssey: comunidad anime"} />
          <MainCardPersonaje personaje={personaje} />
          <MainButtonRandom />
          <MainCardAnime animeWallpaper={animeWallpaper} />
          <MainInfoApp />
        </section>
        <SectionAnimeTemporada>
          <SectionHeader
            titulo="anime de temporada"
            nombreIcono="streamline:interface-calendar-favorite-calendar-date-day-favorite-like-month-star"
            nombreInteraccion="ver más temporadas"
          />
        </SectionAnimeTemporada>
        <SectionTops>
          <>
            <SectionHeader
              titulo="top anime"
              nombreIcono="streamline:interface-award-crown-reward-social-rating-media-queen-vip-king-crown"
              nombreInteraccion="ver todos los tops"
            />
            <AnimesTop />
            <AnimesTopHistoria />
            <PersonajesTop />
          </>
        </SectionTops>
      </>
    </MainLayout>
  );
};

export default PaginaInicio;
