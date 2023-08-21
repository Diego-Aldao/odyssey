import SectionDetalle from "../SectionDetalle";
import personajes from "../../../mocks/detalle/Personajes.json";

const PersonajesDetalle = () => {
  return (
    <SectionDetalle titulo="personajes">
      <div className="grid gap-2 xs:grid-cols-2 md:gap-3 lg:grid-cols-2 lg:gap-x-5 lg:gap-3">
        {personajes.data.slice(0, 10).map((personaje) => (
          <article className="flex gap-2 justify-between">
            <div className="personaje flex gap-2 lg:w-1/2">
              <div className="rounded-xl border-2 border-main-black h-24 lg:h-22 min-w-[60px] max-w-[60px] overflow-hidden">
                <img src={personaje.character.images.webp.image_url} alt="" />
              </div>
              <div className="flex flex-col gap-1">
                <p className="font-bold md:text-sm">
                  {personaje.character.name}
                </p>
                <p className="text-xs capitalize">{personaje.role}</p>
                <p className="text-xs capitalize lg:hidden">
                  voz: {personaje.voice_actors[0].person.name}
                </p>
              </div>
            </div>
            <div className="voz gap-2 text-end hidden lg:flex lg:w-1/2 justify-end">
              <div className="flex flex-col gap-1">
                <p className="font-bold lg:text-sm">
                  {personaje.voice_actors[0].person.name}
                </p>
                <p className="text-xs capitalize">
                  {personaje.voice_actors[0].language}
                </p>
              </div>
              <div className="rounded-xl border-2 border-main-black h-24 lg:h-22 min-w-[60px] max-w-[60px] overflow-hidden">
                <img
                  src={personaje.voice_actors[0].person.images.jpg.image_url}
                  alt=""
                />
              </div>
            </div>
          </article>
        ))}
      </div>
    </SectionDetalle>
  );
};

export default PersonajesDetalle;