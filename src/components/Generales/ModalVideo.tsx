import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { transition, varianteModalVideo } from "../../VariantesFramerMotion";

type Props = {
  modalVisibility: boolean;
  titulo: string;
  url: string;
  handleClick: () => void;
};

const ModalVideo = ({ titulo, url, modalVisibility, handleClick }: Props) => {
  return (
    <motion.div
      initial="initialContenedor"
      animate="animateContenedor"
      variants={varianteModalVideo}
      className={`${
        modalVisibility ? "fixed" : "hidden"
      } top-0 left-0 w-full h-screen flex items-center justify-center z-50 bg-[#0000008a] backdrop-blur-sm`}
    >
      <motion.div
        initial="initialButton"
        animate="animateButton"
        variants={varianteModalVideo}
        transition={transition}
        className="flex flex-col gap-2 xs:pt-0 rounded-lg w-full mx-4 bg-main-color-background max-w-[600px] h-[65vw] max-h-[400px] md:max-h-[600px] md:max-w-[800px] items-center xs:border-4 border-main-black"
      >
        <div className="header flex w-full items-center justify-center">
          <p className="text-sm md:text-lg bg-main-black item-skew-x relative text-main-color-background w-fit z-[1] py-1 capitalize hidden xs:flex ml-auto">
            {titulo} trailer
          </p>
          <div
            onClick={handleClick}
            className="bg-main-black text-main-color-background self-end justify-self-end ml-auto h-full flex items-center justify-center px-4 relative -right-1 rounded-bl-lg cursor-pointer"
          >
            <motion.div whileHover={{ scale: 1.2 }} transition={transition}>
              <Icon
                icon="streamline:interface-add-1-expand-cross-buttons-button-more-remove-plus-add"
                className="stroke-2 rotate-45 h-5 w-5"
              />
            </motion.div>
          </div>
        </div>
        <iframe
          className="w-full h-full p-1"
          src={url}
          title="YouTube video player"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </motion.div>
    </motion.div>
  );
};

export default ModalVideo;
