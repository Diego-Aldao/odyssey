import { useEffect, useState } from "react";
import MainLayout from "../layout/MainLayout";
import animeTemporada from "../mocks/AnimeTemporada.json";
import SectionSubPaginas from "../components/PaginasSecundarias/SectionSubPaginas";
import CardInfo from "../components/PaginaInicio/SubSections/SectionCards/CardInfo/CardInfo";
import Filtros from "../components/PaginasSecundarias/Filtros";
import SecondaryInfo from "../components/PaginaInicio/SubSections/SectionCards/CardInfo/SecondaryInfo";
import MainInfo from "../components/PaginaInicio/SubSections/SectionCards/CardInfo/MainInfo";
import Footer from "../components/PaginaInicio/SubSections/SectionCards/CardInfo/Footer";
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

const PaginaTemporadas = () => {
  const [currentFiltro, setCurrentFiltro] = useState<string>();
  const { anio, season } = useParams();
  const [btnVisible, setBtnVisible] = useState<boolean>(true);
  const [currentData, setCurrentData] = useState<MainData[]>();
  const [currentUrl, setCurrentUrl] = useState<string>(
    `${BASE_URL_SEASONS}${anio ? anio : ""}${season ? `/${season}` : ""}`
  );
  const { respuestaApi, loading } = useFetch<ApiResponseTemporada>(currentUrl);

  useEffect(() => {
    if (btnVisible || !respuestaApi) return;
    setCurrentData(respuestaApi.data.slice(0));
  }, [btnVisible]);

  useEffect(() => {
    if (!respuestaApi) return;
    setCurrentData(respuestaApi.data.slice(0, 20));
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
        titulo={"anime por temporadas"}
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
        <Grids tipoDeGrid="detalle">
          {loading || !currentData ? (
            <p>cargando...</p>
          ) : (
            <>
              {currentData.map((item) => (
                <div key={item.mal_id} className="w-full relative flex">
                  <CardInfo titulo={item.title} id={item.mal_id} tipo="anime">
                    <>
                      <SecondaryInfo
                        fecha={item.aired.prop.from}
                        episodios={item.episodes}
                        duracion={item.duration}
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
                  </CardInfo>
                </div>
              ))}
            </>
          )}
        </Grids>
      </SectionSubPaginas>
    </MainLayout>
  );
};

export default PaginaTemporadas;
