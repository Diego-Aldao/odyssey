import useFetch from "../../hooks/useFetch";
import { ApiResponseDetallePictures } from "../../types";
import MotionListItem from "./FramerMotion/MotionListItem";
import SubSectionDetalle from "./SubSectionDetalle";

type Props = {
  id: string | undefined;
  nombre: string;
  baseUrl: string;
};

const SectionPictures = ({ id, nombre, baseUrl }: Props) => {
  const { respuestaApi, loading } = useFetch<ApiResponseDetallePictures>(
    `${baseUrl}/${id || ""}/pictures`
  );

  return (
    <>
      {loading || !respuestaApi ? (
        <>cargando</>
      ) : (
        <SubSectionDetalle titulo={`imagenes de ${nombre}`}>
          <ul className="grid grid-cols-[repeat(auto-fill,minmax(130px,1fr))] lg:grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-2 ">
            {respuestaApi.data.map((imagen) => (
              <MotionListItem clases="rounded-lg border-2 border-main-black overflow-hidden">
                <img src={imagen.jpg.image_url} alt="" />
              </MotionListItem>
            ))}
          </ul>
        </SubSectionDetalle>
      )}
    </>
  );
};

export default SectionPictures;
