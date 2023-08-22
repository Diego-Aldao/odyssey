import SectionDetalle from "../SectionDetalle";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { BASE_URL_DETAILS } from "../../../constants";
import {
  ApiResponseDetalleRecomendado,
  DataRecomendados,
} from "../../../types";
import useFetch from "../../../hooks/useFetch";

type Props = {
  visibleContent?: string;
};

const RecomendadosDetalle = ({ visibleContent }: Props) => {
  const [currentData, setCurrentData] = useState<DataRecomendados[]>();
  const { fetchData, data, loading } =
    useFetch<ApiResponseDetalleRecomendado>();
  const { id } = useParams();

  useEffect(() => {
    if (!id) return;
    void fetchData(`${BASE_URL_DETAILS}/anime/${id}/recommendations`);
  }, [id]);

  useEffect(() => {
    if (!data) return;
    setCurrentData(data.data);
  }, [data]);

  return (
    <>
      {loading || !currentData ? (
        <>CARGANDO</>
      ) : (
        <>
          {currentData.length >= 1 &&
            (visibleContent === "general" ||
              visibleContent === "recomendados") && (
              <SectionDetalle titulo="recomendados">
                <Swiper
                  spaceBetween={7}
                  slidesPerView={3.2}
                  modules={[FreeMode]}
                  freeMode={true}
                  breakpoints={{
                    640: {
                      slidesPerView: 5.2,
                      spaceBetween: 7,
                    },
                    1024: {
                      slidesPerView: 7.2,
                      spaceBetween: 10,
                    },
                  }}
                >
                  <>
                    {currentData.map((recomendacion) => (
                      <SwiperSlide key={recomendacion.entry.mal_id}>
                        <article className="flex flex-col mb-5">
                          <p className="text-xs capitalize">
                            recomiendan: <br /> {recomendacion.votes} usuarios
                          </p>
                          <div className="rounded-xl border-2 border-main-black overflow-hidden h-full my-1">
                            <img
                              src={recomendacion.entry.images.webp.image_url}
                              alt=""
                            />
                          </div>
                          <p className="min-h-[14px] text-xs whitespace-nowrap overflow-hidden">
                            {recomendacion.entry.title}
                          </p>
                        </article>
                      </SwiperSlide>
                    ))}
                  </>
                </Swiper>
              </SectionDetalle>
            )}
        </>
      )}
    </>
  );
};

export default RecomendadosDetalle;
