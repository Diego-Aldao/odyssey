import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import MainLayout from "../layout/MainLayout";
import SectionSubPaginas from "../components/PaginasSecundarias/SectionSubPaginas";
import Filtros from "../components/PaginasSecundarias/Filtros";
import { MAIN_FILTERS_TRAILERS, BASE_URL_TRAILERS } from "../constants";
import Grids from "../components/PaginasSecundarias/Grids";
import { ApiResponseTrailers, DataTrailers } from "../types";
import useFetch from "../hooks/useFetch";
import { useParams } from "react-router-dom";
import ImagenHeaderTrailers from "../components/PaginaTrailers/ImagenHeaderTrailers";

const PaginaTrailers = () => {
  const { filtro } = useParams();
  const [currentUrl, setCurrentUrl] = useState<string>(
    `${BASE_URL_TRAILERS}${filtro ? `/${filtro}` : ""}`
  );
  const [currentData, setCurrentData] = useState<DataTrailers[]>();
  const [btnVisible, setBtnVisible] = useState<boolean>(true);

  const { respuestaApi, loading } = useFetch<ApiResponseTrailers>(currentUrl);

  useEffect(() => {
    if (btnVisible || !respuestaApi) return;
    setCurrentData(respuestaApi.data.slice(0));
  }, [btnVisible]);

  useEffect(() => {
    if (!respuestaApi) return;
    setCurrentData(respuestaApi.data.slice(0, 20));
  }, [respuestaApi]);

  useEffect(() => {
    setCurrentUrl(`${BASE_URL_TRAILERS}${filtro ? `/${filtro}` : ""}`);
  }, [filtro]);

  return (
    <MainLayout>
      <SectionSubPaginas
        setBtnVisible={setBtnVisible}
        btnVisible={btnVisible}
        titulo={"trailers de anime"}
        imagenHeader={<ImagenHeaderTrailers />}
        filtrosPrincipales={
          <Filtros pathInicial="trailers" filtros={MAIN_FILTERS_TRAILERS} />
        }
      >
        <Grids tipoDeGrid="videos">
          {loading || !currentData ? (
            <p>cargando...</p>
          ) : (
            <>
              {currentData.map((item) => (
                <article
                  key={item.trailer.youtube_id}
                  className="relative flex flex-col w-full gap-2 z-[1]"
                >
                  <p className="flex w-fit max-w-[90%] justify-start border-main-black bg-main-black text-main-color-background px-1 rounded-sm pl-4 relative item-skew-izquierda z-[1]">
                    <span className="line-clamp-1 md:text-lg lg:text-base xl:text-lg">
                      {item.entry.title}
                    </span>
                  </p>
                  <div className="border-2 border-main-black rounded-xl overflow-hidden flex flex-1 max-h-[250px] items-center justify-center">
                    <div className="play absolute bg-main-black text-main-color-background rounded-lg px-5 capitalize flex items-center justify-center gap-4 py-1 border-[1px] border-main-color-background">
                      ver video
                      <Icon
                        icon="streamline:entertainment-control-button-play-button-television-buttons-movies-play-tv-video-controls"
                        className="stroke-2"
                      />
                    </div>
                    <img src={item.trailer.images.medium_image_url} alt="" />
                  </div>
                  <p className="w-fit flex self-end">{item.title}</p>
                </article>
              ))}
            </>
          )}
        </Grids>
      </SectionSubPaginas>
    </MainLayout>
  );
};

export default PaginaTrailers;
