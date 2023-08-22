import SectionDetalle from "../SectionDetalle";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { BASE_URL_DETAILS } from "../../../constants";
import { DataNews, ApiResponseDetalleNoticias } from "../../../types";
import useFetch from "../../../hooks/useFetch";

type Props = {
  visibleContent?: string;
};

const NoticiasDetalle = ({ visibleContent }: Props) => {
  const [currentData, setCurrentData] = useState<DataNews[]>();
  const { fetchData, data, loading } = useFetch<ApiResponseDetalleNoticias>();
  const { id } = useParams();

  useEffect(() => {
    if (!id) return;
    void fetchData(`${BASE_URL_DETAILS}/anime/${id}/news`);
  }, [id]);

  useEffect(() => {
    if (!data) return;
    const newData = data?.data.slice(0, 6);
    if (visibleContent === "noticias") {
      setCurrentData(data.data);
    } else {
      setCurrentData(newData);
    }
  }, [data, visibleContent]);

  return (
    <>
      {loading || !currentData ? (
        <>cargando</>
      ) : (
        <>
          {currentData.length >= 1 &&
            (visibleContent === "general" || visibleContent === "noticias") && (
              <SectionDetalle titulo="noticias">
                <div className="grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-x-5 lg:gap-y-5">
                  {currentData.map((noticia) => (
                    <article
                      key={noticia.mal_id}
                      className="flex gap-2 items-start"
                    >
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
                    </article>
                  ))}
                </div>
              </SectionDetalle>
            )}
        </>
      )}
    </>
  );
};

export default NoticiasDetalle;
