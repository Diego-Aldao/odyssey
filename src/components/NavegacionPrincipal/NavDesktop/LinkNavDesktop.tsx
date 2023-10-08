import { Link } from "react-router-dom";
import {
  variantesNavegaciones,
  variantesNavegacionesLinea,
  transition,
} from "../../../VariantesFramerMotion";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

type Props = {
  texto: string;
  destino: string;
};

const LinkNavDesktop = ({ texto, destino }: Props) => {
  const { pathname } = useLocation();
  return (
    <motion.li
      variants={variantesNavegaciones}
      whileHover="whileHover"
      initial="initial"
      animate="animate"
      transition={transition}
    >
      <Link
        to={destino}
        className="text-sm lg:text-[16px] xl:text-lg gap-1 z-[1] h-full rounded-sm relative px-1 lg:px-2 xl:px-3 flex flex-col items-center justify-center font-medium text-main-color-background capitalize"
      >
        {texto}

        <div className="animacion w-full h-[2px] flex gap-1 lg:gap-2">
          <span
            className={`w-[7px] lg:w-[10px] h-full bg-main-color-background ${
              pathname === destino ? "block" : "hidden"
            }`}
          ></span>
          <motion.div
            variants={variantesNavegacionesLinea}
            transition={transition}
            className="linea bg-main-color-background w-full h-full relative right-0"
          ></motion.div>
        </div>
      </Link>
    </motion.li>
  );
};

export default LinkNavDesktop;
