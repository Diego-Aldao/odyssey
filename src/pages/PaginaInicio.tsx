import { useEffect } from "react";
import MainLayout from "../layout/MainLayout";
import MainTitulo from "../components/PaginaInicio/MainSection/MainTitulo";
import MainButtonRandom from "../components/PaginaInicio/MainSection/MainButtonRandom";
import MainInfoApp from "../components/PaginaInicio/MainSection/MainInfoApp";
import SectionAnimeTemporada from "../components/PaginaInicio/SubSections/AnimesTemporada/SectionAnimeTemporada";
import AnimesTop from "../components/PaginaInicio/SubSections/Tops/AnimesTop";
import PersonajesTop from "../components/PaginaInicio/SubSections/Tops/PersonajesTop";
import SectionTops from "../components/PaginaInicio/SubSections/Tops/SectionTops";
import AnimesTopHistoria from "../components/PaginaInicio/SubSections/Tops/AnimesTopHistoria";
import SectionEpisodiosRecientes from "../components/PaginaInicio/SubSections/Episodios/SectionEpisodiosRecientes";
import SectionTrailersPopulares from "../components/PaginaInicio/SubSections/Trailers/SectionTrailersPopulares";
import MainImagen from "../components/PaginaInicio/MainSection/MainImagen";
import { motion, AnimatePresence } from "framer-motion";
import { transition, variantesMainPage } from "../VariantesFramerMotion";

const PaginaInicio = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MainLayout>
      <>
        <AnimatePresence>
          <motion.section
            className="main_section"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={variantesMainPage}
            transition={transition}
          >
            <MainTitulo />
            <MainImagen />
            <MainButtonRandom />
            <MainInfoApp />
          </motion.section>
        </AnimatePresence>
        <SectionEpisodiosRecientes />
        <SectionAnimeTemporada />
        <SectionTrailersPopulares noBackground={true} />
        <SectionTops>
          <>
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
