import { motion } from "framer-motion";
import {
  transition,
  variantesHeaderDetalle,
} from "../../VariantesFramerMotion";
type Props = {
  titulo: string;
  children: JSX.Element;
};

const HeaderDetalle = ({ titulo, children }: Props) => {
  return (
    <header className="md:h-auto text-center h-[500px] flex flex-col justify-end mb-10">
      <motion.h1
        variants={variantesHeaderDetalle}
        initial="initial"
        animate="animate"
        transition={transition}
        className="text-[42px] leading-10 uppercase font-bold font-chivo text-center md:text-left xs:text-5xl lg:text-6xl xl:text-7xl text-main-color-background drop-shadow-[0px_0px_8px_#000000] mb-1"
      >
        {titulo}
      </motion.h1>
      {children}
    </header>
  );
};

export default HeaderDetalle;
