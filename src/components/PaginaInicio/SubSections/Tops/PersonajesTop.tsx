import SectionContent from "../SectionContent";
import jsonTopPersonaje from "../../../../mocks/PersonajeTop.json";
import { SwiperSlide } from "swiper/react";
import SectionCard from "../SectionCard/SectionCard";

const PersonajesTop = () => {
  /*   const { fetchData, data } = useFetch();

  useEffect(() => {
    void fetchData("https://api.jikan.moe/v4/top/characters");
  }, []);

  useEffect(() => {
    if (!data) return;
    console.log(data);
  }, [data]); */

  return (
    <SectionContent subtitulo="top de personajes">
      <>
        {jsonTopPersonaje.data.map((item) => (
          <SwiperSlide key={item.mal_id}>
            <SectionCard
              infoSection={{
                titulo: item.name,
                imagenUrl: item.images.webp.image_url,
              }}
            />
          </SwiperSlide>
        ))}
      </>
    </SectionContent>
  );
};
export default PersonajesTop;
