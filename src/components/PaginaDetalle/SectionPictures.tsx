import useFetch from "../../hooks/useFetch";
import { ApiResponseDetallePictures } from "../../types";
import SectionDetalle from "./SectionDetalle";

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
        <SectionDetalle titulo={`imagenes de ${nombre}`}>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(130px,1fr))] lg:grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-2 ">
            {respuestaApi.data.map((imagen) => (
              <div className="rounded-lg border-2 border-main-black overflow-hidden">
                <img src={imagen.jpg.image_url} alt="" />
              </div>
            ))}
          </div>
        </SectionDetalle>
      )}
    </>
  );
};

export default SectionPictures;
