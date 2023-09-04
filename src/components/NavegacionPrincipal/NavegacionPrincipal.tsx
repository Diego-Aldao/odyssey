import { Icon } from "@iconify/react";
import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";
import { useState } from "react";

type Props = {
  handleVisibility: () => void;
};

const BotonNavMobile = ({ handleVisibility }: Props) => {
  return (
    <div
      onClick={handleVisibility}
      className="h-full flex items-center md:hidden"
    >
      <Icon icon="jam:menu" className="h-12 w-12" />
    </div>
  );
};

const NavegacionPrincipal = () => {
  const [navVisibility, setNavVisibility] = useState<boolean>(false);

  const handleVisibility = () => {
    setNavVisibility((prevState) => !prevState);
  };

  return (
    <nav className="nav_principal">
      <BotonNavMobile handleVisibility={handleVisibility} />
      <NavDesktop />
      <NavMobile
        handleVisibility={handleVisibility}
        navVisibility={navVisibility}
        setNavVisibility={setNavVisibility}
      />
    </nav>
  );
};

export default NavegacionPrincipal;
