import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { useContext } from "react";
import DarkModeContext from "../../context/DarkModeContext";

type Props = {
  clasesCustom?: string;
};

const BotonDarkMode = ({ clasesCustom }: Props) => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  return (
    <div
      className={`w-[75px] lg:w-[90px] h-[35px] bg-main-black rounded-full p-[5px] flex items-center justify-between relative cursor-pointer ${
        clasesCustom || ""
      }`}
      onClick={() => {
        if (toggleDarkMode) toggleDarkMode();
      }}
    >
      <motion.div
        animate={{ left: darkMode ? "calc(100% - 31px)" : "4px" }}
        transition={{
          duration: 0.2,
          type: "spring",

          bounce: 0.3,
        }}
        className="contenedor-icono rounded-full h-[27px] w-[27px] border-[1px] border-main-black bg-main-color-background absolute top-[4px] left-[4px]"
      ></motion.div>
      {darkMode && (
        <Icon
          icon="line-md:moon-loop"
          className="h-full w-[27px] text-main-color-background mr-auto"
        />
      )}
      {!darkMode && (
        <Icon
          icon="line-md:sunny-outline-loop"
          className="h-full w-[27px] text-main-color-background ml-auto"
        />
      )}
    </div>
  );
};

export default BotonDarkMode;
