import { useParams } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import { useEffect, useState } from "react";
import { BASE_URL_DETAILS } from "../../../constants";
import { Icon } from "@iconify/react";
import ImagenBackground from "../ImagenBackground";
import AsideDetalle from "../AsideDetalle";
import EpisodiosDetalle from "./MainSection/ListadoEpisodios";
import RecomendadosDetalle from "./MainSection/ListadoRecomendados";
import PersonajesDetalle from "./MainSection/ListadoPersonajes";
import ReviewsDetalle from "./MainSection/ListadoReviews";
import NoticiasDetalle from "./MainSection/ListadoNoticias";
import { ApiResponseDetalle, InfoAside, InfoTags } from "../../../types";
import ModalVideo from "../../Generales/ModalVideo";
import Loading from "../../Generales/Loading";
import SubSectionDetalle from "../SubSectionDetalle";
import MainSectionDetalle from "../MainSectionDetalle";
import HeaderAnime from "./Header/HeaderAnime";
import AsideAnime from "./Aside/AsideAnime";
import FiltroSecciones from "./FiltroSecciones";
import useTitle from "../../../hooks/useTitle";

const DetalleAnime = () => {
  const { id, seccion } = useParams();
  const [visibleContent, setVisibleContent] = useState<string>("general");
  const [tituloEsp, setTituloEsp] = useState<string | undefined>();
  const [modalVisibility, setModalVisibility] = useState<boolean>(false);
  const { respuestaApi, loading } = useFetch<ApiResponseDetalle>(
    `${BASE_URL_DETAILS}/anime/${id || "54842"}/full`
  );
  const { fijarTitulo } = useTitle();

  useEffect(() => {
    if (seccion === "trailer") setModalVisibility(true);
    if (seccion !== "trailer" && seccion) setVisibleContent(seccion);
  }, [seccion]);

  useEffect(() => {
    if (!respuestaApi) return;

    fijarTitulo(`${respuestaApi.data.title} -`);

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
        <Loading />
      ) : (
        <>
          <FiltroSecciones
            listaFiltros={listaFiltros}
            setVisibleContent={setVisibleContent}
            visibleContent={visibleContent}
          />
          <ImagenBackground
            imagenUrl={respuestaApi.data.images.webp.large_image_url}
          />
          <AsideDetalle
            imagenUrl={respuestaApi.data.images.webp.image_url}
            tituloAside="informacion"
          >
            <AsideAnime data={dataAside} />
          </AsideDetalle>
          <MainSectionDetalle>
            <>
              <HeaderAnime
                titulo={respuestaApi.data.title}
                tituloEspañol={tituloEsp}
                score={respuestaApi.data.score}
                personasScore={respuestaApi.data.scored_by}
                listaTags={dataTags}
                handleClick={handleClick}
                imagenTrailer={
                  respuestaApi.data.trailer.images.medium_image_url
                }
              />

              <SubSectionDetalle
                titulo="sinopsis"
                visibleContent={visibleContent}
              >
                <p className="mb-10 text-main-black">
                  {respuestaApi.data.synopsis}
                </p>
              </SubSectionDetalle>
              {respuestaApi.data.background && (
                <SubSectionDetalle
                  titulo="background"
                  visibleContent={visibleContent}
                >
                  <p className="mb-10 text-main-black">
                    {respuestaApi.data.background}
                  </p>
                </SubSectionDetalle>
              )}
              <EpisodiosDetalle visibleContent={visibleContent} id={id} />
              <PersonajesDetalle visibleContent={visibleContent} id={id} />
              <RecomendadosDetalle visibleContent={visibleContent} id={id} />
              <ReviewsDetalle visibleContent={visibleContent} id={id} />
              <NoticiasDetalle visibleContent={visibleContent} id={id} />
            </>
          </MainSectionDetalle>
        </>
      )}
    </>
  );
};

export default DetalleAnime;
