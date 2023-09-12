import { motion } from "framer-motion";

type Props = {
  textoLineaUno: string;
  textoLineaDos: string;
};

const TituloHeaderMotion = ({ textoLineaUno, textoLineaDos }: Props) => {
  return (
    <>
      <p className="w-full overflow-hidden">
        <motion.span
          className="block relative"
          animate={{ y: 0, opacity: 1 }}
          initial={{ y: 50, opacity: 0 }}
          transition={{
            delay: 0.1,
            duration: 0.3,
            ease: [0.43, 0.13, 0.23, 0.96],
          }}
        >
          {textoLineaUno}{" "}
        </motion.span>
      </p>
      <p className="w-full overflow-hidden">
        <motion.span
          className="block relative"
          animate={{ y: 0, opacity: 1 }}
          initial={{ y: 50, opacity: 0 }}
          transition={{
            delay: 0.15,
            duration: 0.3,
            ease: [0.43, 0.13, 0.23, 0.96],
          }}
        >
          {textoLineaDos}
        </motion.span>
      </p>
    </>
  );
};

export default TituloHeaderMotion;
