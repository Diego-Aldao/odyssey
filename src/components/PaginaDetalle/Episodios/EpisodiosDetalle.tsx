import { useEffect, useState } from "react";
import SectionDetalle from "../SectionDetalle";
import useFetchSecondary from "../../../hooks/useFetchSecondary";
import { BASE_URL_DETAILS } from "../../../constants";
import { DataEpisode } from "../../../types";
import { useParams } from "react-router-dom";

const EpisodiosDetalle = () => {
  const [currentData, setCurrentData] = useState<DataEpisode[]>();
  const { fetchData, data, loading } = useFetchSecondary();
  const { id } = useParams();

  useEffect(() => {
    if (!id) return;
    void fetchData(`${BASE_URL_DETAILS}/anime/${id}/videos/episodes`);
  }, [id]);

  useEffect(() => {
    if (!data) return;

    setCurrentData(data.data.slice(0, 4));
  }, [data]);

  return (
    <SectionDetalle titulo="episodios">
      {loading ? (
        <>cargando</>
      ) : (
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
      )}
    </SectionDetalle>
  );
};

export default EpisodiosDetalle;
