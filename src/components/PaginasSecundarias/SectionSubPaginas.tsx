type Props = {
  btnVisible: boolean;
  setBtnVisible: React.Dispatch<React.SetStateAction<boolean>>;
  titulo: string;
  filtrosPrincipales: JSX.Element;
  filtrosSecundarios?: JSX.Element;
  children: JSX.Element;
  gridTable?: boolean;
  imagenHeader: JSX.Element;
};

const SectionSubPaginas: React.FC<Props> = ({
  filtrosPrincipales,
  filtrosSecundarios,
  setBtnVisible,
  btnVisible,
  titulo,
  children,
  imagenHeader,
}) => {
  const handleClick = () => {
    setBtnVisible(false);
  };

  return (
    <section
      className={`${
        btnVisible ? "" : "pb-10 lg:pb-16"
      } bg-main-color-background px-4 md:px-6 lg:px-10 pt-10 lg:pt-16 rounded-b-xl last_section section_sub_paginas`}
    >
      <header className="mb-10 md:mb-0 relative md:min-h-[280px] lg:min-h-[400px]">
        <h2 className="max-w-[400px] mx-auto md:mx-0 uppercase font-chivo text-4xl sm:text-5xl  md:text-7xl  lg:text-[115px] text-center md:text-left  font-bold md:-tracking-[5px] md:max-w-[62%] lg:max-w-[700px] lg lg:-tracking-[10px] relative z-[2] md:text-main-color-background md:drop-shadow-[0px_0px_8px_#000000] md:[text-shadow:_5px_5px_#23210f]">
          {titulo}
        </h2>
        {imagenHeader}
      </header>
      {filtrosPrincipales}
      {filtrosSecundarios}
      {children}
      <button
        onClick={handleClick}
        className={`${
          btnVisible ? "flex" : "hidden"
        } item-skew-x after:rounded-b-none after:rounded-t-[5px] after:skew-x-[-331deg] before:rounded-b-none before:rounded-t-[5px] before:skew-x-[331deg] z-[1] relative mt-10 mx-auto px-2 py-2 bg-main-black text-main-color-background capitalize text-xs md:text-base md:px-5`}
      >
        ver mas
      </button>
    </section>
  );
};

export default SectionSubPaginas;
