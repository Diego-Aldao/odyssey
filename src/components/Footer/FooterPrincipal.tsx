import { Icon } from "@iconify/react";
import IconoHeader from "../Layout/IconoHeader";
import downloadIos from "../../assets/iOS.png";
import downloadGoogle from "../../assets/googleplay.png";
import imagenFooter from "../../assets/ImagenFooterPrincipal.png";
import topAnimes from "../../mocks/AnimeTopAllTime.json";
import topAnimesAhora from "../../mocks/AnimeTopEnEmision.json";
import topPersonajes from "../../mocks/PersonajeTop.json";

const FooterPrincipal = () => {
  return (
    <footer className="bg-main-color-background px-4 py-10 flex flex-col gap-5 rounded-b-xl footer-border relative">
      <div className="imagen-footer absolute bottom-0 h-[800px] right-0 hidden lg:block">
        <img src={imagenFooter} alt="" />
      </div>
      <div className="logo flex flex-col gap-1 md:gap-2">
        <IconoHeader
          clasesTexto={
            "w-full text-4xl justify-center md:text-6xl xl:text-7xl gap-2"
          }
          clasesIcono={"h-[36px] md:h-12 xl:h-14 mt-2 md:mt-4"}
        />
        <p className="text-center font-bold capitalize text-sm md:text-base">
          comunidad anime
        </p>
      </div>
      <div className="listas hidden md:flex items-center justify-center w-full gap-5 mx-auto z-10">
        <ul className="flex flex-col gap-1 text-sm">
          <li>
            <p className="capitalize font-bold mb-1">top animes</p>
          </li>
          {topAnimes.data.slice(0, 5).map((anime) => (
            <li key={anime.mal_id}>{anime.title}</li>
          ))}
        </ul>
        <ul className="flex flex-col gap-1 text-sm">
          <li>
            <p className="capitalize font-bold mb-1">top animes en emision</p>
          </li>
          {topAnimesAhora.data.slice(0, 5).map((anime) => (
            <li key={anime.mal_id}>{anime.title}</li>
          ))}
        </ul>
        <ul className="flex flex-col gap-1 text-sm">
          <li>
            <p className="capitalize font-bold mb-1">top personajes</p>
          </li>
          {topPersonajes.data.slice(0, 5).map((personaje) => (
            <li key={personaje.mal_id}>{personaje.name}</li>
          ))}
        </ul>
      </div>
      <div className="interaccion flex flex-col gap-5  items-center md:flex-row md:justify-center md:gap-10 py-5 relative">
        <div className="redes flex flex-col items-center gap-2 md:flex-row">
          <p className="capitalize font-bold text-lg">siguenos</p>
          <ul className="flex gap-2 text-2xl md:text-3xl">
            <li>
              <Icon icon="mdi:instagram" />
            </li>
            <li>
              <Icon icon="mdi:twitter" />
            </li>
            <li>
              <Icon icon="mdi:facebook" />
            </li>
            <li>
              <Icon icon="mdi:pinterest" />
            </li>
          </ul>
        </div>
        <div className="app flex flex-col items-center gap-2 md:flex-row">
          <p className="capitalize font-bold text-lg">descarga la app</p>
          <div className="w-[120px] h-[40px] md:w-[100px] md:h-[30px]">
            <img src={downloadIos} className="object-contain" alt="" />
          </div>
          <div className="w-[120px] h-[40px] md:w-[100px] md:h-[30px]">
            <img src={downloadGoogle} className="object-contain" alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterPrincipal;
