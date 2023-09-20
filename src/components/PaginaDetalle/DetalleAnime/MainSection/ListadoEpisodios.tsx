import { useState, useEffect } from "react";
import SubSectionDetalle from "../../SubSectionDetalle";
import { BASE_URL_DETAILS } from "../../../../constants";
import { ApiResponseDetalleEpisodios, DataEpisode } from "../../../../types";
import useFetch from "../../../../hooks/useFetch";
import MotionListItem from "../../FramerMotion/MotionListItem";
import Loading from "../../../Generales/Loading";
import ListadoSinResultados from "./ListadoSinResultados";
import MotionUnorderedList from "../../FramerMotion/MotionUnorderedList";

type Props = {
  visibleContent?: string;
  id?: string;
};

const ListadoEpisodios = ({ visibleContent, id }: Props) => {
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
    <SubSectionDetalle titulo="episodios" visibleContent={visibleContent}>
      <>
        {loading || !currentData ? (
          <Loading
            customClases={
              visibleContent === "episodios" ? "" : "loading_height_subSection"
            }
          />
        ) : (
          <>
            {currentData.length >= 1 ? (
              <MotionUnorderedList clases="grid sm:grid-cols-2 gap-2 lg:grid-cols-4">
                <>
                  {currentData.map((episodio) => (
                    <MotionListItem
                      key={episodio.mal_id}
                      clases="mb-5 flex flex-col max-w-sm mx-auto w-full"
                    >
                      <>
                        <p className="capitalize font-semibold">
                          episodio {episodio.mal_id}
                        </p>
                        <div className="rounded-xl overflow-hidden border-2 border-main-black my-1 min-h-[150px] md:min-h-[100px]">
                          <img src={episodio.images.jpg.image_url} alt="" />
                        </div>
                        <p className="self-end text-sm text-end">
                          {episodio.title}
                        </p>
                      </>
                    </MotionListItem>
                  ))}
                </>
              </MotionUnorderedList>
            ) : (
              <ListadoSinResultados nombreSeccion="episodios" />
            )}
          </>
        )}
      </>
    </SubSectionDetalle>
  );
};

export default ListadoEpisodios;
