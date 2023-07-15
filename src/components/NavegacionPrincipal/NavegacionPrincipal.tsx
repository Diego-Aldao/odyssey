import { Icon } from "@iconify/react";
import NavDesktop from "./NavDesktop";

const BotonNavMobile = () => {
  return (
    <div className="h-full flex items-center md:hidden">
      <Icon icon="jam:menu" className="h-9 w-9" />
    </div>
  );
};

const NavegacionPrincipal = () => {
  return (
    <nav className="navegacion_principal">
      <BotonNavMobile />
      <NavDesktop />
    </nav>
  );
};

export default NavegacionPrincipal;
