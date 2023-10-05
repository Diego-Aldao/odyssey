import { motion } from "framer-motion";
import { VarianteSections, transition } from "../../../VariantesFramerMotion";

type Props = {
  children: JSX.Element;
  clases: string;
};

const MotionUnorderedList = ({ children, clases }: Props) => {
  return (
    <motion.ul
      className={`text-main-black ${clases}`}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={transition}
      variants={VarianteSections}
    >
      {children}
    </motion.ul>
  );
};

export default MotionUnorderedList;
