import { motion } from "framer-motion";
import { transition, varianteMainTitulo } from "../../../VariantesFramerMotion";
import { Link } from "react-router-dom";

const MainTitulo = () => {
  return (
    <motion.div
      variants={varianteMainTitulo}
      initial="initialContenedor"
      whileInView="whileInViewContenedor"
      className="flex flex-col w-full gap-4 xl:gap-6 xs:col-span-1 xs:min-h-[320px] md:col-span-2 md:mx-0 max-w-[500px] mx-auto md:max-w-[650px] z-[2] relative md:col-start-1"
    >
      <h1 className="main_titulo">
        <p className="overflow-hidden">
          <motion.span
            variants={varianteMainTitulo}
            initial="initialTitulo"
            whileInView="whileInViewTitulo"
            transition={{
              delay: 0.2,
              transition,
            }}
            className="block relative"
          >
            odyssey:{" "}
          </motion.span>
        </p>
        <p className="overflow-hidden">
          <motion.span
            variants={varianteMainTitulo}
            initial="initialTitulo"
            whileInView="whileInViewTitulo"
            transition={{
              delay: 0.25,
              transition,
            }}
            className="block relative"
          >
            comunidad{" "}
          </motion.span>
        </p>
        <p className="overflow-hidden">
          <motion.span
            variants={varianteMainTitulo}
            initial="initialTitulo"
            whileInView="whileInViewTitulo"
            transition={{
              delay: 0.3,
              transition,
            }}
            className="block relative"
          >
            anime
          </motion.span>
        </p>
      </h1>
      <motion.p
        variants={varianteMainTitulo}
        initial="initialTitulo"
        whileInView="whileInViewTitulo"
        transition={transition}
        className="text-center xs:text-left text-sm italic font-semibold md:text-left md:text-base lg:text-xl flex flex-col text-main-black"
      >
        Comienza a rastrear tu anime hoy.
      </motion.p>

      <motion.p
        variants={varianteMainTitulo}
        initial="initialButton"
        whileInView="whileInViewButton"
        transition={{ transition, delay: 0 }}
        className="hidden xs:flex items-center justify-center item-skew-izquierda relative bg-main-black text-main-color-background w-fit -left-4 px-10 pl-4 capitalize py-1 text-lg md:-left-6 md:pl-6 md:text-xl xl:text-2xl md:py-2 md:px-16 lg:-left-10 lg:pl-10 lg:px-20"
      >
        <Link to="/temporadas/now">
          <motion.span
            className="relative block"
            initial="initialButtonText"
            whileInView="whileInViewButtonText"
            variants={varianteMainTitulo}
            transition={transition}
          >
            explorar
          </motion.span>
        </Link>
      </motion.p>
    </motion.div>
  );
};

export default MainTitulo;
