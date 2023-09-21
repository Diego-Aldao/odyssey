type Props = {
  handleClick: (tipo: string) => void;
};

const ListaFiltros = [
  {
    id: 1,
    filtro: "general",
    nombre: "todos",
  },
  {
    id: 2,
    filtro: "anime",
    nombre: "anime",
  },
  {
    id: 3,
    filtro: "personajes",
    nombre: "personajes",
  },
  {
    id: 4,
    filtro: "personas",
    nombre: "personas",
  },
];

const FiltrosBusqueda = ({ handleClick }: Props) => {
  return (
    <div className="flex justify-center xs:border-t-4 border-main-black mt-5">
      <ul className="flex gap-2 py-1 text-xs items-center justify-center capitalize item-skew-x xs:text-sm z-[1] relative bg-main-black text-main-color-background w-fit md:text-base md:gap-4 lg:gap-6 lg:text-lg xl:gap-10">
        {ListaFiltros.map((filtro) => (
          <li
            key={filtro.id}
            className="cursor-pointer"
            onClick={() => {
              handleClick(filtro.filtro);
            }}
          >
            {filtro.nombre}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FiltrosBusqueda;
