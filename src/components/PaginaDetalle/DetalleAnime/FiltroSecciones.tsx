import React from "react";
import { motion } from "framer-motion";
import {
  variantesNavegaciones,
  transition,
  variantesNavegacionesLinea,
} from "../../../VariantesFramerMotion";
import { useNavigate, useParams } from "react-router-dom";
type Props = {
  listaFiltros: string[];
  setVisibleContent: React.Dispatch<React.SetStateAction<string>>;
  visibleContent: string;
};

const FiltroSecciones = ({
  listaFiltros,
  setVisibleContent,
  visibleContent,
}: Props) => {
  const navigate = useNavigate();
  const { id } = useParams();

  const handleClick = (filtro: string) => {
    setVisibleContent(filtro);
    if (!id) return;
    navigate(`/detalle/anime/${id}/${filtro === "general" ? "" : filtro}`);
  };

  return (
    <ul className="hidden lg:flex col-span-4 row-start-1 col-start-1 z-20 bg-main-black text-main-color-background items-center justify-center gap-3 xl:gap-5 w-fit mx-auto px-5 py-3 item-skew-x relative">
      {listaFiltros.map((filtro) => (
        <motion.li
          variants={variantesNavegaciones}
          whileHover="whileHover"
          initial="initial"
          animate="animate"
          transition={{
            transition,
            x: { duration: 0.1 },
            backgroundColor: { duration: 0.1 },
            color: { duration: 0.1 },
          }}
          key={filtro}
          onClick={() => {
            handleClick(filtro);
          }}
          className="capitalize cursor-pointer"
        >
          {filtro}
          <div className="animacion  w-full h-[2px] flex gap-1 lg:gap-2">
            <span
              className={`w-[7px] lg:w-[10px] h-full bg-main-color-background ${
                visibleContent === filtro ? "block" : "hidden"
              }`}
            ></span>
            <motion.div
              variants={variantesNavegacionesLinea}
              transition={transition}
              className="linea bg-main-color-background w-full h-full relative right-0"
            ></motion.div>
          </div>
        </motion.li>
      ))}
    </ul>
  );
};

export default FiltroSecciones;
