import SectionDetalle from "../SectionDetalle";
import { useEffect, useState } from "react";
import { ApiResponseDetalleReviews, DataReviews } from "../../../types";
import { BASE_URL_DETAILS } from "../../../constants";
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

const ReviewsDetalle = ({ visibleContent, id }: Props) => {
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
    <>
      {loading || !currentData ? (
        <>cargando</>
      ) : (
        <>
          {currentData.length >= 1 &&
            (visibleContent === "general" || visibleContent === "reviews") && (
              <SectionDetalle titulo="reviews">
                <>
                  {currentData.map((review) => (
                    <motion.article
                      variants={varianteDetalleArticle}
                      initial="initial"
                      whileInView="whileInView"
                      viewport={{ once: true, margin: "-70px" }}
                      transition={transition}
                      key={review.mal_id}
                      className="flex gap-2 mb-5 max-w-[600px] lg:max-w-[700px] items-start"
                    >
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
                    </motion.article>
                  ))}
                </>
              </SectionDetalle>
            )}
        </>
      )}
    </>
  );
};

export default ReviewsDetalle;
