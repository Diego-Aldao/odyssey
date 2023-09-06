import { Icon } from "@iconify/react";

const BotonLogin = () => {
  return (
    <div className="hidden md:flex items-center justify-center lg:justify-end xl:justify-center gap-2 h-full w-1/12 lg:w-fit lg:pl-3">
      <p className="capitalize font-bold hidden lg:block text-lg">ingresar</p>
      <Icon
        icon="fluent-emoji-high-contrast:bust-in-silhouette"
        className="h-6 w-6"
      />
    </div>
  );
};

export default BotonLogin;
