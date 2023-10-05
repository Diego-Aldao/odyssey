import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { transition, varianteCards } from "../../VariantesFramerMotion";
import LazyLoadImage from "../Generales/LazyLoadImage";

type Props = {
  id: number;
  imagen: string;
  titulo: string;
  children: JSX.Element;
  tipo: string;
};

const CardBusqueda = ({ id, imagen, titulo, children, tipo }: Props) => {
  return (
    <Link to={`/detalle/${tipo}/${id}`}>
      <motion.div
        initial="initial"
        whileInView="whileInView"
        variants={varianteCards}
        viewport={{ once: true, margin: "-100px" }}
        transition={transition}
        key={id}
        className="flex gap-1 lg:gap-2 bg-main-color-background z-[1] relative rounded-xl py-1"
      >
        <div className="min-w-[80px] max-w-[80px] h-[110px] overflow-hidden rounded-xl border-2 border-main-black">
          <LazyLoadImage>
            <img src={imagen} alt="" />
          </LazyLoadImage>
        </div>
        <div className="info w-fit flex flex-col gap-1 text-main-black">
          <h3 className="text-sm font-bold md:text-base">{titulo}</h3>
          {children}
        </div>
      </motion.div>
    </Link>
  );
};

export default CardBusqueda;
