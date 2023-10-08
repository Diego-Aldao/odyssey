import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { Entry } from "../../../types";
import { motion } from "framer-motion";
import { varianteCards, transition } from "../../../VariantesFramerMotion";
import LazyLoadImage from "../../Generales/LazyLoadImage";

type Props = {
  id: number;
  titulo: string;
  imagen?: string;
  episodios: Entry[];
};
const CardEpisodios = ({ id, titulo, imagen, episodios }: Props) => {
  return (
    <Link to={`/detalle/anime/${id}/episodios`}>
      <motion.div
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true, margin: "-100px" }}
        variants={varianteCards}
        transition={transition}
        className="flex h-full flex-col gap-4 z-[2]"
      >
        <h3 className="text-center min-h-[45px] max-h-[45px] flex items-center justify-center font-medium text-main-black">
          <span className="line-clamp-2 text-center">{titulo}</span>
        </h3>
        <div className="h-full rounded-xl border-2 border-main-black overflow-hidden">
          <LazyLoadImage>
            <img src={imagen} alt="" />
          </LazyLoadImage>
        </div>
        <ul className="flex flex-col gap-4">
          {episodios.map((episodio) => (
            <li
              key={episodio.mal_id}
              className=" flex items-center justify-start"
            >
              <p className="px-1 rounded-sm bg-main-black item-skew-izquierda z-[1] relative text-main-color-background text-sm md:text-base py-[2px] flex gap-2 items-center w-[80%]">
                {episodio.title}
                {episodio.premium && <Icon icon="ph:crown-bold" />}
              </p>
            </li>
          ))}
        </ul>
      </motion.div>
    </Link>
  );
};

export default CardEpisodios;
