type Props = {
  texto: string;
};
const MainTitulo: React.FC<Props> = ({ texto }) => {
  return (
    <div className="flex flex-col gap-4 xl:gap-6 xs:col-span-1 xs:min-h-[320px] md:col-span-2 mr-auto md:mx-0 md:max-w-[600px] z-[2] relative md:col-start-1">
      <h1 className="main_titulo">{texto}</h1>
      <p className="text-left text-sm font-semibold md:text-left md:text-base lg:text-xl flex flex-col">
        <span>Nunca olvides lo que has visto.</span>
        <span>Guarda lo que quieras ver.</span>
        <span>Comienza a rastrear tu anime hoy.</span>
      </p>
      <p className="flex items-center justify-center item-skew-izquierda relative bg-main-black text-main-color-background w-fit -left-4 px-10 pl-4 capitalize py-1 text-lg md:-left-6 md:pl-6 md:text-xl xl:text-2xl md:py-2 md:px-16 lg:-left-10 lg:pl-10 lg:px-20">
        explorar
      </p>
    </div>
  );
};

export default MainTitulo;
