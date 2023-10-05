import { Link } from "react-router-dom";
import { AnimeElement } from "../../../types";

type Props = {
  dataAside: AnimeElement[];
};

const AsidePersonaje = ({ dataAside }: Props) => {
  return (
    <ul className="flex flex-col gap-2 my-5 text-main-black">
      {dataAside.map((item) => (
        <li>
          <Link
            to={`/detalle/anime/${item.anime.mal_id}`}
            className="flex gap-2"
          >
            <div className="rounded-lg max-w-[50px] min-h-[62px] overflow-hidden border-2 border-main-black">
              <img src={item.anime.images.webp.image_url} alt="" />
            </div>
            <div className="flex flex-col gap-2 w-[calc(100%_-_58px)]">
              <span className="text-xs line-clamp-2 font-semibold">
                {item.anime.title}
              </span>
              <span className="text-xs">{item.role}</span>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default AsidePersonaje;
