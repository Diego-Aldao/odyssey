import { Icon } from "@iconify/react/dist/iconify.js";

const MainButtonRandom = () => {
  return (
    <button className="main_button_random">
      <Icon icon="uim:polygon" className="w-24 h-24 lg:w-32 lg:h-32 absolute" />
      <Icon
        icon="uim:polygon"
        className="w-24 h-24 lg:w-32 lg:h-32 absolute rotate-90"
      />
      <p className="text-center absolute flex flex-col">
        <span className="text-main-color uppercase text-[10px] lg:text-sm">
          descrubrir
        </span>
      </p>
      <svg
        className="animate-spin-slow w-[150px] lg:w-[200px] h-[150px] lg:h-[200px]"
        viewBox="0 0 200 200"
      >
        <defs>
          <path
            id="circle"
            d="M 100, 100
        m -75, 0
        a 75, 75 0 1, 0 150, 0
        a 75, 75 0 1, 0 -150, 0
        "
          ></path>
        </defs>
        <text>
          <textPath
            alignment-baseline="top"
            href="#circle"
            className="font-semibold capitalize"
          >
            - personaje random - anime random - persona random
          </textPath>
        </text>
      </svg>
    </button>
  );
};

export default MainButtonRandom;
