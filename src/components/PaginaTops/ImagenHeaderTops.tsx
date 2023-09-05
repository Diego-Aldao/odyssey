import imagenAnime from "../../assets/imgHeaderTops.png";

const ImagenHeaderTops = () => {
  return (
    <div className="absolute hidden md:block md:-right-10 md:-top-10 lg:-top-12 lg:-right-10 lg:h-full md:min-h-[45vw] h-full overflow-hidden lg:min-h-[45vw] xl:min-h-[550px] md:w-[60vw] lg:w-auto">
      <img src={imagenAnime} alt="" className="object-contain" />
    </div>
  );
};

export default ImagenHeaderTops;
