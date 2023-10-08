type Props = {
  imagenUrl?: string;
};

const ImagenBackground: React.FC<Props> = ({ imagenUrl }) => {
  return (
    <div className="px-1 w-full absolute md:bg-gradient-to-b md:from-main-black pt-1 rounded-t-xl left-0 top-0">
      <div className="relative imagen-detalle max-h-[500px] md:max-h-[400px] overflow-hidden left-0 top-0 rounded-t-xl w-full">
        <img
          className="relative sm:-top-40 min-h-[400px] md:-top-60 lg:-top-80 xl:-top-96"
          src={imagenUrl}
          alt="imagen banner de anime"
        />
      </div>
    </div>
  );
};

export default ImagenBackground;
