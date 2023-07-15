import { Icon } from "@iconify/react/dist/iconify.js";

const IconoHeader = () => {
  return (
    <div className="h-full flex items-center w-3/4 icono md:w-1/6 lg:w-1/5">
      <span className="font-semibold text-2xl md:text-base lg:text-2xl xl:text-3xl">
        odyssey
      </span>
      <Icon
        icon="game-icons:mine-explosion"
        className="ml-1 w-6 h-6 lg:w-8 lg:h-8 lg:ml-2"
      />
    </div>
  );
};

export default IconoHeader;
