import { motion } from "framer-motion";
import imagenLoading from "../../assets/ImagenLoading.png";
import { transition } from "../../VariantesFramerMotion";

const variants = {
  hidden: {
    opacity: 0,
    x: -50,
    y: 50,
    transition: {
      duration: 0.1,
      ease: [0.43, 0.13, 0.23, 0.96],
    },
  },
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.3,
      ease: [0.43, 0.13, 0.23, 0.96],
      delay: 0.2,
    },
  },
};

type Props = {
  customClases?: string;
};
const Loading = ({ customClases }: Props) => {
  return (
    <motion.div
      key="loading"
      initial="hidden"
      animate="show"
      exit="hidden"
      variants={variants}
      className={`loading w-full col-span-full h-screen relative flex flex-col-reverse xs:flex-row  gap-2 items-center justify-center py-2  md:px-2 ${
        customClases || ""
      }`}
    >
      <motion.p
        initial={{ x: -200, opacity: 1 }}
        animate={{ x: 0, opacity: 1 }}
        transition={transition}
        className="md:text-lg lg:text-xl text-sm xs:text-base font-bold uppercase"
      >
        cargando...
      </motion.p>
      <motion.div
        initial={{ x: -100, opacity: 1 }}
        animate={{ x: 0, opacity: 1 }}
        transition={transition}
        className="max-w-[40vw] xs:max-w-[30vw] md:max-w-[30vw] h-fit lg:max-w-[300px] overflow-hidden"
      >
        <img src={imagenLoading} alt="" className="" />
      </motion.div>
    </motion.div>
  );
};

export default Loading;
