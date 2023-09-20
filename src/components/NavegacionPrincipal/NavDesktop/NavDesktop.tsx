import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import LinkNavDesktop from "./LinkNavDesktop";
import LinkBusquedaDesktop from "./LinkBusquedaDesktop";
import BarraBusquedaDesktop from "./BarraBusquedaDesktop";

const NavDesktop = () => {
  const [searchbarVisible, setSearchbarVisible] = useState<boolean>(false);

  const handleClick = () => {
    setSearchbarVisible((searchbarVisible) => !searchbarVisible);
  };

  return (
    <ul className="nav_desktop relative">
      <LinkNavDesktop destino="/" texto="inicio" />
      <LinkNavDesktop destino="/episodios" texto="ultimos episodios" />
      <LinkNavDesktop destino="/temporadas/now" texto="anime de temporada" />
      <LinkNavDesktop destino="/tops/anime" texto="tops" />
      <LinkNavDesktop destino="/trailers" texto="trailers" />
      <LinkBusquedaDesktop handleClick={handleClick} />
      <AnimatePresence>
        {searchbarVisible && <BarraBusquedaDesktop handleClick={handleClick} />}
      </AnimatePresence>
    </ul>
  );
};

export default NavDesktop;
