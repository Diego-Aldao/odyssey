type Props = {
  children: JSX.Element;
};

const MainSectionDetalle = ({ children }: Props) => {
  return (
    <section className="relative z-[1] md:col-span-2 lg:col-span-3 section-detalle md:mt-10">
      {children}
    </section>
  );
};

export default MainSectionDetalle;
