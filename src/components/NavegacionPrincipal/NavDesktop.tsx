import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

type Props = {
  texto: string;
  destino: string;
};

const LinkNavegacion: React.FC<Props> = ({ texto, destino }) => {
  return (
    <li>
      <Link
        to={destino}
        className="capitalize text-[13px] px-1 lg:px-2 xl:px-3 lg:text-[15px] xl:text-lg flex gap-2 items-center"
      >
        {texto}
      </Link>
    </li>
  );
};

const NavDesktop = () => {
  return (
    <ul className="nav_desktop">
      <LinkNavegacion destino="/" texto="inicio" />
      <LinkNavegacion destino="/episodios" texto="ultimos episodios" />
      <LinkNavegacion destino="/temporadas/now" texto="anime de temporada" />
      <LinkNavegacion destino="/tops/anime" texto="tops" />
      <LinkNavegacion destino="/trailers" texto="trailers" />
      <li className="capitalize text-[13px] px-1 xl:px-3 flex gap-2 items-center lg:text-lg">
        <span className="hidden xl:block">buscar</span>
        <Icon icon="mingcute:search-3-line" className="h-4 w-4 lg:h-5 lg:w-5" />
      </li>
    </ul>
  );
};

export default NavDesktop;
