import { Icon } from "@iconify/react";
import NavDesktop from "./NavDesktop";

const BotonNavMobile = () => {
  return (
    <div className="h-full flex items-center md:hidden">
      <Icon icon="jam:menu" className="h-12 w-12" />
    </div>
  );
};

const NavegacionPrincipal = () => {
  return (
    <nav className="nav_principal">
      <BotonNavMobile />
      <NavDesktop />
    </nav>
  );
};

export default NavegacionPrincipal;
