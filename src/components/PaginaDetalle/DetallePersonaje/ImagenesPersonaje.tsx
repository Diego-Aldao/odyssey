import { BASE_URL_DETAILS_CHARACTER } from "../../../constants";
import useFetch from "../../../hooks/useFetch";
import { ApiResponseImagenesPersonaje } from "../../../types";
import SectionDetalle from "../SectionDetalle";
import imagenes from "../../../mocks/ImagenesPersonajes.json";

type Props = {
  id: string | undefined;
};

const ImagenesPersonaje = ({ id }: Props) => {
  /*   const { respuestaApi, loading } = useFetch<ApiResponseImagenesPersonaje>(
    `${BASE_URL_DETAILS_CHARACTER}/${id || ""}/pictures`
  ); */

  console.log(imagenes);

  return (
    <SectionDetalle titulo="imagenes">
      <div className="grid grid-cols-[repeat(auto-fill,minmax(130px,1fr))] lg:grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-2 ">
        {imagenes.data.map((imagen) => (
          <div className="rounded-lg border-2 border-main-black overflow-hidden">
            <img src={imagen.jpg.image_url} alt="" />
          </div>
        ))}
      </div>
    </SectionDetalle>
  );
};

export default ImagenesPersonaje;
