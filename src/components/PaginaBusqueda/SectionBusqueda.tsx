type Props = {
  seccion: string;
  children: JSX.Element;
  currentContent: string | undefined;
};

const SectionBusqueda = ({ seccion, children, currentContent }: Props) => {
  const seccionVisible =
    seccion === currentContent ||
    currentContent === "general" ||
    !currentContent;

  return (
    <section
      className={`mt-10 ${
        seccionVisible ? "flex" : "hidden"
      } flex-col gap-5 lg:gap-10`}
    >
      <p className="capitalize item-skew-izquierda z-[1] relative bg-main-black text-main-color-background w-fit -left-4 pl-4 md:-left-6 lg:-left-10 md:pl-6 lg:pl-10 md:px-10 py-1 xs:text-lg md:text-xl">
        resultados en {seccion}
      </p>

      {children}
    </section>
  );
};

export default SectionBusqueda;
