import { From, Generic } from "../../../../../types";

type Props = {
  fecha: From;
  episodios: number | null;
  duracion: string;
  generos: Generic[];
};

const SecondaryInfo: React.FC<Props> = ({
  fecha,
  episodios,
  duracion,
  generos,
}) => {
  return (
    <div className="info-secundaria hidden  w-full md:flex flex-col gap-2">
      <div className="info-numeros flex gap-2 items-center justify-center text-xs">
        <p>
          {fecha.month}/{fecha.day}/{fecha.year}
        </p>
        {episodios ||
          (duracion !== "Unknown" && (
            <>
              |
              <p>
                {episodios ? "eps" : ""}
                <span className="inline-block ml-1">
                  {duracion !== "Unknown" && duracion}
                </span>
              </p>
            </>
          ))}
      </div>
      <ul className="info-generos flex gap-2 items-center justify-center text-xs">
        {generos.map((genero) => (
          <li
            key={genero.mal_id}
            className="bg-main-black text-main-color-background px-2 py-1 rounded-sm"
          >
            {genero.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SecondaryInfo;
