import SubSectionDetalle from "../../SubSectionDetalle";
import { useEffect, useState } from "react";
import { BASE_URL_DETAILS } from "../../../../constants";
import { ApiResponseDetallePersonajes, DataPersonaje } from "../../../../types";
import useFetch from "../../../../hooks/useFetch";
import MotionListItem from "../../FramerMotion/MotionListItem";
import Loading from "../../../Generales/Loading";
import MotionUnorderedList from "../../FramerMotion/MotionUnorderedList";
import ListadoSinResultados from "./ListadoSinResultados";
import { Link } from "react-router-dom";
import LazyLoadImage from "../../../Generales/LazyLoadImage";

type Props = {
  visibleContent: string;
  id?: string;
};

const ListadoPersonajes = ({ visibleContent, id }: Props) => {
  const [currentData, setCurrentData] = useState<DataPersonaje[]>();
  const { respuestaApi, loading } = useFetch<ApiResponseDetallePersonajes>(
    `${BASE_URL_DETAILS}/anime/${id || "54842"}/characters`
  );

  useEffect(() => {
    if (!respuestaApi) return;
    const newData = respuestaApi.data.slice(0, 10);
    if (visibleContent === "personajes") {
      setCurrentData(respuestaApi.data);
    } else {
      setCurrentData(newData);
    }
  }, [respuestaApi, visibleContent]);

  return (
    <SubSectionDetalle titulo="personajes" visibleContent={visibleContent}>
      <>
        {loading || !currentData ? (
          <Loading
            customClases={
              visibleContent === "personajes" ? "" : "loading_height_subSection"
            }
          />
        ) : (
          <>
            {currentData.length >= 1 ? (
              <MotionUnorderedList clases="grid gap-2 xs:grid-cols-2 md:gap-3 lg:grid-cols-2 lg:gap-x-5 lg:gap-3">
                <>
                  {currentData.map((personaje) => (
                    <MotionListItem
                      key={personaje.character.mal_id}
                      clases="flex gap-2 justify-between"
                    >
                      <>
                        <Link
                          to={`/detalle/personaje/${personaje.character.mal_id}`}
                          className="lg:w-1/2"
                        >
                          <div className="personaje flex gap-2">
                            <div className="rounded-xl border-2 border-main-black h-24 lg:h-22 min-w-[60px] max-w-[60px] overflow-hidden">
                              <LazyLoadImage>
                                <img
                                  src={
                                    personaje.character.images.webp.image_url
                                  }
                                  alt="imagen de personaje anime"
                                />
                              </LazyLoadImage>
                            </div>
                            <div className="flex flex-col gap-1">
                              <p className="font-bold md:text-sm">
                                {personaje.character.name}
                              </p>
                              <p className="text-xs capitalize">
                                {personaje.role}
                              </p>
                              {personaje.voice_actors.length >= 1 && (
                                <p className="text-xs capitalize lg:hidden">
                                  voz: {personaje.voice_actors[0].person.name}
                                </p>
                              )}
                            </div>
                          </div>
                        </Link>

                        {personaje.voice_actors.length >= 1 && (
                          <Link
                            to={`/detalle/persona/${personaje.voice_actors[0].person.mal_id}`}
                            className="lg:w-1/2"
                          >
                            <div className="voz gap-2 text-end hidden lg:flex  justify-end">
                              <div className="flex flex-col gap-1">
                                <p className="font-bold lg:text-sm">
                                  {personaje.voice_actors[0].person.name}
                                </p>
                                <p className="text-xs capitalize">
                                  {personaje.voice_actors[0].language}
                                </p>
                              </div>
                              <div className="rounded-xl border-2 border-main-black h-24 lg:h-22 min-w-[60px] max-w-[60px] overflow-hidden">
                                <LazyLoadImage>
                                  <img
                                    src={
                                      personaje.voice_actors[0].person.images
                                        .jpg.image_url
                                    }
                                    alt="imagen actor de voz"
                                  />
                                </LazyLoadImage>
                              </div>
                            </div>
                          </Link>
                        )}
                      </>
                    </MotionListItem>
                  ))}
                </>
              </MotionUnorderedList>
            ) : (
              <ListadoSinResultados nombreSeccion="personajes" />
            )}
          </>
        )}
      </>
    </SubSectionDetalle>
  );
};

export default ListadoPersonajes;
