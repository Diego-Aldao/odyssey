import { Swiper } from "swiper/react";
import { FreeMode } from "swiper/modules";
import { motion } from "framer-motion";
import { transition } from "../../../VariantesFramerMotion";

type Props = {
  children: JSX.Element;
  noBackground?: boolean;
};

const SubSectionSwiper = ({ children, noBackground }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50, y: 50 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      exit={{ opacity: 0, x: 50, y: 50 }}
      transition={{ transition }}
      viewport={{ once: true }}
      className="w-full flex"
    >
      <Swiper
        spaceBetween={7}
        slidesPerView={noBackground ? 1 : 2}
        modules={[FreeMode]}
        freeMode={true}
        lazyPreloadPrevNext={1}
        breakpoints={{
          580: {
            slidesPerView: noBackground ? 2 : 3.2,
            spaceBetween: noBackground ? 20 : 10,
          },
          768: {
            slidesPerView: noBackground ? 2.2 : 4.2,
          },
          1024: {
            slidesPerView: noBackground ? 3.2 : 5.2,
            spaceBetween: 20,
          },
        }}
      >
        {children}
      </Swiper>
    </motion.div>
  );
};

export default SubSectionSwiper;
