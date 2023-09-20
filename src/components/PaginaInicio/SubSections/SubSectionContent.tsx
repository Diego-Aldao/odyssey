import "swiper/css";
import "swiper/css/free-mode";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  transition,
  variantesSubSectionContent,
} from "../../../VariantesFramerMotion";

type Props = {
  children: JSX.Element;
  subtitulo?: string;
  noBackground?: boolean;
  destino?: string;
};

const SubSectionContent: React.FC<Props> = ({
  children,
  subtitulo,
  noBackground,
  destino,
}) => {
  return (
    <div
      className={`${
        noBackground ? "bg-main-black" : ""
      } px-4 md:px-6 lg:px-10 py-10 flex flex-col gap-10 overflow-hidden`}
    >
      {destino && (
        <Link to={destino} className="w-fit">
          <motion.ul
            initial="initial"
            whileInView="whileInView"
            variants={variantesSubSectionContent}
            transition={transition}
            viewport={{ once: true }}
            className="item-skew-izquierda z-[1] relative px-4 md:px-6 lg:px-10 -left-4 md:-left-6 lg:-left-10 py-4 bg-main-black flex items-center capitalize rounded-br-xl "
          >
            <li className="text-main-color-background text-sm whitespace-nowrap md:text-base relative">
              {subtitulo}
            </li>
          </motion.ul>
        </Link>
      )}
      {children}
    </div>
  );
};

export default SubSectionContent;
