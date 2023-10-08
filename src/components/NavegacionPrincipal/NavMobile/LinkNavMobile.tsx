import { motion } from "framer-motion";
import { varianteNavMobile, transition } from "../../../VariantesFramerMotion";

type Props = {
  nombre: string;
  id: number;
  handleDestino: (destino: string) => void;
  destino: string;
};

const LinkNavMobile = ({ nombre, id, handleDestino, destino }: Props) => {
  return (
    <motion.li
      variants={varianteNavMobile}
      initial="initialListItem"
      animate="animateListItem"
      transition={{ transition, delay: Number(`0.${id}9`) }}
      onClick={() => {
        handleDestino(destino);
      }}
      className="item-skew-izquierda z-[2] relative -left-4 text-main-color-background bg-main-black pl-4 py-2 capitalize font-medium text-lg px-10"
      key={id}
    >
      {nombre}
    </motion.li>
  );
};

export default LinkNavMobile;
