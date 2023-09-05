import { useState, useEffect } from "react";
import SectionDetalle from "../SectionDetalle";
import { BASE_URL_DETAILS } from "../../../constants";
import { ApiResponseDetalleEpisodios, DataEpisode } from "../../../types";
import useFetch from "../../../hooks/useFetch";

type Props = {
  visibleContent?: string;
  id?: string;
};

const EpisodiosDetalle = ({ visibleContent, id }: Props) => {
  const { respuestaApi, loading } = useFetch<ApiResponseDetalleEpisodios>(
    `${BASE_URL_DETAILS}/anime/${id || "54842"}/videos/episodes`
  );
  const [currentData, setCurrentData] = useState<DataEpisode[]>();

  useEffect(() => {
    if (!respuestaApi) return;
    const newData = respuestaApi.data.slice(0, 4);
    if (visibleContent === "episodios") {
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
            (visibleContent === "general" ||
              visibleContent === "episodios") && (
              <SectionDetalle titulo="episodios">
                <div className="grid sm:grid-cols-2 gap-2 lg:grid-cols-4">
                  {currentData.map((episodio) => (
                    <article
                      key={episodio.mal_id}
                      className="mb-5 flex flex-col max-w-sm mx-auto w-full"
                    >
                      <p className="capitalize font-semibold">
                        episodio {episodio.mal_id}
                      </p>
                      <div className="rounded-xl overflow-hidden border-2 border-main-black my-1 min-h-[150px] md:min-h-[100px]">
                        <img src={episodio.images.jpg.image_url} alt="" />
                      </div>
                      <p className="self-end text-sm text-end">
                        {episodio.title}
                      </p>
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

export default EpisodiosDetalle;
