import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { transition, variantesIconoHeader } from "../../VariantesFramerMotion";

type Props = {
  clasesTexto?: string;
  clasesIcono?: string;
};

const IconoHeader: React.FC<Props> = ({ clasesTexto, clasesIcono }) => {
  return (
    <Link to="/">
      <div
        className={`h-full flex items-center ${
          clasesTexto
            ? clasesTexto
            : "w-3/4 gap-1 lg:gap-2 md:justify-center md:w-[75px] lg:w-fit md:mr-3 text-2xl md:text-lg lg:text-2xl xl:text-3xl"
        }`}
      >
        <span className="font-semibold md:hidden lg:inline-block text-main-black">
          Odyssey
        </span>
        <motion.span
          whileInView="animate"
          whileHover="animate"
          viewport={{ once: true, amount: 1 }}
          variants={variantesIconoHeader}
          transition={{ duration: 0.1, repeat: 2, transition }}
        >
          <Icon
            icon="game-icons:mine-explosion"
            className={
              clasesIcono
                ? clasesIcono
                : " w-6 h-6 md:w-9 md:h-9 text-main-black"
            }
          />
        </motion.span>
      </div>
    </Link>
  );
};

export default IconoHeader;
