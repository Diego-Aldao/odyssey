import MainLayout from "../layout/MainLayout";
import personaje from "../assets/personaje.png";
import animeWallpaper from "../assets/anime.jpg";
import MainTitulo from "../components/PaginaInicio/MainSection/MainTitulo";
import MainCardPersonaje from "../components/PaginaInicio/MainSection/MainCardPersonaje";
import MainCardAnime from "../components/PaginaInicio/MainSection/MainCardAnime";
import MainButtonRandom from "../components/PaginaInicio/MainSection/MainButtonRandom";
import MainInfoApp from "../components/PaginaInicio/MainSection/MainInfoApp";
import SubHeader from "../components/PaginaInicio/SubSections/SubHeader";

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
        <section className="sub_section w-full">
          <SubHeader titulo="anime de temporada" />
        </section>
      </>
    </MainLayout>
  );
};

export default PaginaInicio;
