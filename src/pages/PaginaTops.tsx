import { useEffect } from "react";
import SectionSubPaginas from "../components/PaginasSecundarias/SectionSubPaginas";
import MainLayout from "../layout/MainLayout";
import { useState } from "react";
import { MAIN_FILTERS_TOPS } from "../constants";
import Filtros from "../components/PaginasSecundarias/Filtros";
import { Outlet } from "react-router-dom";
import ImagenHeaderTops from "../components/PaginaTops/ImagenHeaderTops";
import TituloHeaderMotion from "../components/FramerMotion/TituloHeaderMotion";

const PaginaTops = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [btnVisible, setBtnVisible] = useState<boolean>(false);

  return (
    <MainLayout>
      <SectionSubPaginas
        setBtnVisible={setBtnVisible}
        btnVisible={btnVisible}
        imagenHeader={<ImagenHeaderTops />}
        titulo={
          <TituloHeaderMotion textoLineaUno="tops del" textoLineaDos="anime" />
        }
        filtrosPrincipales={
          <Filtros pathInicial="tops" filtros={MAIN_FILTERS_TOPS} />
        }
      >
        <Outlet />
      </SectionSubPaginas>
    </MainLayout>
  );
};

export default PaginaTops;
