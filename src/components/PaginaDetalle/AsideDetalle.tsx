import React from "react";
import { motion } from "framer-motion";
import { variantesAside, transition } from "./FramerMotion/Variantes";

type Props = {
  imagenUrl?: string;
  tituloAside: string;
  children: JSX.Element;
};

const AsideDetalle: React.FC<Props> = ({
  imagenUrl,
  tituloAside,
  children,
}) => {
  return (
    <aside className="hidden md:flex flex-col gap-10 z-20 relative col-start-1 w-full lg:mt-10">
      <motion.div
        variants={variantesAside}
        initial="initialContenedor"
        animate="animateContenedor"
        transition={transition}
        className="border-2 rounded-xl overflow-hidden border-main-black w-full"
      >
        <img src={imagenUrl} alt="poster del anime" />
      </motion.div>
      <div className="info">
        <div className="border-b-[3px] border-main-black w-[calc(100%_+_14px)] lg:w-[calc(100%_+_18px)]">
          <motion.p
            variants={variantesAside}
            initial="initialContenedorTexto"
            animate="animateContenedorTexto"
            transition={transition}
            className="item-skew-izquierda after:rounded-b-none after:skew-x-[-331deg] relative  capitalize text-lg inline-block text-main-color-background bg-main-black px-2 rounded-t-md rounded-tr-[10px]"
          >
            <motion.span
              variants={variantesAside}
              className="relative block"
              initial="initialTexto"
              animate="animateTexto"
              transition={transition}
            >
              {tituloAside}
            </motion.span>
          </motion.p>
        </div>
        {children}
      </div>
    </aside>
  );
};

export default AsideDetalle;
