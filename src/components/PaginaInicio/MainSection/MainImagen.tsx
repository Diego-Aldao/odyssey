import mainAnime from "../../../assets/imgPrincipal.png";

const MainImagen = () => {
  return (
    <div className="hidden xs:block xs:col-start-2 xs:row-start-1 xs:col-span-2 h-full xs:-top-6 xs:right-8 md:-top-14 md:-right-6 md:max-w-[600px] lg:-top-20 xl:max-h-[750px] xl:-right-10 xs:w-[120%] relative xs:max-h-[300px] md:max-h-[550px] lg:max-h-[620px] lg:max-w-[800px] lg:-right-20 md:h-[55vw] md:absolute">
      <img src={mainAnime} alt="" className="object-contain" />
    </div>
  );
};

export default MainImagen;
