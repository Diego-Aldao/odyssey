import { transition, varianteMainImagen } from "../../../VariantesFramerMotion";
import mainAnime from "../../../assets/imgPrincipal.png";
import { motion } from "framer-motion";

const MainImagen = () => {
  return (
    <motion.div
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true }}
      transition={transition}
      variants={varianteMainImagen}
      className="hidden xs:block xs:col-start-2 xs:row-start-1 xs:col-span-2 h-full xs:-top-6 xs:right-14 md:-top-16 md:-right-2 md:max-w-[550px] lg:-top-20 xl:max-h-[750px] xl:-right-10 xs:w-[120%] relative xs:max-h-[350px] md:max-h-[500px] lg:max-h-[620px] lg:max-w-[800px] lg:-right-20 md:h-[55vw] md:absolute"
    >
      <img src={mainAnime} alt="" className="object-contain" />
    </motion.div>
  );
};

export default MainImagen;
