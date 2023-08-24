import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

type Props = {
  imagen?: string;
  titulo: string;
  subtitulo: string | undefined;

  id: number;
};

const CardVideo: React.FC<Props> = ({ imagen, titulo, subtitulo, id }) => {
  return (
    <div
      className="border-2 relative section_card_video border-main-color-background
       rounded-tr-[60px] rounded-bl-[60px] rounded-xl my-8"
    >
      <div className="absolute -top-7 left-0 rounded-tl-lg  rounded-br-lg text-main-color-background">
        <p className="text-[12px] xl:text-sm">{titulo}</p>
      </div>

      <div className="overflow-hidden rounded-tr-[60px] rounded-bl-[60px] rounded-xl flex items-center justify-center">
        <div className="absolute bg-main-black text-main-color-background rounded-lg px-5 capitalize flex items-center justify-center gap-4 py-1 border-[1px] border-main-color-background">
          ver video
          <Icon
            icon="streamline:entertainment-control-button-play-button-television-buttons-movies-play-tv-video-controls"
            className="stroke-2"
          />
        </div>
        <img src={imagen} alt="" />
      </div>
      <div className=" absolute -bottom-7 -right-[2px] rounded-b-lg text-main-color-background">
        <Link to={`/detalle/anime/${id}`}>
          <p className="text-[12px] xl:text-sm">{subtitulo}</p>
        </Link>
      </div>
    </div>
  );
};

export default CardVideo;
