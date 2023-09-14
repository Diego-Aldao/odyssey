import { Link } from "react-router-dom";
import { AnimeElementPersona } from "../../../types";
import SubSectionDetalle from "../SubSectionDetalle";
import MotionListItem from "../FramerMotion/MotionListItem";

type Props = {
  otrosRolesAnime: AnimeElementPersona[];
};

const OtrosRolesPersona = ({ otrosRolesAnime }: Props) => {
  return (
    <SubSectionDetalle titulo="otros roles en el anime">
      <ul className="grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
        {otrosRolesAnime.map((rol) => (
          <MotionListItem clases="">
            <Link
              to={`/detalle/anime/${rol.anime.mal_id}`}
              className="flex gap-2"
            >
              <div className="min-h-[120px] min-w-[80px] max-h-[120px] max-w-[80px] rounded-lg border-2 border-main-black overflow-hidden">
                <img src={rol.anime.images.webp.image_url} alt="" />
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-sm font-semibold">{rol.anime.title}</p>
                <p className="text-xs font-semibold capitalize">
                  posicion:
                  <span className="font-normal"> {rol.position}</span>
                </p>
              </div>
            </Link>
          </MotionListItem>
        ))}
      </ul>
    </SubSectionDetalle>
  );
};

export default OtrosRolesPersona;
