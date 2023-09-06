import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

type Props = {
  imagen?: string;
  titulo: string;
  subtitulo: string | undefined;
  tipo: string;
  id: number;
  mainPage?: boolean;
};

const CardVideo: React.FC<Props> = ({
  imagen,
  titulo,
  subtitulo,
  id,
  tipo,
  mainPage,
}) => {
  return (
    <article className="relative flex flex-col w-full gap-2 z-[1]">
      <Link to={`/detalle/${tipo}/${id}`}>
        <p
          className={`flex w-fit max-w-[90%] justify-start border-main-black rounded-sm pl-4 relative item-skew-izquierda z-[1] px-1 bg-main-black text-main-color-background ${
            mainPage ? "" : "pl-0"
          }`}
        >
          <span className="line-clamp-1 md:text-lg lg:text-base xl:text-lg">
            {titulo}
          </span>
        </p>
      </Link>
      <div
        className={`border-2 rounded-xl overflow-hidden flex flex-1 max-h-[250px] items-center justify-center ${
          mainPage ? "border-main-black" : "border-main-color-background"
        }`}
      >
        <Link to={`/detalle/${tipo}/${id}/trailer`} className="absolute">
          <div className="play bg-main-black text-main-color-background rounded-lg px-5 capitalize flex items-center justify-center gap-4 py-1 border-[1px] border-main-color-background">
            ver video
            <Icon
              icon="streamline:entertainment-control-button-play-button-television-buttons-movies-play-tv-video-controls"
              className="stroke-2"
            />
          </div>
        </Link>
        <img src={imagen} alt="" />
      </div>
      <p
        className={`w-fit flex self-end ${
          mainPage ? "text-main-black" : "text-main-color-background"
        }`}
      >
        {subtitulo}
      </p>
    </article>
  );
};

export default CardVideo;
