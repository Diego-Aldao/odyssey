import React from "react";
import { motion } from "framer-motion";

type Props = {
  imagenUrl?: string;
  tituloAside: string;
  children: JSX.Element;
};

const AsideDetalle: React.FC<Props> = ({
  imagenUrl,
  tituloAside,
  children,
}) => {
  return (
    <aside className="hidden md:flex flex-col gap-10 z-20 relative col-start-1 w-full lg:mt-10">
      <motion.div
        initial={{ y: 20, x: 20, opacity: 0 }}
        animate={{ y: 0, x: 0, opacity: 1 }}
        transition={{ duration: 0.3, ease: [0.43, 0.13, 0.23, 0.96] }}
        className="border-2 rounded-xl overflow-hidden border-main-black w-full"
      >
        <img src={imagenUrl} alt="poster del anime" />
      </motion.div>
      <div className="info">
        <div className="border-b-[3px] border-main-black w-[calc(100%_+_14px)] lg:w-[calc(100%_+_18px)]">
          <motion.p
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: [0.43, 0.13, 0.23, 0.96] }}
            className="item-skew-izquierda after:rounded-b-none after:skew-x-[-331deg] relative  capitalize text-lg inline-block text-main-color-background bg-main-black px-2 rounded-t-md rounded-tr-[10px]"
          >
            <motion.span
              className="relative block"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, ease: [0.43, 0.13, 0.23, 0.96] }}
            >
              {tituloAside}
            </motion.span>
          </motion.p>
        </div>
        {children}
      </div>
    </aside>
  );
};

export default AsideDetalle;
