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
            : "w-3/4 gap-1 lg:gap-2 md:w-2/12 lg:w-fit lg:pr-3 text-2xl md:text-base lg:text-2xl xl:text-3xl"
        }`}
      >
        <span className="font-semibold">Odyssey</span>
        <motion.span
          animate="animate"
          variants={variantesIconoHeader}
          transition={{ duration: 0.1, repeat: 2, transition }}
        >
          <Icon
            icon="game-icons:mine-explosion"
            className={clasesIcono ? clasesIcono : " w-6 h-6 lg:w-8 lg:h-8"}
          />
        </motion.span>
      </div>
    </Link>
  );
};

export default IconoHeader;
