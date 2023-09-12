import { motion } from "framer-motion";

type Props = {
  children: JSX.Element;
};

const ImagenHeaderMotion = ({ children }: Props) => {
  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3, ease: [0.43, 0.13, 0.23, 0.96] }}
      className="absolute top-0 right-0 overflow-visible w-full"
    >
      {children}
    </motion.div>
  );
};

export default ImagenHeaderMotion;
