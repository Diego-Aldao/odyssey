import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import MainLayout from "../layout/MainLayout";
import { useEffect, useState } from "react";
import { BASE_URL_DETAILS } from "../constants";
import { Icon } from "@iconify/react";
import ImagenBackground from "../components/PaginaDetalle/ImagenBackground";
import AsideInfo from "../components/PaginaDetalle/AsideInfo";
import ListaTags from "../components/PaginaDetalle/MainInfo/ListaTags";
import Descripcion from "../components/PaginaDetalle/Descripcion";
import EpisodiosDetalle from "../components/PaginaDetalle/Episodios/EpisodiosDetalle";
import RecomendadosDetalle from "../components/PaginaDetalle/Recomendados/RecomendadosDetalle";
import PersonajesDetalle from "../components/PaginaDetalle/Personajes/PersonajesDetalle";
import ReviewsDetalle from "../components/PaginaDetalle/Reviews/ReviewsDetalle";
import NoticiasDetalle from "../components/PaginaDetalle/Noticias/NoticiasDetalle";
import { ApiResponseDetalle, DataDetalle, InfoAside, InfoTags } from "../types";
import Filtros from "../components/PaginaDetalle/Filtros";
import ModalVideo from "../components/Generales/ModalVideo";
import Trailer from "../components/PaginaDetalle/MainInfo/Trailer";
import MainInfo from "../components/PaginaDetalle/MainInfo/MainInfo";

const PaginaDetalles = () => {
  const [visibleContent, setVisibleContent] = useState<string>("general");
  const [tituloEsp, setTituloEsp] = useState<string | undefined>();
  const { fetchData, data, loading } = useFetch<ApiResponseDetalle>();
  const [modalVisibility, setModalVisibility] = useState<boolean>(false);
  const [currentData, setCurrentData] = useState<DataDetalle>();

  const { id } = useParams();

  useEffect(() => {
    if (!id) return;
    void fetchData(`${BASE_URL_DETAILS}/anime/${id}/full`);
  }, [id]);

  useEffect(() => {
    if (!data) return;

    setCurrentData(data.data);

    const currentTituloEsp = data.data.titles.filter(
      (title) => title.type === "Spanish"
    );
    setTituloEsp(currentTituloEsp[0]?.title);
  }, [data]);

  const dataAside: InfoAside[] = [
    {
      nombre: "tipo",
      data: currentData?.type,
    },
    {
      nombre: "episodios",
      data: currentData?.episodes,
    },
    {
      nombre: "estado",
      data: currentData?.status,
    },
    {
      nombre: "estreno",
      data: currentData?.aired.from,
    },
    {
      nombre: "transmisión",
      data: currentData?.broadcast.string,
    },
    {
      nombre: "productores",
      data: currentData?.producers,
    },
    {
      nombre: "estudios",
      data: currentData?.studios,
    },
    {
      nombre: "origen",
      data: currentData?.source,
    },
    {
      nombre: "géneros",
      data: currentData?.genres,
    },
    {
      nombre: "temática",
      data: currentData?.themes,
    },
    {
      nombre: "demografía",
      data: currentData?.demographics,
    },
    {
      nombre: "duración",
      data: currentData?.duration,
    },
    {
      nombre: "clasificación",
      data: currentData?.rating,
    },
  ];

  const dataTags: InfoTags[] = [
    {
      id: 1,
      nombre: "score",
      data: currentData?.score,
      icono: <Icon icon="ph:star-bold" className="h-[14px] w-[14px]" />,
      primerItem: true,
    },
    {
      id: 2,
      nombre: "estudios",
      data: currentData?.studios,
    },
    {
      id: 3,
      nombre: "rank",
      data: currentData?.rank,
      esRankeable: true,
    },
    {
      id: 4,
      nombre: "popularidad",
      data: currentData?.popularity,
      ocultoMovile: true,
      esRankeable: true,
    },
    {
      id: 5,
      nombre: "miembros",
      data: currentData?.members.toLocaleString(),
      ocultoMovile: true,
    },
    {
      id: 6,
      nombre: "temporada",
      data: data && `${data.data.season} ${data.data.year}`,
      ocultoMovile: true,
    },
  ];

  const listaFiltros: string[] = [
    "general",
    "episodios",
    "personajes",
    "recomendaciones",
    "reviews",
    "noticias",
  ];

  const handleClick = () => {
    setModalVisibility((prevState) => !prevState);
  };

  return (
    <>
      {modalVisibility && currentData && (
        <ModalVideo
          modalVisibility={modalVisibility}
          titulo={currentData.title}
          url={currentData.trailer.embed_url}
          handleClick={handleClick}
        />
      )}
      <MainLayout>
        {loading || !currentData ? (
          <>cargando</>
        ) : (
          <main className="main_detalle">
            <Filtros
              listaFiltros={listaFiltros}
              setVisibleContent={setVisibleContent}
            />
            <ImagenBackground
              imagenUrl={currentData.images.webp.large_image_url}
            />
            <AsideInfo
              imagenUrl={currentData.images.webp.image_url}
              data={dataAside}
            />
            <MainInfo
              titulo={currentData.title}
              tituloEspañol={tituloEsp}
              score={currentData.score}
              personasScore={currentData.scored_by.toLocaleString()}
              dataHeader={
                <>
                  <ListaTags mainInfo={dataTags} />
                  <Trailer
                    handleClick={handleClick}
                    imagen={currentData.trailer.images.medium_image_url}
                  />
                </>
              }
            >
              <>
                <Descripcion
                  titulo="sinopsis"
                  descripcion={currentData.synopsis}
                />
                {currentData.background && (
                  <Descripcion
                    titulo="background"
                    descripcion={currentData.background}
                  />
                )}
                <EpisodiosDetalle visibleContent={visibleContent} />
                <RecomendadosDetalle visibleContent={visibleContent} />
                <PersonajesDetalle visibleContent={visibleContent} />
                <ReviewsDetalle visibleContent={visibleContent} />
                <NoticiasDetalle visibleContent={visibleContent} />
              </>
            </MainInfo>
          </main>
        )}
      </MainLayout>
    </>
  );
};

export default PaginaDetalles;
