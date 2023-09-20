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
  return (
    <ul className="flex justify-center gap-5 md:justify-start flex-wrap max-w-[550px]">
      {mainInfo.map((item) => (
        <>
          {item.data !== null && (
            <motion.li
              initial="initialLI"
              animate="animateLI"
              variants={variantesListaTags}
              transition={transition}
              key={item.id}
              className={`bg-main-black px-4 text-xs py-[6px] rounded-sm h-fit text-main-color-background ${
                item.primerItem ? "flex items-center gap-2 lg:hidden" : ""
              }
            ${item.ocultoMovile ? "hidden lg:inline-block" : ""}
            `}
            >
              {Array.isArray(item.data) ? (
                <>
                  {item.data.map((obj) => (
                    <motion.p
                      initial="initialP"
                      animate="animateP"
                      variants={variantesListaTags}
                      transition={transition}
                      key={obj.mal_id}
                      className="capitalize flex gap-1"
                    >
                      <span>{item.nombre}:</span>
                      <span>{obj.name}</span>
                    </motion.p>
                  ))}
                </>
              ) : (
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
                  <span>{item.data}</span>
                </motion.p>
              )}
            </motion.li>
          )}
        </>
      ))}
    </ul>
  );
};

export default ListaTags;
