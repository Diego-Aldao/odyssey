import mainAnime from "../../../assets/ImagenPrincipal.png";

const MainImagen = () => {
  return (
    <div className="hidden xs:block xs:col-start-2 xs:col-span-2 personaje h-[100vw] max-h-[450px] md:max-h-[550px] lg:max-h-[700px] md:h-[60vw] md:absolute -top-0 -right-8">
      <img src={mainAnime} alt="" className="object-contain" />
    </div>
  );
};

export default MainImagen;
