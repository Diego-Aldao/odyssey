import SubSectionDetalle from "../../SubSectionDetalle";
import { useEffect, useState } from "react";
import { BASE_URL_DETAILS } from "../../../../constants";
import { DataNews, ApiResponseDetalleNoticias } from "../../../../types";
import useFetch from "../../../../hooks/useFetch";
import MotionListItem from "../../FramerMotion/MotionListItem";
import Loading from "../../../Generales/Loading";
import MotionUnorderedList from "../../FramerMotion/MotionUnorderedList";
import ListadoSinResultados from "./ListadoSinResultados";

type Props = {
  visibleContent: string;
  id?: string;
};

const ListadoNoticias = ({ visibleContent, id }: Props) => {
  const [currentData, setCurrentData] = useState<DataNews[]>();
  const { respuestaApi, loading } = useFetch<ApiResponseDetalleNoticias>(
    `${BASE_URL_DETAILS}/anime/${id || "54842"}/news`
  );

  useEffect(() => {
    if (!respuestaApi) return;
    const newData = respuestaApi.data.slice(0, 6);
    if (visibleContent === "noticias") {
      setCurrentData(respuestaApi.data);
    } else {
      setCurrentData(newData);
    }
  }, [respuestaApi, visibleContent]);

  return (
    <SubSectionDetalle titulo="noticias" visibleContent={visibleContent}>
      <>
        {loading || !currentData ? (
          <Loading
            customClases={
              visibleContent === "noticias" ? "" : "loading_height_subSection"
            }
          />
        ) : (
          <>
            {currentData.length >= 1 ? (
              <MotionUnorderedList clases="grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-x-5 lg:gap-y-5 items-start justify-start">
                <>
                  {currentData.map((noticia) => (
                    <MotionListItem
                      key={noticia.mal_id}
                      clases="flex gap-2 items-start"
                    >
                      <>
                        <div className="rounded-xl border-2 border-main-black w-[70px] lg:w-[90px] min-h-[90px] overflow-hidden">
                          <img src={noticia.images?.jpg.image_url} alt="" />
                        </div>
                        <div className="w-[calc(100%_-_70px)] flex flex-col gap-1">
                          <p className="text-sm max-w-sm font-bold">
                            {noticia.title}
                          </p>
                          <p className="text-xs capitalize">
                            autor: {noticia.author_username}
                          </p>
                          <p className="text-xs">
                            {noticia.comments} comentarios
                          </p>
                          <p></p>
                        </div>
                      </>
                    </MotionListItem>
                  ))}
                </>
              </MotionUnorderedList>
            ) : (
              <ListadoSinResultados nombreSeccion="noticias" />
            )}
          </>
        )}
      </>
    </SubSectionDetalle>
  );
};

export default ListadoNoticias;
