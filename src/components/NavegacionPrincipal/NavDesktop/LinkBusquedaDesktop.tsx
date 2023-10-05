import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import {
  variantesNavegaciones,
  variantesNavegacionesLinea,
  transition,
} from "../../../VariantesFramerMotion";

type Props = {
  handleClick: () => void;
};

const LinkBusquedaDesktop = ({ handleClick }: Props) => {
  return (
    <motion.li
      variants={variantesNavegaciones}
      whileHover="whileHover"
      initial="initial"
      animate="animate"
      transition={transition}
      onClick={handleClick}
      className="h-full rounded-sm relative px-1 lg:px-2 xl:px-3 overflow-hidden flex flex-col items-center justify-center cursor-pointer"
    >
      <p className="flex gap-2 items-center mb-1">
        <span className="hidden xl:block capitalize text-[13px] lg:text-lg text-main-color-background font-medium">
          buscar{" "}
        </span>
        <Icon
          icon="mingcute:search-3-line"
          className="h-4 w-4 lg:h-5 lg:w-5 text-main-color-background"
        />
      </p>
      <div className="animacion w-full h-[2px] flex gap-1 lg:gap-2">
        <motion.div
          variants={variantesNavegacionesLinea}
          transition={transition}
          className="linea bg-main-color-background w-full h-full relative right-0"
        ></motion.div>
      </div>
    </motion.li>
  );
};

export default LinkBusquedaDesktop;
