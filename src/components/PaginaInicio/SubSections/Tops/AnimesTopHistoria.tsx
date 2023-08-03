import SectionContent from "../SectionContent";
import jsonTopHistoria from "../../../../mocks/AnimeTopAllTime.json";
import { SwiperSlide } from "swiper/react";
import SectionCard from "../SectionCard/SectionCard";

const AnimesTopHistoria = () => {
  /*   const { fetchData, data } = useFetch();

  useEffect(() => {
    void fetchData("https://api.jikan.moe/v4/top/anime?type=tv");
  }, []);

  useEffect(() => {
    if (!data) return;
    console.log(data);
  }, [data]); */

  return (
    <SectionContent subtitulo="top de la historia">
      <>
        {jsonTopHistoria.data.map((item) => (
          <SwiperSlide key={item.mal_id}>
            <SectionCard
              infoSection={{
                titulo: item.title,
                imagenUrl: item.images.webp.image_url,
              }}
            />
          </SwiperSlide>
        ))}
      </>
    </SectionContent>
  );
};
export default AnimesTopHistoria;
