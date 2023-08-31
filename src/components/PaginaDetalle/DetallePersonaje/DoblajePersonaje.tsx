import { Voice } from "../../../types";
import SectionDetalle from "../SectionDetalle";

type Props = {
  dataDoblaje: Voice[];
};

const DoblajePersonaje = ({ dataDoblaje }: Props) => {
  return (
    <SectionDetalle titulo="actores de doblaje">
      <ul className="grid gap-4 xs:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 lg:gap-y-6">
        {dataDoblaje.map((item) => (
          <li key={item.person.mal_id} className="flex gap-2">
            <div className="min-h-[100px] max-h-[100px] max-w-[65px] overflow-hidden border-2 border-main-black rounded-lg">
              <img src={item.person.images.jpg.image_url} alt="" />
            </div>
            <div className="flex flex-col gap-1 ">
              <p className="text-sm lg:text-base font-semibold">
                {item.person.name}
              </p>
              <p className="text-xs lg:text-sm">{item.language}</p>
            </div>
          </li>
        ))}
      </ul>
    </SectionDetalle>
  );
};

export default DoblajePersonaje;
