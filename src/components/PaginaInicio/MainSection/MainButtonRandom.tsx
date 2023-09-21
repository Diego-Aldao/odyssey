import { Icon } from "@iconify/react/dist/iconify.js";
import imagenDescubrir from "../../../assets/imgRandomAnime.png";
import { motion } from "framer-motion";
import {
  transition,
  varianteMainButtonRandom,
} from "../../../VariantesFramerMotion";
import { useNavigate } from "react-router-dom";

const MainButtonRandom = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/detalle/anime/40748");
  };

  return (
    <div className="w-full flex xs:hidden lg:flex self-end md:col-start-1 md:row-start-2 flex-col items-center">
      <motion.div
        initial="initial"
        whileInView="whileInView"
        variants={varianteMainButtonRandom}
        viewport={{ once: true }}
        transition={transition}
        className="max-w-[350px]"
      >
        <img src={imagenDescubrir} alt="" />
      </motion.div>
      <motion.p
        initial="initialP"
        whileInView="whileInViewP"
        variants={varianteMainButtonRandom}
        viewport={{ once: true }}
        transition={transition}
        className="border-b-2 border-r-2 -left-4 border-main-black font-bold italic capitalize pl-2 py-1 mt-5  xl:text-xl  rounded-br-lg item-skew-izquierda relative bg-main-color-background z-[1] after:bg-main-color-background after:border-main-black after:border-b-2 after:border-r-2 after:rounded-bl-none after:top-[0px] after:h-[34px] after:xl:h-[38px] cursor-pointer"
      >
        <motion.span
          initial="initial"
          whileInView="whileInView"
          variants={varianteMainButtonRandom}
          viewport={{ once: true }}
          transition={transition}
          className="flex gap-3 items-center justify-start"
          onClick={handleClick}
        >
          descubrir anime <Icon icon="cil:arrow-right" className="w-5 h-5" />
        </motion.span>
      </motion.p>
    </div>
  );
};
export default MainButtonRandom;
