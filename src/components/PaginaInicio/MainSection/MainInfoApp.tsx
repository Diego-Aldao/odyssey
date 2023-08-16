import { Icon } from "@iconify/react/dist/iconify.js";
const MainInfoApp = () => {
  return (
    <div className="main_info_app relative">
      <div className="main_info_app_corner">
        <div className="w-14 h-6 bg-main-black rounded-t-xl flex justify-center items-center">
          <Icon
            icon="solar:menu-dots-broken"
            className="text-main-color h-8 w-8"
          />
        </div>
      </div>
      <h3 className="uppercase text-lg font-semibold">aplicación movil</h3>
      <p className="text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
        molestias, corporis consequuntur soluta inventore perspiciatis sunt
        optio explicabo accusamus atque!
      </p>
      <div className="flex gap-2 items-center">
        <Icon icon="ion:logo-apple-appstore" className="h-8 w-8" />
        <Icon icon="bi:google-play" className="h-6 w-6" />
      </div>
      <button className="flex gap-2 items-center border-2 rounded-full pl-4  border-main-black">
        <span className="capitalize text-sm font-semibold">descargar</span>
        <div className="bg-main-color rounded-full p-2">
          <Icon icon="fe:download" className="h-5 w-5" />
        </div>
      </button>
    </div>
  );
};

export default MainInfoApp;
