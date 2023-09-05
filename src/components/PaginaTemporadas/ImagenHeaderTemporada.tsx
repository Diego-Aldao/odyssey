import imagenTemporada from "../../assets/imgHeaderTemporadas.png";

const ImagenHeaderTemporada = () => {
  return (
    <div className="absolute hidden md:block -right-6 md:-top-10 lg:-top-14 lg:-right-10 md:min-h-[45vw] h-full overflow-hidden xl:min-h-[550px] ">
      <img src={imagenTemporada} alt="" className="object-fill" />
    </div>
  );
};

export default ImagenHeaderTemporada;
