import SectionDetalle from "../SectionDetalle";
import recomendados from "../../../mocks/detalle/Recomendado.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";

const RecomendadosDetalle = () => {
  return (
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
        {recomendados.data.map((recomendacion) => (
          <SwiperSlide key={recomendacion.entry.mal_id}>
            <article className="flex flex-col mb-5">
              <p className="text-xs capitalize">
                recomiendan: <br /> {recomendacion.votes} usuarios
              </p>
              <div className="rounded-xl border-2 border-main-black overflow-hidden h-full my-1">
                <img src={recomendacion.entry.images.webp.image_url} alt="" />
              </div>
              <p className="min-h-[14px] text-xs whitespace-nowrap overflow-hidden">
                {recomendacion.entry.title}
              </p>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </SectionDetalle>
  );
};

export default RecomendadosDetalle;
