import { Icon } from "@iconify/react";

type Props = {
  imagen: string;
  titulo: string;
  subtitulo: string | undefined;
};

const CardVideo: React.FC<Props> = ({ imagen, titulo, subtitulo }) => {
  return (
    <div className="border-2 relative section_card_video border-main-color-background rounded-tr-[60px] rounded-bl-[60px] rounded-xl mb-10">
      <div className="absolute top-0 left-0 bg-main-color-background px-2 p-1 border-2 rounded-tl-lg border-main-color-background rounded-br-lg">
        <p className="text-[12px] xl:text-sm">{subtitulo}</p>
      </div>
      <div className="btn-play bg-main-color-background text-main-black h-12 w-12 rounded-full flex items-center justify-center absolute  z-10">
        <Icon
          icon="streamline:entertainment-control-button-play-button-television-buttons-movies-play-tv-video-controls"
          className="w-5 h-5"
        />
      </div>
      <div className="overflow-hidden rounded-tr-[60px] rounded-bl-[60px] rounded-xl">
        <img src={imagen} alt="" />
      </div>
      <div className="absolute bg-main-color-background -bottom-8 p-1 -right-[2px] pt-4 border-2 border-main-color-background -z-[1] rounded-b-lg">
        <p className="text-[12px] xl:text-sm">{titulo}</p>
      </div>
    </div>
  );
};

export default CardVideo;
