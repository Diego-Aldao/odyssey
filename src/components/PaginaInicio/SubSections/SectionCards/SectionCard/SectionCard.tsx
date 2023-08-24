import React from "react";
import CardImagen from "./CardImagen";
import CardVideo from "./CardVideo";
import { Entry, Episodio } from "../../../../../types";
import { Link } from "react-router-dom";

type Props = {
  id: number;
  titulo: string;
  imagenUrl?: string;
  episodios?: Entry[];
  subtitulo?: string;
  noBackground?: boolean;
};

const SectionCard: React.FC<Props> = ({
  id,
  titulo,
  imagenUrl,
  episodios,
  subtitulo,
  noBackground,
}) => {
  return (
    <>
      {noBackground ? (
        <CardVideo
          imagen={imagenUrl}
          titulo={titulo}
          subtitulo={subtitulo}
          id={id}
        />
      ) : (
        <Link to={`/detalle/anime/${id}`}>
          <CardImagen
            infoImagen={{
              imagen: imagenUrl,
              episodios: episodios,
              titulo: titulo,
            }}
          />
        </Link>
      )}
    </>
  );
};

export default SectionCard;
