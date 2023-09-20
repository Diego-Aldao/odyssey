import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "framer-motion";
import {
  transition,
  varianteCards,
} from "../../../../../VariantesFramerMotion";

type Props = {
  id: number;
  titulo: string;
  imagen: string;
  tipo: string;
  posicion: number;
  score?: number;
  sideInfo?: string | null;
  favoritos: number;
  children: JSX.Element;
};

const CardTable: React.FC<Props> = ({
  id,
  titulo,
  imagen,
  tipo,
  posicion,
  score,
  favoritos,
  children,
  sideInfo,
}) => {
  const posicionReal = posicion + 1;

  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate(`/detalle/${tipo}/${id}`);
  };
  return (
    <motion.tr
      initial="initial"
      whileInView="whileInView"
      variants={varianteCards}
      viewport={{ once: true, margin: "-100px" }}
      transition={transition}
      className="h-[120px] max-w-[50px] border-2 border-main-black cursor-pointer bg-main-color-background"
      onClick={handleNavigation}
    >
      <td className="hidden md:table-cell  border-l-2 border-main-black">
        <span className="flex items-center justify-center h-full text-5xl font-bold">
          {posicionReal}
        </span>
      </td>
      <td>
        <div className="ranking w-full md:hidden border-t-8 border-main-black mb-5 overflow-hidden">
          <span className="item-skew-izquierda z-[1] after:rounded-t-none after:-right-[15px] relative bg-main-black text-main-color-background px-5 py-1 text-xl font-bold rounded-b-xl inline-block">
            {posicionReal}
          </span>
        </div>
        <div className="flex gap-2">
          <div className="imagen w-1/2 rounded-xl overflow-hidden border-2 border-main-black max-h-[130px] max-w-[90px]">
            <img
              src={imagen}
              alt="imagen de portada de anime"
              className="object-fill"
            />
          </div>
          <div className="info flex flex-col gap-2 w-full">
            <h3 className="text-sm font-bold xs:text-base lg:text-xl">
              {titulo}
            </h3>
            {children}
          </div>
        </div>
      </td>
      <td className="hidden md:table-cell">
        <p
          className={`flex gap-1 text-lg font-semibold lg:text-xl items-center ${
            score ? "justify-start" : "justify-center"
          }`}
        >
          {score ? (
            <>
              <Icon icon="ph:star-bold" />
              <span>{score}</span>
            </>
          ) : (
            <span className="text-base">{sideInfo}</span>
          )}
        </p>
      </td>
      <td className="hidden md:table-cell">
        <span className="flex items-center justify-center h-full font-semibold lg:text-lg">
          {favoritos.toLocaleString()}
        </span>
      </td>
    </motion.tr>
  );
};

export default CardTable;
