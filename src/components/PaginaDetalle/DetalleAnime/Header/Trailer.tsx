import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { transition, varianteTrailer } from "../../../../VariantesFramerMotion";
import LazyLoadImage from "../../../Generales/LazyLoadImage";

type Props = {
  handleClick: () => void;
  imagen: string | null;
};

const Trailer = ({ handleClick, imagen }: Props) => {
  return (
    <>
      {imagen !== null && (
        <motion.div
          variants={varianteTrailer}
          initial="initialContenedor"
          animate="animateContenedor"
          transition={transition}
          onClick={handleClick}
          className="hidden xl:flex flex-col"
        >
          <motion.p
            variants={varianteTrailer}
            initial="initialBoton"
            animate="animateBoton"
            transition={transition}
            className="text-left capitalize font-medium text-main-black"
          >
            trailer
          </motion.p>
          <div className="video relative rounded-lg border-2 border-main-black overflow-hidden ml-auto flex items-center justify-center min-w-[195px] max-w-[200px] h-[112px]">
            <motion.div
              initial="initialBoton"
              animate="animateBoton"
              whileHover="whileHoverMain"
              variants={varianteTrailer}
              transition={transition}
              className="absolute bg-main-black text-main-color-background rounded-lg px-5 capitalize flex items-center justify-center gap-4 py-1 border-[1.5px] border-main-color-background text-sm cursor-pointer"
            >
              <motion.span
                variants={varianteTrailer}
                whileHover="whileHover"
                className="flex gap-2 items-center relative "
              >
                ver trailer
                <Icon
                  icon="streamline:entertainment-control-button-play-button-television-buttons-movies-play-tv-video-controls"
                  className="stroke-2"
                />
              </motion.span>
            </motion.div>
            <LazyLoadImage>
              <img src={imagen} alt="" />
            </LazyLoadImage>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Trailer;
