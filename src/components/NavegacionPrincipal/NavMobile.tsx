import { Icon } from "@iconify/react";
import IconoHeader from "../Layout/IconoHeader";
import { useNavigate } from "react-router-dom";
import imagenNav from "../../assets/imgNavMobile.png";

const listadoNav = [
  {
    id: 1,
    nombre: "inicio",
    destino: "/",
  },
  {
    id: 2,
    nombre: "ultimos episodios",
    destino: "/episodios",
  },
  {
    id: 3,
    nombre: "anime de temporada",
    destino: "/temporadas/now",
  },
  {
    id: 4,
    nombre: "tops",
    destino: "/tops/anime",
  },
];

type Props = {
  handleVisibility: () => void;
  navVisibility: boolean;
  setNavVisibility: React.Dispatch<React.SetStateAction<boolean>>;
};

const NavMobile = ({
  handleVisibility,
  navVisibility,
  setNavVisibility,
}: Props) => {
  const navigate = useNavigate();

  const handleDestino = (destino: string) => {
    setNavVisibility((prevState) => !prevState);
    navigate(destino);
  };

  return (
    <div
      className={` fixed z-20 top-0 right-0 w-full h-full bg-main-black ${
        navVisibility ? "block" : "hidden"
      }`}
    >
      <div
        className={`w-full h-full xs:border-4 xs:p-3 xs:rounded-xl bg-main-color-background xs:border-main-black  `}
      >
        <header className="pl-4 flex xs:rounded-t-xl bg-main-black h-14 items-center justify-between">
          <div className="logo text-main-color-background w-full">
            <IconoHeader />
          </div>

          <div
            onClick={handleVisibility}
            className="h-full before:-left-[20px] before:bg-main-color-background after:hidden flex items-center item-skew-x bg-main-color-background z-[2] relative px-4"
          >
            <Icon icon="jam:close" className="h-12 w-12 text-main-black" />
          </div>
        </header>
        <div className="contenido relative flex flex-col items-center gap-10 py-10 px-4 bg-main-black h-[calc(100%_-_112px)]">
          <div className="absolute bottom-0 -right-5 h-[85vw] max-h-[450px] overflow-hidden">
            <img src={imagenNav} alt="" />
          </div>
          <form className="w-full rounded-md overflow-hidden flex items-center  text-main-black h-10 bg-main-color-background pl-2 border-2 border-main-color-background max-w-[500px]">
            <input
              type="text"
              className="flex-1 h-full placeholder:capitalize bg-transparent border-transparent -outline-offset-2 px-1 outline-main-black "
              placeholder="naruto, shingeki, jujut..."
            />
            <div className="h-full w-12 flex items-center justify-center bg-main-black">
              <Icon
                icon="mingcute:search-3-line"
                className="h-6 w-6 lg:h-5 lg:w-5 text-main-color-background"
              />
            </div>
          </form>
          <ul className="w-full flex flex-col gap-10 items-start">
            {listadoNav.map(({ id, destino, nombre }) => (
              <li
                onClick={() => {
                  handleDestino(destino);
                }}
                className="item-skew-izquierda z-[2] relative -left-4 after:bg-main-color-background text-main-black bg-main-color-background pl-4 py-2 capitalize font-semibold text-lg px-10"
                key={id}
              >
                {nombre}
              </li>
            ))}
          </ul>
        </div>
        <footer className="h-14 xs:rounded-b-xl bg-main-black flex items-center justify-center">
          <p className="capitalize text-sm">
            odyssey: comunidad anime &copy; 2023{" "}
          </p>
        </footer>
      </div>
    </div>
  );
};

export default NavMobile;
