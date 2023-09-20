import SubSectionDetalle from "../../SubSectionDetalle";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import { BASE_URL_DETAILS } from "../../../../constants";
import { ApiResponseDetalleRecomendado } from "../../../../types";
import useFetch from "../../../../hooks/useFetch";
import MotionListItem from "../../FramerMotion/MotionListItem";
import Loading from "../../../Generales/Loading";
import ListadoSinResultados from "./ListadoSinResultados";
import MotionUnorderedList from "../../FramerMotion/MotionUnorderedList";
import { Link } from "react-router-dom";

type Props = {
  visibleContent?: string;
  id?: string;
};

const ListadoRecomendados = ({ visibleContent, id }: Props) => {
  const { respuestaApi, loading } = useFetch<ApiResponseDetalleRecomendado>(
    `${BASE_URL_DETAILS}/anime/${id || "54842"}/recommendations`
  );

  return (
    <SubSectionDetalle titulo="recomendaciones" visibleContent={visibleContent}>
      <>
        {loading || !respuestaApi ? (
          <Loading customClases="loading_height_subSection" />
        ) : (
          <>
            {respuestaApi.data.length >= 1 ? (
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
                <MotionUnorderedList clases="">
                  <>
                    {respuestaApi.data.map((recomendacion) => (
                      <SwiperSlide key={recomendacion.entry.mal_id}>
                        <MotionListItem clases="flex flex-col mb-5">
                          <Link
                            to={`/detalle/anime/${recomendacion.entry.mal_id}`}
                          >
                            <p className="text-xs capitalize">
                              recomiendan: <br /> {recomendacion.votes} usuarios
                            </p>
                            <div className="rounded-xl border-2 border-main-black overflow-hidden h-full my-1">
                              <img
                                src={recomendacion.entry.images?.webp.image_url}
                                alt=""
                              />
                            </div>
                            <p className="min-h-[14px] text-xs whitespace-nowrap overflow-hidden">
                              {recomendacion.entry.title}
                            </p>
                          </Link>
                        </MotionListItem>
                      </SwiperSlide>
                    ))}
                  </>
                </MotionUnorderedList>
              </Swiper>
            ) : (
              <ListadoSinResultados nombreSeccion="recomendaciones" />
            )}
          </>
        )}
      </>
    </SubSectionDetalle>
  );
};

export default ListadoRecomendados;
