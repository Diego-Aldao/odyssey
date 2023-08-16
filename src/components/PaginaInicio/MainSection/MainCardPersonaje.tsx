import { Icon } from "@iconify/react/dist/iconify.js";

type Props = {
  personaje: string;
};

const MainCardPersonaje: React.FC<Props> = ({ personaje }) => {
  return (
    <div className="main_card_personaje">
      <div className="w-10/12 h-full overflow-hidden rounded-bl-[20px] rounded-tl-[96px]">
        <img
          src={personaje}
          alt="imagen de un personaje de anime"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="h-full w-2/12 bg-main-color flex flex-col justify-between py-4 items-center border-l-[1.5px] border-main-black overflow-hidden  rounded-r-[20px]">
        <div className="w-full flex flex-col items-center gap-4">
          <Icon icon="game-icons:beveled-star" className="h-6 w-6" />
          <Icon icon="game-icons:beveled-star" className="h-6 w-6" />
        </div>

        <Icon
          icon="game-icons:branch-arrow"
          className="h-8 w-8 -rotate-[135deg]"
        />
      </div>
    </div>
  );
};

export default MainCardPersonaje;
