import { Icon } from "@iconify/react";
import IconoHeader from "../../Layout/IconoHeader";
import { useNavigate } from "react-router-dom";
import imagenNav from "../../../assets/imgNavMobile.png";
import { motion } from "framer-motion";
import { transition, varianteNavMobile } from "../../../VariantesFramerMotion";
import BarraBusqueda from "../../Generales/BarraBusqueda";
import LinkNavMobile from "./LinkNavMobile";
import React from "react";

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
    destino: "/tops",
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
      className="fixed z-20 top-0 right-0 w-full h-full bg-main-black border-[1px] border-main-black"
    >
      <div
        className={`w-full h-full xs:border-4 xs:p-3 xs:rounded-xl bg-main-color-background xs:border-main-black  `}
      >
        <header className="pl-4 flex xs:rounded-t-xl bg-main-black h-14 items-center justify-between">
          <div className="logo text-main-color-background w-full">
            <IconoHeader />
          </div>

          <motion.div
            variants={varianteNavMobile}
            initial="initialMenu"
            animate="animateMenu"
            transition={{ transition, delay: 0.1 }}
            onClick={handleVisibility}
            className="h-full before:-left-[20px] before:bg-main-color-background after:hidden flex items-center item-skew-x bg-main-color-background z-[2] relative px-4"
          >
            <motion.span
              variants={varianteNavMobile}
              initial="initialMenuIcon"
              animate="animateMenuIcon"
              transition={{ delay: 0.3, transition, duration: 0.1 }}
            >
              <Icon icon="jam:close" className="h-12 w-12 text-main-black" />
            </motion.span>
          </motion.div>
        </header>
        <div className="contenido relative flex flex-col items-center gap-10 py-10 px-4 bg-main-black h-[calc(100%_-_112px)]">
          <div className="absolute bottom-0 -right-0 h-[45vw] max-h-[300px] overflow-hidden">
            <img src={imagenNav} alt="" />
          </div>
          <BarraBusqueda />
          <ul className="w-full flex flex-col gap-10 items-start">
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
        <footer className="h-14 xs:rounded-b-xl bg-main-black flex items-center justify-center">
          <p className="capitalize text-sm">
            odyssey: comunidad anime &copy; 2023
          </p>
        </footer>
      </div>
    </motion.div>
  );
};

export default NavMobile;
