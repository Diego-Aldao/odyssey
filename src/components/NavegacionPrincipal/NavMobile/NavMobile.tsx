import { Icon } from "@iconify/react";
import IconoHeader from "../../Layout/IconoHeader";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { transition, varianteNavMobile } from "../../../VariantesFramerMotion";
import BarraBusqueda from "../../Generales/BarraBusqueda";
import LinkNavMobile from "./LinkNavMobile";
import React from "react";
import BotonDarkMode from "../../Generales/BotonDarkMode";

const listadoNav = [
  {
    id: 1,
    nombre: "inicio",
    destino: "/",
  },
  {
    id: 2,
    nombre: "ultimos episodios",
    destino: "/episodios",
  },
  {
    id: 3,
    nombre: "anime de temporada",
    destino: "/temporadas/now",
  },
  {
    id: 4,
    nombre: "tops",
    destino: "/tops/anime",
  },
  {
    id: 5,
    nombre: "trailers",
    destino: "/trailers",
  },
];

type Props = {
  handleVisibility: () => void;
  setNavVisibility: React.Dispatch<React.SetStateAction<boolean>>;
};

const NavMobile = ({ handleVisibility, setNavVisibility }: Props) => {
  const navigate = useNavigate();

  const handleDestino = (destino: string) => {
    setNavVisibility((prevState) => !prevState);
    navigate(destino);
  };

  return (
    <motion.div
      variants={varianteNavMobile}
      initial="initialContenedor"
      animate="animateContenedor"
      exit="exitContenedor"
      transition={transition}
      className="fixed z-20 top-0 right-0 w-full h-full bg-main-black p-1 xs:p-2"
    >
      <div className={`w-full h-full rounded-xl bg-main-color-background`}>
        <header className="pl-4 flex xs:rounded-t-xl h-14 items-center justify-between">
          <IconoHeader />

          <motion.div
            variants={varianteNavMobile}
            initial="initialMenu"
            animate="animateMenu"
            transition={{ transition, delay: 0.1 }}
            onClick={handleVisibility}
            className="h-full before:-left-[20px] after:hidden flex items-center item-skew-x bg-main-black z-[2] relative px-4"
          >
            <motion.span
              variants={varianteNavMobile}
              initial="initialMenuIcon"
              animate="animateMenuIcon"
              transition={{ delay: 0.3, transition, duration: 0.1 }}
            >
              <Icon
                icon="jam:close"
                className="h-12 w-12 text-main-color-background"
              />
            </motion.span>
          </motion.div>
        </header>
        <div className="contenido flex flex-col items-center gap-4 pt-5 px-4 h-[calc(100%_-_112px)]">
          <BotonDarkMode clasesCustom="min-width-[80px] ml-auto" />
          <BarraBusqueda barraMobile={true} />

          <ul className="w-full flex flex-col gap-10 items-start mt-4">
            {listadoNav.map(({ id, destino, nombre }) => (
              <React.Fragment key={id}>
                <LinkNavMobile
                  id={id}
                  destino={destino}
                  nombre={nombre}
                  handleDestino={handleDestino}
                />
              </React.Fragment>
            ))}
          </ul>
        </div>
        <footer className="h-14 xs:rounded-b-xl flex items-end pb-1 justify-center">
          <p className="capitalize text-sm text-main-black">
            odyssey: comunidad anime &copy; 2023
          </p>
        </footer>
      </div>
    </motion.div>
  );
};

export default NavMobile;
