import { motion } from "framer-motion";
import { transition, varianteCards } from "../../../VariantesFramerMotion";
type Props = {
  children: JSX.Element;
  clases: string;
};

const MotionListItem = ({ children, clases }: Props) => {
  return (
    <motion.li
      variants={varianteCards}
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true, margin: "-70px" }}
      transition={transition}
      className={clases}
    >
      {children}
    </motion.li>
  );
};

export default MotionListItem;
