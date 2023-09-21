import { MangaElementPersona } from "../../../types";
import MotionListItem from "../FramerMotion/MotionListItem";
import SubSectionDetalle from "../SubSectionDetalle";

type Props = {
  mangas: MangaElementPersona[];
};

const MangasPersona = ({ mangas }: Props) => {
  return (
    <SubSectionDetalle titulo="mangas publicados" visibleContent="general">
      <ul className="grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
        {mangas.map((item) => (
          <MotionListItem clases="flex gap-2" key={item.manga.mal_id}>
            <>
              <div className="min-h-[120px] min-w-[80px] max-h-[120px] max-w-[80px] rounded-lg border-2 border-main-black overflow-hidden">
                <img src={item.manga.images.webp.image_url} alt="" />
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-sm font-semibold">{item.manga.title}</p>
                <p className="text-xs font-semibold capitalize">
                  posicion:
                  <span className="font-normal"> {item.position}</span>
                </p>
              </div>
            </>
          </MotionListItem>
        ))}
      </ul>
    </SubSectionDetalle>
  );
};

export default MangasPersona;
