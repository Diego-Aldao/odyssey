import { useEffect, useState } from "react";
import MainLayout from "../layout/MainLayout";
import SectionSubPaginas from "../components/PaginasSecundarias/SectionSubPaginas";
import Filtros from "../components/PaginasSecundarias/Filtros";
import { BASE_URL_EPISODES, MAIN_FILTERS_EPISODES } from "../constants";
import Grids from "../components/PaginasSecundarias/Grids";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { ApiResponseEpisodios, DataEpisodios } from "../types";
import ImagenHeaderEpisodios from "../components/PaginaEpisodios/ImagenHeaderEpisodios";
import CardEpisodio from "../components/PaginaInicio/SubSections/SectionCards/CardEpisodio/CardEpisodio";

const PaginaEpisodios = () => {
  const { filtro } = useParams();
  const [currentData, setCurrentData] = useState<DataEpisodios[]>();
  const [currentUrl, setCurrentUrl] = useState<string>(
    `${BASE_URL_EPISODES}${filtro ? `/${filtro}` : ""}`
  );
  const [btnVisible, setBtnVisible] = useState<boolean>(true);
  const { respuestaApi, loading } = useFetch<ApiResponseEpisodios>(currentUrl);

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
    setCurrentUrl(`${BASE_URL_EPISODES}${filtro ? `/${filtro}` : ""}`);
  }, [filtro]);

  return (
    <MainLayout>
      <SectionSubPaginas
        setBtnVisible={setBtnVisible}
        btnVisible={btnVisible}
        titulo={"anime por episodios"}
        imagenHeader={<ImagenHeaderEpisodios />}
        filtrosPrincipales={
          <Filtros filtros={MAIN_FILTERS_EPISODES} pathInicial="episodios" />
        }
      >
        <Grids tipoDeGrid="comun">
          {loading || !currentData ? (
            <p>cargando...</p>
          ) : (
            <>
              {currentData.map((item) => (
                <div className="flex-1" key={item.entry.mal_id}>
                  <CardEpisodio
                    id={item.entry.mal_id}
                    imagen={item.entry.images?.webp.image_url}
                    episodios={item.episodes}
                    titulo={item.entry.title}
                  />
                </div>
              ))}
            </>
          )}
        </Grids>
      </SectionSubPaginas>
    </MainLayout>
  );
};

export default PaginaEpisodios;
