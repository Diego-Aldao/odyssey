import { Outlet } from "react-router-dom";
import MainLayout from "../layout/MainLayout";

const PaginaDetalles = () => {
  return (
    <MainLayout>
      <main className="main_detalle">
        <Outlet />
      </main>
    </MainLayout>
  );
};

export default PaginaDetalles;
