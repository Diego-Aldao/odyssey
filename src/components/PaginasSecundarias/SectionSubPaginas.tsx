import { motion } from "framer-motion";
import {
  transition,
  varianteSectionSubPaginas,
} from "../../VariantesFramerMotion";

type Props = {
  btnVisible: boolean;
  setBtnVisible: React.Dispatch<React.SetStateAction<boolean>>;
  titulo: string | JSX.Element;
  filtrosPrincipales: JSX.Element;
  filtrosSecundarios?: JSX.Element;
  children: JSX.Element;
  gridTable?: boolean;
  imagenHeader: JSX.Element;
};

const SectionSubPaginas: React.FC<Props> = ({
  filtrosPrincipales,
  filtrosSecundarios,
  setBtnVisible,
  btnVisible,
  titulo,
  children,
  imagenHeader,
}) => {
  const handleClick = () => {
    setBtnVisible(false);
  };

  return (
    <motion.section
      initial="initial"
      animate="animate"
      variants={varianteSectionSubPaginas}
      transition={transition}
      className={`${
        btnVisible ? "" : "pb-10 lg:pb-16"
      } bg-main-color-background px-4 md:px-6 lg:px-10 pt-10 lg:pt-16 overflow-hidden rounded-b-none`}
    >
      <header className="mb-10 md:mb-0 relative md:min-h-[280px] lg:min-h-[400px]">
        <h2 className="titulo_pagina_secundaria">{titulo}</h2>
        {imagenHeader}
      </header>
      {filtrosPrincipales}
      {filtrosSecundarios}
      {children}
      <button
        onClick={handleClick}
        className={`${
          btnVisible ? "flex" : "hidden"
        } btn_ver_mas_pagina_secundaria`}
      >
        ver mas
      </button>
    </motion.section>
  );
};

export default SectionSubPaginas;
