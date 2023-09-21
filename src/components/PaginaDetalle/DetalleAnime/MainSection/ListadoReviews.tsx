import SubSectionDetalle from "../../SubSectionDetalle";
import { useEffect, useState } from "react";
import { ApiResponseDetalleReviews, DataReviews } from "../../../../types";
import { BASE_URL_DETAILS } from "../../../../constants";
import useFetch from "../../../../hooks/useFetch";
import MotionListItem from "../../FramerMotion/MotionListItem";
import ListadoSinResultados from "./ListadoSinResultados";
import MotionUnorderedList from "../../FramerMotion/MotionUnorderedList";
import Loading from "../../../Generales/Loading";

type Props = {
  visibleContent: string;
  id?: string;
};

const ListadoReviews = ({ visibleContent, id }: Props) => {
  const [currentData, setCurrentData] = useState<DataReviews[]>();
  const { respuestaApi, loading } = useFetch<ApiResponseDetalleReviews>(
    `${BASE_URL_DETAILS}/anime/${id || "54842"}/reviews`
  );

  useEffect(() => {
    if (!respuestaApi) return;
    const newData = respuestaApi.data.slice(0, 5);
    if (visibleContent === "reviews") {
      setCurrentData(respuestaApi.data);
    } else {
      setCurrentData(newData);
    }
  }, [respuestaApi, visibleContent]);

  return (
    <SubSectionDetalle titulo="reviews" visibleContent={visibleContent}>
      <>
        {loading || !currentData ? (
          <Loading
            customClases={
              visibleContent === "reviews" ? "" : "loading_height_subSection"
            }
          />
        ) : (
          <>
            {currentData.length >= 1 ? (
              <MotionUnorderedList clases="">
                <>
                  {currentData.map((review) => (
                    <MotionListItem
                      key={review.mal_id}
                      clases="flex gap-2 mb-5 max-w-[600px] lg:max-w-[700px] items-start"
                    >
                      <>
                        <div className="w-[40px] lg:w-[50px] flex rounded-lg border-2 border-main-black overflow-hidden">
                          <img src={review.user.images.webp.image_url} alt="" />
                        </div>
                        <div className="header flex gap-2 flex-col w-[calc(100%_-_48px)] lg:w-[calc(100%_-_58px)]">
                          <div className="info-user flex flex-col gap-1">
                            <p className="font-bold text-sm">
                              {review.user.username}
                            </p>
                            <p className="text-xs">
                              {review.tags.map((tag) => (
                                <span key={tag}>{tag}</span>
                              ))}
                            </p>
                            {review.is_preliminary && (
                              <p className="text-xs">
                                <span>sin terminar </span>
                                <span>(3/12 eps)</span>
                              </p>
                            )}
                          </div>
                          <div className="review">
                            <p className="line-clamp-4 text-sm">
                              {review.review}
                            </p>
                          </div>
                          <p className="footer text-xs">
                            <span>{review.date.toLocaleString()} </span>|
                            <span> {review.reactions.overall}</span>
                          </p>
                        </div>
                      </>
                    </MotionListItem>
                  ))}
                </>
              </MotionUnorderedList>
            ) : (
              <ListadoSinResultados nombreSeccion="reviews" />
            )}
          </>
        )}
      </>
    </SubSectionDetalle>
  );
};

export default ListadoReviews;
