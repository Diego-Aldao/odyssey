import imagenTemporada from "../../assets/imgHeaderTemporadas.png";
import ImagenHeaderMotion from "../FramerMotion/ImagenHeaderMotion";

const ImagenHeaderTemporada = () => {
  return (
    <ImagenHeaderMotion>
      <div className="absolute hidden md:block -right-0 md:-top-10 lg:-top-14  md:min-h-[45vw] h-full overflow-hidden xl:min-h-[550px] ">
        <img src={imagenTemporada} alt="" className="object-fill" />
      </div>
    </ImagenHeaderMotion>
  );
};

export default ImagenHeaderTemporada;
