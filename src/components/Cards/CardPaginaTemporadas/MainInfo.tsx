import { Generic } from "../../../types";
import LazyLoadImage from "../../Generales/LazyLoadImage";
type Props = {
  imagen: string;
  sinopsis: string;
  origen: string;
  mainGeneros: Generic[];
  temas: Generic[];
  estudios: Generic[];
  titulo: string;
};

const MainInfo: React.FC<Props> = ({
  imagen,
  sinopsis,
  origen,
  mainGeneros,
  temas,
  titulo,
  estudios,
}) => {
  return (
    <div className="main-info md:flex w-full gap-2 h-full">
      <div className="main-info-img min-h-[190px] max-w-[210px] mx-auto xs:mx-0 md:w-1/2 rounded-lg overflow-hidden border-2 border-main-black  xs:min-h-[245px] md:min-h-[236px] lg:min-h-[204px] xl:min-h-[255px] max-h-[305px] h-full">
        <LazyLoadImage>
          <img src={imagen} alt={`imagen de portada del anime ${titulo}`} />
        </LazyLoadImage>
      </div>
      <div className="main-info-data hidden md:flex md:w-1/2 flex-col gap-4 justify-start">
        <p className="line-clamp-[5] text-sm text-main-black">{sinopsis}</p>
        <ul className="text-xs flex flex-col gap-2 text-main-black">
          <li>
            <span className="font-medium capitalize">estudio: </span>
            {estudios.map((estudio) => (
              <span key={estudio.mal_id}>{estudio.name}</span>
            ))}
          </li>
          <li>
            <span className="font-medium capitalize">origen: </span> {origen}
          </li>
          <li>
            <span className="font-medium capitalize">tematicas: </span>
            {temas.map((tema) => (
              <span key={tema.mal_id}>{tema.name} </span>
            ))}
          </li>
          {mainGeneros.length >= 1 && (
            <li>
              <span className="font-medium capitalize">tipo: </span>
              {mainGeneros.map((mainGenero) => (
                <span key={mainGenero.mal_id}>{mainGenero.name} </span>
              ))}
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default MainInfo;
