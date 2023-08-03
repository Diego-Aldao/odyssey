import SectionContent from "../SectionContent";
import jsonTopEmision from "../../../../mocks/AnimeTopEnEmision.json";
import { SwiperSlide } from "swiper/react";
import SectionCard from "../SectionCard/SectionCard";

const AnimesTopEmision = () => {
  /*   const { fetchData, data } = useFetch();

  useEffect(() => {
    void fetchData("https://api.jikan.moe/v4/top/anime?type=tv&filter=airing");
  }, []);

  useEffect(() => {
    if (!data) return;
    console.log(data);
  }, [data]); */

  return (
    <SectionContent subtitulo="top en emision">
      <>
        {jsonTopEmision.data.map((item) => (
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
export default AnimesTopEmision;
