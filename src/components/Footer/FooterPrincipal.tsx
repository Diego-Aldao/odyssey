import { Icon } from "@iconify/react";
import IconoHeader from "../Layout/IconoHeader";
import downloadIos from "../../assets/iOS.png";
import downloadGoogle from "../../assets/googleplay.png";
import imagenFooter from "../../assets/mainFooterLeft.png";
import imagenFooter2 from "../../assets/mainFooterRight.png";
import { motion } from "framer-motion";
import {
  transition,
  varianteFooterPrincipal,
} from "../../VariantesFramerMotion";
import LazyLoadImage from "../Generales/LazyLoadImage";

const FooterPrincipal = () => {
  return (
    <footer className="footer_principal overflow-hidden bg-main-color-background px-4 pt-10 pb-2 flex flex-col gap-2 md:gap-4 rounded-b-xl footer-border relative items-center lg:pt-20 lg:gap-6">
      <motion.div
        initial="initialLeft"
        whileInView="whileInViewLeft"
        variants={varianteFooterPrincipal}
        viewport={{ amount: 0.7, once: true }}
        transition={transition}
        className="imagen-footer absolute top-10  h-[25vw] max-h-[250px] left-1 hidden lg:block w-[300px]"
      >
        <LazyLoadImage customClases="bg-transparent">
          <img src={imagenFooter} alt="imagen footer odyssey" />
        </LazyLoadImage>
      </motion.div>
      <motion.div
        initial="initialRight"
        whileInView="whileInViewRight"
        variants={varianteFooterPrincipal}
        viewport={{ amount: 0.7, once: true }}
        transition={transition}
        className="imagen-footer absolute top-10  h-[25vw] max-h-[250px] right-1 hidden lg:block w-[300px]"
      >
        <LazyLoadImage customClases="bg-transparent">
          <img src={imagenFooter2} alt="imagen footer odyssey" />
        </LazyLoadImage>
      </motion.div>
      <div className="logo flex flex-col gap-1 md:gap-2">
        <IconoHeader
          clasesTexto={
            "w-full text-4xl justify-center md:text-6xl lg:text-7xl gap-2"
          }
          clasesIcono={"h-[36px] md:h-12 lg:h-14 mt-2 md:mt-4 text-main-black"}
        />
        <p className="text-center text-main-black font-bold capitalize text-xs md:text-sm lg:text-base">
          comunidad anime
        </p>
      </div>
      <div className="interaccion flex flex-col gap-5  items-center md:flex-row md:justify-center md:gap-10 py-5 relative">
        <div className="redes flex flex-col items-center gap-2 md:flex-row">
          <p className="capitalize font-bold text-lg text-main-black lg:text-main-color-background-static lg:drop-shadow-[0px_0px_5px_#000] xl:drop-shadow-none xl:text-main-black">
            siguenos
          </p>
          <ul className="flex gap-2 text-2xl md:text-3xl text-main-black">
            <li>
              <Icon icon="mdi:instagram" />
            </li>
            <li>
              <Icon icon="mdi:twitter" />
            </li>
            <li>
              <Icon icon="mdi:facebook" />
            </li>
            <li>
              <Icon icon="mdi:pinterest" />
            </li>
          </ul>
        </div>
        <div className="app flex flex-col items-center gap-2 md:flex-row">
          <p className="capitalize font-bold text-lg text-main-black">
            descarga la app
          </p>
          <div className="w-[120px] h-[40px] md:w-[100px] md:h-[30px]">
            <LazyLoadImage customClases="rounded-md">
              <img
                src={downloadIos}
                className="object-contain"
                alt="imagen boton descarga ios"
              />
            </LazyLoadImage>
          </div>
          <div className="w-[120px] h-[40px] md:w-[100px] md:h-[30px]">
            <LazyLoadImage customClases="rounded-md">
              <img
                src={downloadGoogle}
                className="object-contain"
                alt="imagen boton descarga android"
              />
            </LazyLoadImage>
          </div>
        </div>
      </div>
      <p className="capitalize text-sm font-bold text-main-black">
        odyssey: comunidad anime &copy; 2023
      </p>
    </footer>
  );
};

export default FooterPrincipal;
