import { MangaElementPersona } from "../../../types";
import SectionDetalle from "../SectionDetalle";

type Props = {
  mangas: MangaElementPersona[];
};

const MangasPersona = ({ mangas }: Props) => {
  return (
    <SectionDetalle titulo="mangas publicados">
      <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
        {mangas.map((item) => (
          <article className="flex gap-2">
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
          </article>
        ))}
      </div>
    </SectionDetalle>
  );
};

export default MangasPersona;
