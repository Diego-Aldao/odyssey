import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  transition,
  variantesSubSectionHeader,
} from "../../../VariantesFramerMotion";

type Props = {
  titulo: string;
  nombreInteraccion: string;
  nombreIcono?: string;
  noBackground?: boolean;
  destino: string;
};

const SubSectionHeader: React.FC<Props> = ({
  titulo,
  nombreInteraccion,
  nombreIcono,
  noBackground,
  destino,
}) => {
  return (
    <header
      className={`w-full h-14 lg:h-[70px] ${
        noBackground ? "bg-main-black text-main-color-background" : ""
      }  pl-4 md:pl-6 lg:pl-10 rounded-xl rounded-b-none flex items-center justify-between`}
    >
      <h3 className="uppercase font-semibold font-chivo text-sm xs:text-lg sm:text-xl md:text-2xl lg:text-4xl flex gap-2 sm:gap-4 lg:gap-6 items-center">
        {titulo}
        {nombreIcono && (
          <span className="">
            <Icon icon={nombreIcono} className="h-[20px] xs:h-full " />
          </span>
        )}
      </h3>
      <Link
        to={`/${destino}`}
        className="w-1/4 min-w-[90px] md:w-2/6 max-w-xs h-full"
      >
        <motion.div
          initial="initialContenedor"
          whileInView="whileInViewContenedor"
          variants={variantesSubSectionHeader}
          viewport={{ once: true }}
          transition={transition}
          className="sub_header_interaction"
        >
          <motion.p
            initial="initialP"
            whileInView="whileInViewP"
            variants={variantesSubSectionHeader}
            transition={transition}
            viewport={{ once: true }}
          >
            <span className="flex md:hidden">ver mas</span>
            <span className="hidden md:flex">{nombreInteraccion}</span>
          </motion.p>
        </motion.div>
      </Link>
    </header>
  );
};

export default SubSectionHeader;
