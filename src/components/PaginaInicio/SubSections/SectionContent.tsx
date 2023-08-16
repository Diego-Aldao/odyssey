import { Swiper } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";

type Props = {
  children: JSX.Element;
  subtitulo?: string;
  noBackground?: boolean;
};

const SubContent: React.FC<Props> = ({ children, subtitulo, noBackground }) => {
  return (
    <div
      className={`${
        noBackground ? "bg-main-black" : ""
      } px-4 md:px-6 lg:px-10 py-10 flex flex-wrap gap-10`}
    >
      {subtitulo && (
        <ul className="submenu-section pr-10 md:pr-14 lg:pr-20 relative px-4 md:px-6 lg:px-10 -left-4 md:-left-6 lg:-left-10 py-4 bg-main-black flex items-center gap-2 capitalize rounded-br-xl">
          <li className="text-main-color-background text-sm whitespace-nowrap md:text-base">
            {subtitulo}
          </li>
        </ul>
      )}
      <Swiper
        spaceBetween={7}
        slidesPerView={noBackground ? 1 : 2}
        modules={[FreeMode]}
        freeMode={true}
        breakpoints={{
          640: {
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
    </div>
  );
};

export default SubContent;
