import { Icon } from "@iconify/react";
import HeaderDetalle from "../../HeaderDetalle";
import { InfoTags } from "../../../../types";
import ListaTags from "./ListaTags";
import Trailer from "./Trailer";
type Props = {
  tituloEspañol?: string;
  titulo: string;
  score: number | null;
  personasScore?: number;
  imagenTrailer: string;
  handleClick: () => void;
  listaTags: InfoTags[];
};

const HeaderAnime = ({
  tituloEspañol,
  titulo,
  score,
  personasScore,
  imagenTrailer,
  listaTags,
  handleClick,
}: Props) => {
  return (
    <HeaderDetalle titulo={titulo}>
      <>
        {tituloEspañol && (
          <p
            className="text-lg text-main-color-background drop-shadow-[0px_0px_5px_#000000] md:text-left
        "
          >
            ({tituloEspañol})
          </p>
        )}
        <div className="flex gap-4 items-start justify-center md:justify-start mt-5">
          {score !== null && (
            <p className="text-xl hidden lg:flex flex-col gap-2 justify-start rounded-sm">
              <span className="flex items-center gap-1 text-3xl drop-shadow-[0px_0px_3px_#000] text-main-color-background-static">
                <Icon
                  icon="ph:star-bold"
                  className="h-[22px] w-[22px] drop-shadow-[0px_0px_10px_#000]"
                />
                {score}
              </span>
              <span className="text-xs text-main-color-background-static drop-shadow-[0px_0px_3px_#000]">
                ({personasScore?.toLocaleString()})
              </span>
            </p>
          )}
          <ListaTags mainInfo={listaTags} />
          <Trailer handleClick={handleClick} imagen={imagenTrailer} />
        </div>
      </>
    </HeaderDetalle>
  );
};

export default HeaderAnime;
