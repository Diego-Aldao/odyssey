import SectionDetalle from "../SectionDetalle";
import { useEffect, useState } from "react";
import { BASE_URL_DETAILS } from "../../../constants";
import { DataNews, ApiResponseDetalleNoticias } from "../../../types";
import useFetch from "../../../hooks/useFetch";
import { motion } from "framer-motion";
import {
  varianteDetalleArticle,
  transition,
} from "../../../VariantesFramerMotion";

type Props = {
  visibleContent?: string;
  id?: string;
};

const NoticiasDetalle = ({ visibleContent, id }: Props) => {
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
                    <motion.article
                      variants={varianteDetalleArticle}
                      initial="initial"
                      whileInView="whileInView"
                      viewport={{ once: true, margin: "-70px" }}
                      transition={transition}
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
                    </motion.article>
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
