import { Voice } from "../../../types";
import SubSectionDetalle from "../SubSectionDetalle";
import { Link } from "react-router-dom";
import MotionListItem from "../FramerMotion/MotionListItem";
import MotionUnorderedList from "../FramerMotion/MotionUnorderedList";

type Props = {
  dataDoblaje: Voice[];
};

const DoblajePersonaje = ({ dataDoblaje }: Props) => {
  return (
    <SubSectionDetalle titulo="actores de doblaje" visibleContent="general">
      <MotionUnorderedList clases="grid gap-4 xs:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 lg:gap-y-6">
        <>
          {dataDoblaje.map((item) => (
            <MotionListItem key={item.person.mal_id} clases="">
              <Link
                to={`/detalle/persona/${item.person.mal_id}`}
                className="flex gap-2"
              >
                <div className="min-h-[100px] max-h-[100px] max-w-[65px] overflow-hidden border-2 border-main-black rounded-lg">
                  <img src={item.person.images.jpg.image_url} alt="" />
                </div>
                <div className="flex flex-col gap-1 ">
                  <p className="text-sm lg:text-base font-medium">
                    {item.person.name}
                  </p>
                  <p className="text-xs lg:text-sm">{item.language}</p>
                </div>
              </Link>
            </MotionListItem>
          ))}
        </>
      </MotionUnorderedList>
    </SubSectionDetalle>
  );
};

export default DoblajePersonaje;
