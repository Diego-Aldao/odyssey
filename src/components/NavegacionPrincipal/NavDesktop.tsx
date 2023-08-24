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
        className="capitalize text-[13px] lg:text-base flex gap-2 items-center"
      >
        {texto}
      </Link>
    </li>
  );
};

const NavDesktop = () => {
  return (
    <ul className="hidden md:flex h-full items-center justify-center gap-4 xl:gap-6">
      <LinkNavegacion destino="/" texto="inicio" />
      <LinkNavegacion destino="/episodios" texto="ultimos episodios" />
      <LinkNavegacion destino="/temporadas" texto="anime de temporada" />
      <LinkNavegacion destino="/tops" texto="tops" />
      <li className="capitalize text-[13px] lg:text-base flex gap-2 items-center">
        <span className="hidden xl:block">buscar</span>
        <Icon icon="mingcute:search-3-line" className="h-4 w-4 lg:h-5 lg:w-5" />
      </li>
    </ul>
  );
};

export default NavDesktop;
