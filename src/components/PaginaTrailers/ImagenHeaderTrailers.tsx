import imagenTrailers from "../../assets/imgHeaderTrailers.png";

const ImagenHeaderTrailers = () => {
  return (
    <div className="absolute hidden md:block -right-4 md:-top-10 lg:-top-14 lg:-right-10 md:min-h-[41vw] h-full overflow-hidden xl:min-h-[530px] ">
      <img src={imagenTrailers} alt="" className="object-fill" />
    </div>
  );
};

export default ImagenHeaderTrailers;
