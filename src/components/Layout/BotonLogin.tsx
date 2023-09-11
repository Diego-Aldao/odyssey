import { Icon } from "@iconify/react";

const BotonLogin = () => {
  return (
    <div className="hidden md:flex items-center justify-center lg:justify-end xl:justify-center gap-1 h-full w-1/12 lg:w-fit lg:pl-3">
      <p className="capitalize font-bold hidden lg:block text-lg">ingresar</p>
      <Icon
        icon="game-icons:ninja-heroic-stance"
        className="lg:h-6 h-10 lg:w-6 w-10"
      />
    </div>
  );
};

export default BotonLogin;
