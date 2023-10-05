import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  transition,
  varianteCards,
} from "../../../../../VariantesFramerMotion";

type Props = {
  titulo: string;
  children: JSX.Element;
  id: number;
  tipo: string;
};

const CardInfo: React.FC<Props> = ({ titulo, id, tipo, children }) => {
  const currentTipo = tipo === "TV" ? "anime" : tipo?.toLowerCase();
  return (
    <motion.div
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true, margin: "-100px" }}
      transition={transition}
      variants={varianteCards}
      className="w-full relative flex"
    >
      <Link
        to={`/detalle/${currentTipo}/${id}`}
        className="w-full relative flex"
      >
        <article className="relative flex flex-col gap-2 xs:gap-3 md:rounded-none  bg-main-color-background w-full">
          <h3 className="flex-auto h-full w-full font-bold text-xs xs:text-sm md:text-base xl:text-lg flex items-center justify-center text-main-black">
            <span className="line-clamp-2 text-center">{titulo}</span>
          </h3>
          {children}
        </article>
      </Link>
    </motion.div>
  );
};

export default CardInfo;
