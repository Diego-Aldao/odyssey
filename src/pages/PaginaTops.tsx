import SectionSubPaginas from "../components/PaginasSecundarias/SectionSubPaginas";
import MainLayout from "../layout/MainLayout";
import { useState } from "react";
import { MAIN_FILTERS_TOPS } from "../constants";
import Filtros from "../components/PaginasSecundarias/Filtros";

import { Outlet } from "react-router-dom";
import ImagenHeaderTops from "../components/PaginaTops/ImagenHeaderTops";

const PaginaTops = () => {
  const [btnVisible, setBtnVisible] = useState<boolean>(true);

  return (
    <MainLayout>
      <SectionSubPaginas
        setBtnVisible={setBtnVisible}
        btnVisible={btnVisible}
        imagenHeader={<ImagenHeaderTops />}
        titulo={"tops del anime"}
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
