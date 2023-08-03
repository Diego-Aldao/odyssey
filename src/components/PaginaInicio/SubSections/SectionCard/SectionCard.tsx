import React from "react";
import CardImagen from "./CardImagen";
import CardVideo from "./CardVideo";

type Episodio = {
  mal_id: number;
  url: string;
  title: string;
  premium: boolean;
};

type Props = {
  infoSection: {
    titulo: string;
    imagenUrl: string;
    episodios?: Episodio[];
    subtitulo?: string;
    textBlack?: boolean;
  };
  noBackground?: boolean;
};

const SectionCard: React.FC<Props> = ({ infoSection, noBackground }) => {
  return (
    <>
      {noBackground ? (
        <CardVideo
          imagen={infoSection.imagenUrl}
          titulo={infoSection.titulo}
          subtitulo={infoSection.subtitulo}
          textBlack={infoSection.textBlack}
        />
      ) : (
        <CardImagen
          infoImagen={{
            imagen: infoSection.imagenUrl,
            episodios: infoSection.episodios,
            titulo: infoSection.titulo,
          }}
        />
      )}
    </>
  );
};

export default SectionCard;
