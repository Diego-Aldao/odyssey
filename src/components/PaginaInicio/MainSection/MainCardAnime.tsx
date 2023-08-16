import { Icon } from "@iconify/react/dist/iconify.js";
type Props = {
  animeWallpaper: string;
};

const MainCardAnime: React.FC<Props> = ({ animeWallpaper }) => {
  return (
    <div className="main_card_anime custom-border">
      <button className="absolute hidden xs:flex flex-col items-center justify-center -right-8 top-[40%] bg-main-color border-2 border-main-black rounded-full p-2 py-4">
        <Icon
          icon="fa6-solid:dice"
          rotate={3}
          hFlip={true}
          vFlip={true}
          className="h-9 w-9 mb-2 pl-1"
        />
        <span className="text-[11px] uppercase font-semibold">anime</span>
        <span className="text-[11px] uppercase font-semibold">random</span>
      </button>
      <div className="imagen_main_card_anime custom-border w-full h-full overflow-hidden">
        <img
          src={animeWallpaper}
          alt="imagen de una serie anime"
          className="object-top"
        />
      </div>
    </div>
  );
};

export default MainCardAnime;
