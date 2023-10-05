import { Link } from "react-router-dom";
import { VoicePersona } from "../../../types";
import SubSectionDetalle from "../SubSectionDetalle";
import MotionListItem from "../FramerMotion/MotionListItem";

type Props = {
  voces: VoicePersona[];
};

const DoblajesPersona = ({ voces }: Props) => {
  return (
    <SubSectionDetalle
      titulo={"roles de actuación de voz"}
      visibleContent="general"
    >
      <ul className="flex flex-col gap-5 lg:gap-3 text-main-black">
        {voces.slice(0, 10).map((rol) => (
          <MotionListItem
            key={rol.character.mal_id}
            clases="flex items-center justify-between gap-2"
          >
            <>
              <Link
                to={`/detalle/anime/${rol.anime.mal_id}`}
                className="flex-1"
              >
                <div className="gap-1 flex flex-col items-start xs:flex-row-reverse xs:justify-end xs:gap-2">
                  <p className="line-clamp-1 text-xs xs:text-sm md:text-xs lg:text-base font-semibold">
                    {rol.anime.title}
                  </p>
                  <div className="border-2 border-main-black rounded-lg flex-1 max-w-[72px] min-w-[72px] max-h-[100px] min-h-[100px] overflow-hidden">
                    <img
                      src={rol.anime.images.jpg.image_url}
                      alt=""
                      className="min-h-[100px]"
                    />
                  </div>
                </div>
              </Link>
              <Link
                to={`/detalle/personaje/${rol.character.mal_id}`}
                className="flex-1"
              >
                <div className="gap-1 flex flex-col items-end xs:flex-row xs:items-start xs:justify-end xs:gap-2">
                  <p className="line-clamp-1 text-xs text-end xs:text-sm md:text-xs lg:text-base font-semibold lg:flex lg:flex-col lg:gap-2">
                    {rol.character.name}
                    <span className="hidden lg:inline-block font-normal text-sm">
                      {rol.role}
                    </span>
                  </p>
                  <div className="border-2 border-main-black rounded-lg flex-1 h-[100px] max-w-[72px] min-w-[72px] max-h-[100px] min-h-[100px] overflow-hidden">
                    <img
                      src={rol.character.images.jpg.image_url}
                      alt=""
                      className="min-h-[100px]"
                    />
                  </div>
                </div>
              </Link>
            </>
          </MotionListItem>
        ))}
      </ul>
    </SubSectionDetalle>
  );
};

export default DoblajesPersona;
