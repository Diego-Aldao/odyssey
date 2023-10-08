import React from "react";
import { Filtro } from "../../types";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { transition, varianteFiltros } from "../../VariantesFramerMotion";

type Props = {
  filtros: Filtro[];
  pathInicial: string;
  isFilterSecondary?: boolean;
  setCurrentFiltro?: React.Dispatch<React.SetStateAction<string | undefined>>;
};

const Filtros: React.FC<Props> = ({
  filtros,
  pathInicial,
  isFilterSecondary,
  setCurrentFiltro,
}) => {
  const location = useLocation();
  const hideFilter =
    location.pathname.includes("personajes") ||
    location.pathname.includes("personas");

  return (
    <>
      {hideFilter && isFilterSecondary ? (
        <></>
      ) : (
        <motion.ul
          initial="initialContenedor"
          animate="animateContenedor"
          transition={transition}
          variants={varianteFiltros}
          className="item-skew-izquierda z-[1] relative px-5 md:px-7 lg:px-11 -left-5 md:-left-6 lg:-left-10 py-3 bg-main-black flex items-center gap-2 xs:gap-4 capitalize max-w-fit my-5 lg:mt-10"
        >
          {filtros.map((filtro) => (
            <React.Fragment key={filtro.id}>
              {isFilterSecondary && setCurrentFiltro ? (
                <motion.li
                  initial="initialItem"
                  animate="animateItem"
                  transition={transition}
                  variants={varianteFiltros}
                  onClick={() => {
                    setCurrentFiltro(filtro.query);
                  }}
                  className="capitalize text-main-color-background font-medium text-[10px] xs:text-xs md:text-sm lg:text-base"
                >
                  {filtro.nombre}
                </motion.li>
              ) : (
                <motion.li
                  initial="initialItem"
                  animate="animateItem"
                  transition={transition}
                  variants={varianteFiltros}
                  className="capitalize text-main-color-background font-medium text-[10px] xs:text-xs md:text-sm lg:text-base"
                >
                  <Link to={`/${pathInicial}/${filtro.query || ""}`}>
                    {filtro.nombre}
                  </Link>
                </motion.li>
              )}
            </React.Fragment>
          ))}
        </motion.ul>
      )}
    </>
  );
};

export default Filtros;
