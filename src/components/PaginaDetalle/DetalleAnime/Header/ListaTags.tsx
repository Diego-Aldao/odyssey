import React from "react";
import { InfoTags } from "../../../../types";
import { motion } from "framer-motion";
import {
  transition,
  variantesListaTags,
} from "../../../../VariantesFramerMotion";

type Props = {
  mainInfo: InfoTags[];
};

const ListaTags: React.FC<Props> = ({ mainInfo }) => {
  const infoUsable = mainInfo.filter(
    (item) => item.data && item.data.length >= 1 && !item.data.includes("null")
  );

  return (
    <ul className="flex justify-center gap-5 md:justify-start flex-wrap max-w-[550px] font-medium">
      {infoUsable.map((item) => (
        <React.Fragment key={item.id}>
          <motion.li
            initial="initialLI"
            animate="animateLI"
            variants={variantesListaTags}
            transition={transition}
            className={`bg-main-black px-4 text-xs py-[6px] rounded-sm h-fit text-main-color-background ${
              item.primerItem ? "flex items-center gap-2 lg:hidden" : ""
            }
            ${item.ocultoMovile ? "hidden lg:inline-block" : ""}
            `}
          >
            <motion.p
              initial="initialP"
              animate="animateP"
              variants={variantesListaTags}
              transition={transition}
              className="capitalize flex"
            >
              <span>{item.nombre}:</span>
              <span className="ml-2">
                {item.esRankeable && "#"}
                {item.icono}
              </span>
              <span>{item.data?.split(" ")}</span>
            </motion.p>
          </motion.li>
        </React.Fragment>
      ))}
    </ul>
  );
};

export default ListaTags;
