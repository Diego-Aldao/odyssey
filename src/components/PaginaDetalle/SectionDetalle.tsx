type Props = {
  children: JSX.Element;
  titulo: string;
};
const SectionDetalle: React.FC<Props> = ({ titulo, children }) => {
  return (
    <section className="mb-10">
      <header className="mb-3">
        <h3 className="subtitulo-detalle item-skew-izquierda">{titulo}</h3>
      </header>
      {children}
    </section>
  );
};

export default SectionDetalle;
