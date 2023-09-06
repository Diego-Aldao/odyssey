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
      className="h-full flex items-center md:hidden px-4 md:px-0 item-skew-x z-[1] relative bg-main-black after:hidden"
    >
      <Icon icon="jam:menu" className="h-12 w-12 text-main-color-background" />
    </div>
  );
};

const NavegacionPrincipal = () => {
  const [navVisibility, setNavVisibility] = useState<boolean>(false);

  const handleVisibility = () => {
    setNavVisibility((prevState) => !prevState);
  };

  return (
    <nav className="text-white md:flex-1 h-full">
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
