import React from "react";
import { Icon } from "@iconify/react";
import { Entry } from "../../../types";
import LazyLoadImage from "../../Generales/LazyLoadImage";

type PropsEpisodio = {
  info: Entry[];
};

type Props = {
  infoImagen: {
    imagen?: string;
    episodios?: Entry[];
    titulo: string;
  };
};

const Episodios: React.FC<PropsEpisodio> = ({ info }) => {
  return (
    <div className="bg-gradient-to-t from-main-black-static  z-[1] px-2 w-full flex flex-col justify-end gap-1 pt-5">
      {info.map((episodio: Entry) => (
        <p
          key={episodio.mal_id}
          className="text-main-color-background-static flex items-center gap-2 text-[10px] sm:text-[12px] lg:text-[14px]"
        >
          {episodio.title}
          {episodio.premium && <Icon icon="ph:crown-bold" />}
        </p>
      ))}
    </div>
  );
};

const CardImagen: React.FC<Props> = ({ infoImagen }) => {
  return (
    <article className="h-[70vw] xs:h-[45vw] md:h-[35vw] lg:h-[25vw] xl:h-[300px] rounded-lg border-2 border-main-black flex section_card_imagen rounded-tl-[60px] relative flex-col justify-end">
      <div className="w-full h-full rounded-lg overflow-hidden rounded-tl-[60px] absolute bottom-0 left-0">
        <LazyLoadImage>
          <img
            src={infoImagen.imagen}
            alt="imagen de portada de anime"
            className="text-sm text-center leading-10"
          />
        </LazyLoadImage>
      </div>
      {infoImagen.episodios && <Episodios info={infoImagen.episodios} />}
      <div className="relative z-[1] nombre py-1 md:py-2 px-1 bg-main-black-static rounded-b-lg">
        <p className="text-[10px] xl:text-sm capitalize text-center  text-main-color-background-static pt-1 h-[34px] flex items-center justify-center">
          <span className="line-clamp-2">{infoImagen.titulo}</span>
        </p>
      </div>
    </article>
  );
};

export default CardImagen;
