import { Icon } from "@iconify/react";

type Props = {
  tituloEspañol?: string;
  titulo: string;
  score: number;
  personasScore: string;
  dataHeader: JSX.Element;
  children: JSX.Element;
};

const MainInfoDetalle = ({
  tituloEspañol,
  titulo,
  score,
  personasScore,
  dataHeader,
  children,
}: Props) => {
  return (
    <section className="relative z-20 md:col-span-2 lg:col-span-3 section-detalle">
      <header className="md:h-auto text-center h-[500px] flex flex-col justify-end mb-10">
        <h1
          className={`text-[42px] leading-10 uppercase font-bold font-chivo text-center md:text-left xs:text-5xl lg:text-6xl xl:text-7xl text-main-color-background drop-shadow-[0px_0px_8px_#000000] ${
            tituloEspañol ? "mb-1" : "mb-5"
          }`}
        >
          {titulo}
        </h1>

        {tituloEspañol && (
          <p
            className="text-lg text-main-color-background drop-shadow-[0px_0px_5px_#000000] md:text-left mb-5 
        "
          >
            ({tituloEspañol})
          </p>
        )}
        <div className="flex gap-4 items-start justify-center md:justify-start">
          <p className="text-xl hidden lg:flex flex-col gap-2 justify-start rounded-sm">
            <span className="flex items-center gap-1 text-3xl drop-shadow-[0px_0px_3px_#000] text-main-color-background">
              <Icon
                icon="ph:star-bold"
                className="h-[22px] w-[22px] drop-shadow-[0px_0px_10px_#000]"
              />
              {score}
            </span>
            <span className="text-xs text-main-color-background drop-shadow-[0px_0px_3px_#000]">
              ({personasScore.toLocaleString()})
            </span>
          </p>
          {dataHeader}
        </div>
      </header>
      {children}
    </section>
  );
};

export default MainInfoDetalle;
