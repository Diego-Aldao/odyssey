import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { varianteCards, transition } from "../../../VariantesFramerMotion";
import LazyLoadImage from "../../Generales/LazyLoadImage";

type Props = {
  imagen?: string;
  titulo: string;
  subtitulo: string | undefined;
  tipo: string;
  id: number;
  mainPage?: boolean;
};

const CardVideo: React.FC<Props> = ({
  imagen,
  titulo,
  subtitulo,
  id,
  tipo,
  mainPage,
}) => {
  return (
    <motion.article
      initial="initial"
      whileInView="whileInView"
      transition={transition}
      viewport={{ once: true }}
      variants={varianteCards}
      className="relative flex flex-col w-full gap-2 z-[1]"
    >
      <Link to={`/detalle/${tipo}/${id}`}>
        <p
          className={`flex w-fit max-w-[90%] justify-start border-main-black rounded-sm pl-4 relative item-skew-izquierda z-[1] px-1 bg-main-black text-main-color-background ${
            mainPage ? "" : "pl-0"
          }`}
        >
          <span className="line-clamp-1 md:text-lg lg:text-base xl:text-lg">
            {titulo}
          </span>
        </p>
      </Link>
      <div
        className={`h-[90vw] min-h-[160px] border-2 rounded-xl overflow-hidden flex flex-1 max-h-[250px] items-center justify-center ${
          mainPage ? "border-main-black" : "border-main-color-background"
        }`}
      >
        <Link to={`/detalle/${tipo}/${id}/trailer`} className="absolute">
          <div className="play bg-main-black-static text-main-color-background-static rounded-lg px-5 capitalize flex items-center justify-center gap-4 py-1 border-[1px] border-main-color-background-static">
            ver video
            <Icon
              icon="streamline:entertainment-control-button-play-button-television-buttons-movies-play-tv-video-controls"
              className="stroke-2"
            />
          </div>
        </Link>
        <LazyLoadImage>
          <img src={imagen} alt="" />
        </LazyLoadImage>
      </div>
      <p
        className={`w-fit flex self-end ${
          mainPage ? "text-main-black" : "text-main-color-background"
        }`}
      >
        {subtitulo}
      </p>
    </motion.article>
  );
};

export default CardVideo;
