import { Link } from "react-router-dom";

type Props = {
  titulo: string;
  children: JSX.Element;
  id: number;
  tipo: string;
};

const CardInfo: React.FC<Props> = ({ titulo, id, tipo, children }) => {
  const currentTipo = tipo === "TV" ? "anime" : tipo?.toLowerCase();
  return (
    <Link to={`/detalle/${currentTipo}/${id}`} className="w-full relative flex">
      <article className="relative flex flex-col gap-2 xs:gap-3 md:rounded-none  bg-main-color-background w-full">
        <h3 className="text-center h-[32px] xs:h-[50px] md:h-[75px] xl:h-[90px] flex items-end justify-center w-full font-bold text-xs xs:text-sm md:text-base xl:text-lg leading-1 line-clamp-2">
          {titulo}
        </h3>
        {children}
      </article>
    </Link>
  );
};

export default CardInfo;
