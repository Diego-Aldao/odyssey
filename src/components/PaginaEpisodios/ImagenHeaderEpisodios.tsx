import imagenAnime from "../../assets/imgHeaderEpisodios.png";
import ImagenHeaderMotion from "../FramerMotion/ImagenHeaderMotion";

const ImagenHeaderEpisodios = () => {
  return (
    <ImagenHeaderMotion>
      <div className="absolute hidden md:block -right-6 md:-top-10 lg:-top-16 lg:-right-10 md:min-h-[45vw] h-full overflow-hidden xl:min-h-[550px]">
        <img src={imagenAnime} alt="" />
      </div>
    </ImagenHeaderMotion>
  );
};

export default ImagenHeaderEpisodios;
