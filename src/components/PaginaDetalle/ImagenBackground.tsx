type Props = {
  imagenUrl: string;
};

const ImagenBackground: React.FC<Props> = ({ imagenUrl }) => {
  return (
    <div className="absolute imagen-detalle max-h-[500px] md:max-h-[400px] overflow-hidden left-0 top-0 rounded-t-xl w-full">
      <img
        className="relative sm:-top-40 md:-top-60 lg:-top-80 xl:-top-96"
        src={imagenUrl}
        alt="imagen banner de anime"
      />
    </div>
  );
};

export default ImagenBackground;
