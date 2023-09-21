import { motion } from "framer-motion";
import {
  transition,
  varianteBarraBusqueda,
} from "../../../VariantesFramerMotion";
import { Icon } from "@iconify/react";
import BarraBusqueda from "../../Generales/BarraBusqueda";
type Props = {
  handleClick: () => void;
};

const BarraBusquedaDesktop = ({ handleClick }: Props) => {
  return (
    <div
      className={`w-full z-[1] h-full item-skew-x absolute top-0 left-0 after:-right-[20px] before:-left-[20px] items-center justify-center bg-main-black gap-2 flex`}
    >
      <BarraBusqueda />
      <motion.div
        initial="initialClose"
        animate="animateClose"
        exit="exitClose"
        whileHover="whileHoverClose"
        transition={transition}
        variants={varianteBarraBusqueda}
        className="flex items-center justify-center cursor-pointer"
        onClick={handleClick}
      >
        <Icon icon="jam:close" className="h-8 w-8 text-main-color-background" />
      </motion.div>
    </div>
  );
};

export default BarraBusquedaDesktop;
