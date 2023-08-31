import { AnimeElement } from "../../../types";

type Props = {
  imagenUrl: string | undefined;
  dataAside: AnimeElement[];
};

const AsidePersonaje = ({ imagenUrl, dataAside }: Props) => {
  return (
    <aside className="hidden md:flex flex-col gap-10 z-20 relative col-start-1 w-full lg:mt-20">
      <div className="border-2 rounded-xl overflow-hidden border-main-black w-full">
        <img src={imagenUrl} alt="" />
      </div>
      <div className="border-b-[3px] border-main-black w-[calc(100%_+_14px)] lg:w-[calc(100%_+_18px)]">
        <p className="item-skew-izquierda after:rounded-b-none after:skew-x-[-331deg] relative  capitalize text-lg inline-block text-main-color-background bg-main-black px-2 rounded-t-md rounded-tr-[10px]">
          animeografía
        </p>
      </div>
      <ul className="animes flex flex-col flex-wrap gap-4">
        {dataAside.map((item) => (
          <li className="flex gap-2">
            <div className="rounded-lg max-w-[50px] min-h-[62px] overflow-hidden border-2 border-main-black">
              <img src={item.anime.images.webp.image_url} alt="" />
            </div>
            <div className="flex flex-col gap-2 w-[calc(100%_-_58px)]">
              <span className="text-xs line-clamp-2 font-semibold">
                {item.anime.title}
              </span>
              <span className="text-xs">{item.role}</span>
            </div>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default AsidePersonaje;
