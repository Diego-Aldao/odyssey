import { Link } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import { Icon } from "@iconify/react";

const PaginaNotFound = () => {
  return (
    <MainLayout>
      <main
        className="bg-main-color-background flex flex-col  items-center justify-center py-10 min-h-[calc(100vh_-_468px)] xs:min-h-[calc(100vh_-_500px)] md:min-h-[calc(100vh_-_374px)] lg:min-h-[600px]
      "
      >
        <h3 className="font-bold text-8xl md:text-[200px] lg:text-[250px]">
          404
        </h3>
        <p className="capitalize font-bold text-sm lg:text-lg">
          pagina no encontrada
        </p>
        <Link
          to="/"
          className="mt-10 text-xs md:text-sm bg-main-black uppercase text-main-color-background rounded-md py-1 px-4 flex gap-2 items-center"
        >
          volver al inicio
          <Icon icon="jam:arrow-right" className="w-4 h-4 md:w-8 md:h-8" />
        </Link>
      </main>
    </MainLayout>
  );
};

export default PaginaNotFound;
