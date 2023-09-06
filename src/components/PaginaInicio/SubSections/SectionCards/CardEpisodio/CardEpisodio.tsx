import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { Entry } from "../../../../../types";

type Props = {
  id: number;
  titulo: string;
  imagen?: string;
  episodios: Entry[];
};
const CardEpisodio = ({ id, titulo, imagen, episodios }: Props) => {
  return (
    <Link to={`/detalle/anime/${id}/episodios`}>
      <div className="flex h-full flex-col gap-4 z-[2]">
        <h3 className="text-center min-h-[45px] max-h-[45px] line-clamp-2 font-semibold">
          {titulo}
        </h3>
        <div className="h-full rounded-xl border-2 border-main-black overflow-hidden">
          <img src={imagen} alt="" />
        </div>
        <ul className="flex flex-col gap-4">
          {episodios.map((episodio) => (
            <li
              key={episodio.mal_id}
              className=" flex items-center justify-start"
            >
              <p className="px-1 rounded-sm bg-main-black item-skew-izquierda z-[1] relative text-main-color-background text-sm md:text-base py-[2px] flex gap-2 items-center w-[80%]">
                {episodio.title}
                {episodio.premium && <Icon icon="ph:crown-bold" />}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </Link>
  );
};

export default CardEpisodio;
