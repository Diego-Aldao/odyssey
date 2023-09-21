import React, { useEffect, useState } from "react";
import MainLayout from "../layout/MainLayout";
import SectionSubPaginas from "../components/PaginasSecundarias/SectionSubPaginas";
import Filtros from "../components/PaginasSecundarias/Filtros";
import { MAIN_FILTERS_TRAILERS, BASE_URL_TRAILERS } from "../constants";
import Grids from "../components/PaginasSecundarias/Grids";
import { ApiResponseTrailers, DataTrailers } from "../types";
import useFetch from "../hooks/useFetch";
import { useParams } from "react-router-dom";
import ImagenHeaderTrailers from "../components/PaginaTrailers/ImagenHeaderTrailers";
import CardVideo from "../components/PaginaInicio/SubSections/SectionCards/SectionCard/CardVideo";
import TituloHeaderMotion from "../components/FramerMotion/TituloHeaderMotion";
import Loading from "../components/Generales/Loading";

const PaginaTrailers = () => {
  const { filtro } = useParams();
  const [currentUrl, setCurrentUrl] = useState<string>(
    `${BASE_URL_TRAILERS}${filtro ? `/${filtro}` : ""}`
  );
  const [currentData, setCurrentData] = useState<DataTrailers[]>();
  const [btnVisible, setBtnVisible] = useState<boolean>(true);

  const { respuestaApi, loading } = useFetch<ApiResponseTrailers>(currentUrl);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (btnVisible || !respuestaApi) return;
    setCurrentData(respuestaApi.data.slice(0));
  }, [btnVisible]);

  useEffect(() => {
    if (!respuestaApi) return;
    if (btnVisible) {
      setCurrentData(respuestaApi.data.slice(0, 20));
    } else {
      setCurrentData(respuestaApi.data.slice(0));
    }
  }, [respuestaApi]);

  useEffect(() => {
    setCurrentUrl(`${BASE_URL_TRAILERS}${filtro ? `/${filtro}` : ""}`);
  }, [filtro]);

  return (
    <MainLayout>
      <SectionSubPaginas
        setBtnVisible={setBtnVisible}
        btnVisible={btnVisible}
        titulo={
          <TituloHeaderMotion
            textoLineaUno="trailers de"
            textoLineaDos="anime"
          />
        }
        imagenHeader={<ImagenHeaderTrailers />}
        filtrosPrincipales={
          <Filtros pathInicial="trailers" filtros={MAIN_FILTERS_TRAILERS} />
        }
      >
        {loading || !currentData ? (
          <Loading />
        ) : (
          <Grids tipoDeGrid="videos">
            <>
              {currentData.map((item) => (
                <React.Fragment key={item.entry.mal_id}>
                  <CardVideo
                    id={item.entry.mal_id}
                    imagen={item.trailer.images.medium_image_url}
                    titulo={item.entry.title}
                    subtitulo={item.title}
                    tipo="anime"
                    mainPage={true}
                  />
                </React.Fragment>
              ))}
            </>
          </Grids>
        )}
      </SectionSubPaginas>
    </MainLayout>
  );
};

export default PaginaTrailers;
