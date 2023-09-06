import React from "react";
import { Icon } from "@iconify/react";
import { Entry } from "../../../../../types";

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
    <div className="section_card_episodios absolute bottom-12 left-0 px-2 lg:pb-2 w-full h-20 flex  flex-col justify-end gap-1">
      {info.map((episodio: Entry) => (
        <p
          key={episodio.mal_id}
          className="text-main-color-background flex items-center gap-2 text-[10px] sm:text-[12px] lg:text-[14px]"
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
    <article className="section_card w-full rounded-lg overflow-hidden border-2 border-main-black  rounded-tl-[60px] cursor-pointer">
      <img
        src={infoImagen.imagen}
        alt="imagen de portada de un anime de temporada"
        className="min-h-[200px] max-h-[55vw] sm:max-h-[35vw] md:max-h-[27vw] lg:max-h-[20vw]"
      />
      {infoImagen.episodios && <Episodios info={infoImagen.episodios} />}
      <div className="nombre py-1 md:py-2 px-1 bg-main-black">
        <p className="text-[12px] xl:text-sm capitalize text-center line-clamp-2 text-main-color-background flex  justify-center h-[40px]">
          <span className="my-auto">{infoImagen.titulo}</span>
        </p>
      </div>
    </article>
  );
};

export default CardImagen;
