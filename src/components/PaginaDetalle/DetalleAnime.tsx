import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { useEffect, useState } from "react";
import { BASE_URL_DETAILS } from "../../constants";
import { Icon } from "@iconify/react";
import ImagenBackground from "../../components/PaginaDetalle/ImagenBackground";
import AsideInfo from "../../components/PaginaDetalle/AsideInfo";
import ListaTags from "../../components/PaginaDetalle/MainInfo/ListaTags";
import Descripcion from "../../components/PaginaDetalle/Descripcion";
import EpisodiosDetalle from "../../components/PaginaDetalle/Episodios/EpisodiosDetalle";
import RecomendadosDetalle from "../../components/PaginaDetalle/Recomendados/RecomendadosDetalle";
import PersonajesDetalle from "../../components/PaginaDetalle/Personajes/PersonajesDetalle";
import ReviewsDetalle from "../../components/PaginaDetalle/Reviews/ReviewsDetalle";
import NoticiasDetalle from "../../components/PaginaDetalle/Noticias/NoticiasDetalle";
import { ApiResponseDetalle, InfoAside, InfoTags } from "../../types";
import ModalVideo from "../../components/Generales/ModalVideo";
import Trailer from "../../components/PaginaDetalle/MainInfo/Trailer";
import FiltrosDetalle from "../../components/PaginaDetalle/FiltrosDetalle";
import MainInfoDetalle from "../../components/PaginaDetalle/MainInfo/MainInfoDetalle";

const DetalleAnime = () => {
  const { id } = useParams();
  const [visibleContent, setVisibleContent] = useState<string>("general");
  const [tituloEsp, setTituloEsp] = useState<string | undefined>();
  const { respuestaApi, loading } = useFetch<ApiResponseDetalle>(
    `${BASE_URL_DETAILS}/anime/${id || "54842"}/full`
  );
  const [modalVisibility, setModalVisibility] = useState<boolean>(false);

  useEffect(() => {
    if (!respuestaApi) return;

    const currentTituloEsp = respuestaApi.data.titles.filter(
      (title) => title.type === "Spanish"
    );
    setTituloEsp(currentTituloEsp[0]?.title);
  }, [respuestaApi]);

  const dataAside: InfoAside[] = [
    {
      nombre: "tipo",
      data: respuestaApi?.data.type,
    },
    {
      nombre: "episodios",
      data: respuestaApi?.data.episodes,
    },
    {
      nombre: "estado",
      data: respuestaApi?.data.status,
    },
    {
      nombre: "estreno",
      data: respuestaApi?.data.aired.string,
    },
    {
      nombre: "transmisión",
      data: respuestaApi?.data.broadcast.string,
    },
    {
      nombre: "productores",
      data: respuestaApi?.data.producers,
    },
    {
      nombre: "estudios",
      data: respuestaApi?.data.studios,
    },
    {
      nombre: "origen",
      data: respuestaApi?.data.source,
    },
    {
      nombre: "géneros",
      data: respuestaApi?.data.genres,
    },
    {
      nombre: "temática",
      data: respuestaApi?.data.themes,
    },
    {
      nombre: "demografía",
      data: respuestaApi?.data.demographics,
    },
    {
      nombre: "duración",
      data: respuestaApi?.data.duration,
    },
    {
      nombre: "clasificación",
      data: respuestaApi?.data.rating,
    },
  ];

  const dataTags: InfoTags[] = [
    {
      id: 1,
      nombre: "score",
      data: respuestaApi?.data.score,
      icono: <Icon icon="ph:star-bold" className="h-[14px] w-[14px]" />,
      primerItem: true,
    },
    {
      id: 2,
      nombre: "estudios",
      data: respuestaApi?.data.studios,
    },
    {
      id: 3,
      nombre: "rank",
      data: respuestaApi?.data.rank,
      esRankeable: true,
    },
    {
      id: 4,
      nombre: "popularidad",
      data: respuestaApi?.data.popularity,
      ocultoMovile: true,
      esRankeable: true,
    },
    {
      id: 5,
      nombre: "miembros",
      data: respuestaApi?.data.members.toLocaleString(),
      ocultoMovile: true,
    },
    {
      id: 6,
      nombre: "temporada",
      data:
        respuestaApi && `${respuestaApi.data.season} ${respuestaApi.data.year}`,
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
      {modalVisibility && respuestaApi && (
        <ModalVideo
          modalVisibility={modalVisibility}
          titulo={respuestaApi.data.title}
          url={respuestaApi.data.trailer.embed_url}
          handleClick={handleClick}
        />
      )}
      {loading || !respuestaApi ? (
        <>cargando</>
      ) : (
        <>
          <FiltrosDetalle
            listaFiltros={listaFiltros}
            setVisibleContent={setVisibleContent}
          />
          <ImagenBackground
            imagenUrl={respuestaApi.data.images.webp.large_image_url}
          />
          <AsideInfo
            imagenUrl={respuestaApi.data.images.webp.image_url}
            data={dataAside}
          />
          <MainInfoDetalle
            titulo={respuestaApi.data.title}
            tituloEspañol={tituloEsp}
            score={respuestaApi.data.score}
            personasScore={respuestaApi.data.scored_by.toLocaleString()}
            dataHeader={
              <>
                <ListaTags mainInfo={dataTags} />
                <Trailer
                  handleClick={handleClick}
                  imagen={respuestaApi.data.trailer.images.medium_image_url}
                />
              </>
            }
          >
            <>
              <Descripcion
                titulo="sinopsis"
                descripcion={respuestaApi.data.synopsis}
              />
              {respuestaApi.data.background && (
                <Descripcion
                  titulo="background"
                  descripcion={respuestaApi.data.background}
                />
              )}
              <EpisodiosDetalle visibleContent={visibleContent} id={id} />
              <PersonajesDetalle visibleContent={visibleContent} id={id} />
              <RecomendadosDetalle visibleContent={visibleContent} id={id} />
              <ReviewsDetalle visibleContent={visibleContent} id={id} />
              <NoticiasDetalle visibleContent={visibleContent} id={id} />
            </>
          </MainInfoDetalle>
        </>
      )}
    </>
  );
};

export default DetalleAnime;
