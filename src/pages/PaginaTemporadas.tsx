import React, { useEffect, useState } from "react";
import MainLayout from "../layout/MainLayout";
import SectionSubPaginas from "../components/PaginasSecundarias/SectionSubPaginas";
import CardTemporadas from "../components/Cards/CardPaginaTemporadas/CardTemporadas";
import Filtros from "../components/PaginasSecundarias/Filtros";
import SecondaryInfo from "../components/Cards/CardPaginaTemporadas/SecondaryInfo";
import MainInfo from "../components/Cards/CardPaginaTemporadas/MainInfo";
import Footer from "../components/Cards/CardPaginaTemporadas/Footer";
import {
  BASE_URL_SEASONS,
  MAIN_FILTERS_SEASONS,
  SECONDARY_FILTERS_SEASONS,
} from "../constants";
import useFetch from "../hooks/useFetch";
import Grids from "../components/PaginasSecundarias/Grids";
import { useParams } from "react-router-dom";
import { ApiResponseTemporada, MainData } from "../types";
import ImagenHeaderTemporada from "../components/PaginaTemporadas/ImagenHeaderTemporada";
import TituloHeaderMotion from "../components/FramerMotion/TituloHeaderMotion";
import { AnimatePresence } from "framer-motion";
import Loading from "../components/Generales/Loading";
import useTitle from "../hooks/useTitle";

const PaginaTemporadas = () => {
  const [currentFiltro, setCurrentFiltro] = useState<string>();
  const { anio, season } = useParams();
  const [btnVisible, setBtnVisible] = useState<boolean>(true);
  const [currentData, setCurrentData] = useState<MainData[]>();
  const [currentUrl, setCurrentUrl] = useState<string>(
    `${BASE_URL_SEASONS}${anio ? `/${anio}` : ""}${season ? `/${season}` : ""}`
  );
  const { respuestaApi, loading } = useFetch<ApiResponseTemporada>(currentUrl);
  const { fijarTitulo } = useTitle();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (!anio) return;
    fijarTitulo(
      `Temporada ${anio === "now" ? "Actual" : anio} ${
        season ? `/ ${season}` : ""
      }`
    );
  }, [anio, season]);

  useEffect(() => {
    if (btnVisible || !respuestaApi) return;
    setCurrentData(respuestaApi.data.slice(0));
  }, [btnVisible]);

  useEffect(() => {
    if (!respuestaApi) return;
    if (btnVisible) {
      setCurrentData(respuestaApi.data.slice(0, 18));
    } else {
      setCurrentData(respuestaApi.data.slice(0));
    }
  }, [respuestaApi]);

  useEffect(() => {
    if (!anio) return;
    const filtro = `${anio}${season ? `/${season}` : ""}`;
    setCurrentUrl(`${BASE_URL_SEASONS}/${filtro}`);
  }, [anio, season]);

  useEffect(() => {
    const params = `${anio ? anio : ""}${season ? `/${season}` : ""}`;
    setCurrentUrl(
      `${BASE_URL_SEASONS}/${params}${
        currentFiltro ? `?filter=${currentFiltro}` : ""
      }`
    );
  }, [currentFiltro]);

  return (
    <MainLayout>
      <SectionSubPaginas
        setBtnVisible={setBtnVisible}
        btnVisible={btnVisible}
        titulo={
          <TituloHeaderMotion
            textoLineaUno="anime por"
            textoLineaDos="temporadas"
          />
        }
        imagenHeader={<ImagenHeaderTemporada />}
        filtrosPrincipales={
          <Filtros pathInicial="temporadas" filtros={MAIN_FILTERS_SEASONS} />
        }
        filtrosSecundarios={
          <Filtros
            isFilterSecondary={true}
            setCurrentFiltro={setCurrentFiltro}
            pathInicial="temporadas"
            filtros={SECONDARY_FILTERS_SEASONS}
          />
        }
      >
        <AnimatePresence>
          {loading ? (
            <Loading key={"loading"} />
          ) : (
            <Grids tipoDeGrid="detalle" key={"grid"}>
              <>
                {currentData?.map((item) => (
                  <React.Fragment key={item.mal_id}>
                    <CardTemporadas
                      titulo={item.title}
                      id={item.mal_id}
                      tipo="anime"
                    >
                      <>
                        <SecondaryInfo
                          fecha={item.aired.prop.from}
                          episodios={item.episodes}
                          generos={item.genres}
                        />
                        <MainInfo
                          imagen={item.images.webp.image_url}
                          sinopsis={item.synopsis}
                          origen={item.source}
                          mainGeneros={item.demographics}
                          temas={item.themes}
                          estudios={item.studios}
                          titulo={item.title}
                        />
                        <Footer
                          tipo={item.type}
                          score={item.score}
                          miembros={item.members}
                          episodios={item.episodes}
                        />
                      </>
                    </CardTemporadas>
                  </React.Fragment>
                ))}
              </>
            </Grids>
          )}
        </AnimatePresence>
      </SectionSubPaginas>
    </MainLayout>
  );
};

export default PaginaTemporadas;
