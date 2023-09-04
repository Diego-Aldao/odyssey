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
  tipo: string;
  seccion?: string;
};

const SectionCard: React.FC<Props> = ({
  id,
  titulo,
  imagenUrl,
  episodios,
  subtitulo,
  noBackground,
  tipo,
  seccion,
}) => {
  return (
    <>
      {noBackground ? (
        <CardVideo
          imagen={imagenUrl}
          titulo={titulo}
          subtitulo={subtitulo}
          id={id}
          tipo={tipo}
        />
      ) : (
        <Link to={`/detalle/${tipo}/${id}/${seccion || ""}`}>
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
