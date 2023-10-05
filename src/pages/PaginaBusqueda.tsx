import MainLayout from "../layout/MainLayout";
import { useParams } from "react-router-dom";
import SectionBusqueda from "../components/PaginaBusqueda/SectionBusqueda";
import ResultadosAnime from "../components/PaginaBusqueda/ResultadosAnime";
import ResultadosPersonaje from "../components/PaginaBusqueda/ResultadosPersonajes";
import ResultadosPersonas from "../components/PaginaBusqueda/ResultadosPersonas";
import { useState, useEffect } from "react";
import FiltrosBusqueda from "../components/PaginaBusqueda/FiltrosBusqueda";
import BarraBusqueda from "../components/Generales/BarraBusqueda";
import useTitle from "../hooks/useTitle";

const PaginaBusqueda = () => {
  const { query, tipo } = useParams();
  const [currentContent, setCurrentContent] = useState<string | undefined>(
    tipo
  );
  const { fijarTitulo } = useTitle();

  useEffect(() => {
    if (!query) return;
    fijarTitulo(`Resultados de ${query} -`);
  }, [query]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleClick = (tipo: string) => {
    setCurrentContent(tipo);
  };

  return (
    <MainLayout>
      <main className="section_sub_paginas px-4 md:px-6 lg:px-10 relative pt-10 bg-main-color-background pb-10">
        <h2 className="capitalize flex items-center justify-center text-center font-bold text-lg xs:text-2xl md:text-4xl lg:text-6xl lg:max-w-[1000px] max-w-[500px] md:max-w-[600px] mx-auto md:min-h-[150px] lg:min-h-[250px] text-main-black">
          resultados de la busqueda: {query}
        </h2>
        <div className="my-10 border-2 border-main-black rounded-md max-w-[400px] mx-auto md:max-w-[600px] md:mt-0">
          <BarraBusqueda />
        </div>

        <FiltrosBusqueda handleClick={handleClick} />
        <SectionBusqueda seccion="anime" currentContent={currentContent}>
          <ResultadosAnime query={query} />
        </SectionBusqueda>
        <SectionBusqueda seccion="personajes" currentContent={currentContent}>
          <ResultadosPersonaje query={query} />
        </SectionBusqueda>
        <SectionBusqueda seccion="personas" currentContent={currentContent}>
          <ResultadosPersonas query={query} />
        </SectionBusqueda>
      </main>
    </MainLayout>
  );
};

export default PaginaBusqueda;
