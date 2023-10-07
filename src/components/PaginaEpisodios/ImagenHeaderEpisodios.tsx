import imagenAnime from "../../assets/imgHeaderEpisodios.png";
import ImagenHeaderMotion from "../FramerMotion/ImagenHeaderMotion";

const ImagenHeaderEpisodios = () => {
  return (
    <ImagenHeaderMotion>
      <div className="absolute hidden md:block md:-right-0 md:-top-12 lg:-top-[75px] md:min-h-[42vw] h-full overflow-hidden xl:min-h-[550px]">
        <img src={imagenAnime} alt="" />
      </div>
    </ImagenHeaderMotion>
  );
};

export default ImagenHeaderEpisodios;
