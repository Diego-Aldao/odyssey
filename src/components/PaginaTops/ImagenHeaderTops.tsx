import imagenAnime from "../../assets/imgHeaderTops.png";
import ImagenHeaderMotion from "../FramerMotion/ImagenHeaderMotion";

const ImagenHeaderTops = () => {
  return (
    <ImagenHeaderMotion>
      <div className="absolute hidden md:block md:-right-12 md:-top-[105px] lg:-top-40 lg:-right-6 lg:h-full md:min-h-[50vw] h-full overflow-hidden lg:min-h-[55vw] xl:min-h-[670px] xl:-top-44 md:w-[60vw] lg:w-auto">
        <img src={imagenAnime} alt="" className="object-contain" />
      </div>
    </ImagenHeaderMotion>
  );
};

export default ImagenHeaderTops;
