import SectionDetalle from "../SectionDetalle";
import noticias from "../../../mocks/detalle/Noticias.json";

const NoticiasDetalle = () => {
  return (
    <SectionDetalle titulo="noticias">
      <div className="grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-2 sm:gap-x-5 lg:gap-y-5">
        {noticias.data.map((noticia) => (
          <article className="flex gap-2 mb-3 items-start">
            <div className="rounded-xl border-2 border-main-black w-[70px] lg:w-[90px] min-h-[90px] overflow-hidden">
              <img src={noticia.images.jpg.image_url} alt="" />
            </div>
            <div className="w-[calc(100%_-_70px)] flex flex-col gap-1">
              <p className="text-sm max-w-sm font-bold">{noticia.title}</p>
              <p className="text-xs capitalize">
                autor: {noticia.author_username}
              </p>
              <p className="text-xs">{noticia.comments} comentarios</p>
              <p></p>
            </div>
          </article>
        ))}
      </div>
    </SectionDetalle>
  );
};

export default NoticiasDetalle;
