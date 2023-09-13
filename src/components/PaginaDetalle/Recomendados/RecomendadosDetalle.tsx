import SectionDetalle from "../SectionDetalle";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import { BASE_URL_DETAILS } from "../../../constants";
import { ApiResponseDetalleRecomendado } from "../../../types";
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

const RecomendadosDetalle = ({ visibleContent, id }: Props) => {
  const { respuestaApi, loading } = useFetch<ApiResponseDetalleRecomendado>(
    `${BASE_URL_DETAILS}/anime/${id || "54842"}/recommendations`
  );

  return (
    <>
      {loading || !respuestaApi ? (
        <>CARGANDO</>
      ) : (
        <>
          {respuestaApi.data.length >= 1 &&
            (visibleContent === "general" ||
              visibleContent === "recomendaciones") && (
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
                    {respuestaApi.data.map((recomendacion) => (
                      <SwiperSlide key={recomendacion.entry.mal_id}>
                        <motion.article
                          variants={varianteDetalleArticle}
                          initial="initial"
                          whileInView="whileInView"
                          viewport={{ once: true, margin: "-70px" }}
                          transition={transition}
                          className="flex flex-col mb-5"
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
                        </motion.article>
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
