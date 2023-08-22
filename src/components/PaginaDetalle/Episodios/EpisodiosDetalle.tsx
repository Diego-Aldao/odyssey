import { useEffect, useState } from "react";
import SectionDetalle from "../SectionDetalle";
import { BASE_URL_DETAILS } from "../../../constants";
import { ApiResponseDetalleEpisodios, DataEpisode } from "../../../types";
import { useParams } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";

type Props = {
  visibleContent?: string;
};

const EpisodiosDetalle = ({ visibleContent }: Props) => {
  const [currentData, setCurrentData] = useState<DataEpisode[]>();
  const { fetchData, data, loading } = useFetch<ApiResponseDetalleEpisodios>();
  const { id } = useParams();

  useEffect(() => {
    if (!id) return;
    void fetchData(`${BASE_URL_DETAILS}/anime/${id}/videos/episodes`);
  }, [id]);

  useEffect(() => {
    if (!data) return;
    const newData = data?.data.slice(0, 4);
    if (visibleContent === "episodios") {
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
            (visibleContent === "general" ||
              visibleContent === "episodios") && (
              <SectionDetalle titulo="episodios">
                <div className="grid sm:grid-cols-2 gap-2 lg:grid-cols-4">
                  {currentData?.map((episodio) => (
                    <article
                      key={episodio.mal_id}
                      className="mb-5 flex flex-col max-w-sm mx-auto w-full"
                    >
                      <p className="capitalize">episodio {episodio.mal_id}</p>
                      <div className="rounded-xl overflow-hidden border-2 border-main-black my-1">
                        <img src={episodio.images.jpg.image_url} alt="" />
                      </div>
                      <p className="self-end">{episodio.title}</p>
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
