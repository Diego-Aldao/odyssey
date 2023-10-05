import { Icon } from "@iconify/react/dist/iconify.js";
const MainInfoApp = () => {
  return (
    <div className="main_info_app">
      <div className="main_info_app_corner">
        <div className="w-14 h-6 bg-main-color rounded-t-xl flex justify-center items-center border-2 border-main-black border-b-0 relative ">
          <Icon
            icon="solar:menu-dots-broken"
            className="text-[#23210f] h-8 w-8"
          />
        </div>
      </div>
      <h3 className="uppercase text-base lg:text-xl font-semibold text-main-black">
        aplicación movil
      </h3>
      <p className="text-sm text-main-black">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
        molestias, corporis consequuntur
      </p>
      <div className="flex gap-2 items-center ">
        <Icon
          icon="ion:logo-apple-appstore"
          className="h-8 w-8 text-main-black"
        />
        <Icon icon="bi:google-play" className="h-6 w-6 text-main-black" />
      </div>
      <button className="flex gap-2 items-center border-2 rounded-full pl-4  border-main-black">
        <span className="capitalize text-sm text-main-black font-semibold">
          descargar
        </span>
        <div className="bg-main-color rounded-full p-2">
          <Icon icon="fe:download" className="h-5 w-5" />
        </div>
      </button>
    </div>
  );
};

export default MainInfoApp;
