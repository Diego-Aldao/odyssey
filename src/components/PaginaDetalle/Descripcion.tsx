type Props = {
  titulo: string;
  descripcion: string;
};
const Descripcion: React.FC<Props> = ({ titulo, descripcion }) => {
  return (
    <>
      <h3 className="subtitulo-detalle item-skew-izquierda">{titulo}</h3>
      <p className="mb-10">{descripcion}</p>
    </>
  );
};

export default Descripcion;
