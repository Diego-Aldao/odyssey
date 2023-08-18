import episodiosDetalle from "../../../mocks/detalle/Episodios.json";
import SectionDetalle from "../SectionDetalle";

const EpisodiosDetalle = () => {
  return (
    <SectionDetalle titulo="episodios">
      <div className="grid sm:grid-cols-2 gap-2 lg:grid-cols-4">
        {episodiosDetalle.data.slice(0, 4).map((episodio) => (
          <article
            key={episodio.mal_id}
            className="mb-5 flex flex-col max-w-sm mx-auto w-full"
          >
            <p className="capitalize">episodio {episodio.mal_id}</p>
            <div className="rounded-xl overflow-hidden border-2 border-main-black my-1">
              <img src={episodio.images.jpg.image_url} alt="" />
            </div>
            <p className="self-end">{episodio.title}</p>
          </article>
        ))}
      </div>
    </SectionDetalle>
  );
};

export default EpisodiosDetalle;
