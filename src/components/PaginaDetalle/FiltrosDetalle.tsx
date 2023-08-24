import React from "react";

type Props = {
  listaFiltros: string[];
  setVisibleContent: React.Dispatch<React.SetStateAction<string>>;
};

const FiltrosDetalle = ({ listaFiltros, setVisibleContent }: Props) => {
  return (
    <ul className="hidden lg:flex col-span-4 row-start-1 col-start-1 z-20 bg-main-black text-main-color-background items-center justify-center gap-3 xl:gap-5 w-fit mx-auto px-5 py-3 item-skew-x relative">
      {listaFiltros.map((filtro) => (
        <li
          key={filtro}
          onClick={() => {
            setVisibleContent(filtro);
          }}
          className="capitalize"
        >
          {filtro}
        </li>
      ))}
    </ul>
  );
};

export default FiltrosDetalle;
