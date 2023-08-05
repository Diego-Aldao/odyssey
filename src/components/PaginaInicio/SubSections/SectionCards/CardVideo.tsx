import { Icon } from "@iconify/react";

type Props = {
  imagen: string;
  titulo: string;
  subtitulo: string | undefined;
  textBlack?: boolean;
};

const CardVideo: React.FC<Props> = ({
  imagen,
  titulo,
  subtitulo,
  textBlack,
}) => {
  return (
    <div
      className={`border-2 relative section_card_video ${
        textBlack
          ? "border-main-black section_card_video_text_black"
          : "border-main-color-background"
      } rounded-tr-[60px] rounded-bl-[60px] rounded-xl my-8`}
    >
      <div
        className={`absolute -top-7 left-0 rounded-tl-lg  rounded-br-lg ${
          textBlack ? "text-main-black" : "text-main-color-background"
        }`}
      >
        <p className="text-[12px] xl:text-sm">{subtitulo}</p>
      </div>
      <div className="btn-play bg-main-black text-main-color-background h-12 w-12 rounded-full flex items-center justify-center absolute">
        <Icon
          icon="streamline:entertainment-control-button-play-button-television-buttons-movies-play-tv-video-controls"
          className="w-5 h-5"
        />
      </div>
      <div className="overflow-hidden rounded-tr-[60px] rounded-bl-[60px] rounded-xl">
        <img src={imagen} alt="" />
      </div>
      <div
        className={`absolute -bottom-7 -right-[2px] rounded-b-lg ${
          textBlack ? "text-main-black" : "text-main-color-background"
        }`}
      >
        <p className="text-[12px] xl:text-sm">{titulo}</p>
      </div>
    </div>
  );
};

export default CardVideo;
