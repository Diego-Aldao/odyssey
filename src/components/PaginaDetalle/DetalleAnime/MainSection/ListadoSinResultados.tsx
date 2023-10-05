import { motion } from "framer-motion";
import {
  transition,
  varianteDetalleSecciones,
} from "../../../../VariantesFramerMotion";

type Props = {
  nombreSeccion: string;
};

const ListadoSinResultados = ({ nombreSeccion }: Props) => {
  return (
    <motion.div
      variants={varianteDetalleSecciones}
      initial="initialSection"
      animate="animateSection"
      exit="exitSection"
      transition={transition}
      className="h-[100px] flex items-center justify-center"
    >
      <p className="uppercase text-sm font-bold lg:text-lg text-main-black">
        no se encontraron {nombreSeccion}
      </p>
    </motion.div>
  );
};

export default ListadoSinResultados;
