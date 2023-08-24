import { Icon } from "@iconify/react";

type Props = {
  handleClick: () => void;
  imagen: string;
};

const Trailer = ({ handleClick, imagen }: Props) => {
  return (
    <div onClick={handleClick} className="hidden xl:flex flex-col">
      <p className="text-left capitalize font-bold">trailer</p>
      <div className="video relative rounded-lg border-2 border-main-black overflow-hidden w-fit ml-auto flex items-center justify-center">
        <div className="absolute bg-main-black text-main-color-background rounded-lg px-5 capitalize flex items-center justify-center gap-4 py-1 border-[1px] border-main-color-background text-xs">
          ver trailer
          <Icon
            icon="streamline:entertainment-control-button-play-button-television-buttons-movies-play-tv-video-controls"
            className="stroke-2"
          />
        </div>
        <img src={imagen} alt="" />
      </div>
    </div>
  );
};

export default Trailer;
