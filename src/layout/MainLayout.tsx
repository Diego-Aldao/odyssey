import FooterPrincipal from "../components/Footer/FooterPrincipal";
import BotonLogin from "../components/Layout/BotonLogin";
import IconoHeader from "../components/Layout/IconoHeader";
import NavegacionPrincipal from "../components/NavegacionPrincipal/NavegacionPrincipal";

type Props = {
  children: JSX.Element;
};

const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <header className="bg-main-color-background rounded-t-2xl flex items-center h-14 justify-between pl-4 md:px-6 lg:px-10">
        <IconoHeader />
        <NavegacionPrincipal />
        <BotonLogin />
      </header>
      {children}
      <FooterPrincipal />
    </>
  );
};

export default MainLayout;
