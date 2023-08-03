import SectionContent from "../SectionContent";
import jsonTrailers from "../../../../mocks/TrailersPopulares.json";
import { SwiperSlide } from "swiper/react";
import SectionCard from "../SectionCard/SectionCard";

type Props = {
  children: JSX.Element;
};

const SectionTrailersPopulares: React.FC<Props> = ({ children }) => {
  /*   const { fetchData, data } = useFetch();

  useEffect(() => {
    void fetchData("https://api.jikan.moe/v4/watch/promos/popular");
  }, []);

  useEffect(() => {
    if (!data) return;
    console.log(data);
  }, [data]); */

  return (
    <section className="sub_section">
      {children}
      <SectionContent noBackground={true}>
        <>
          {jsonTrailers.data.slice(0, 10).map((item) => (
            <SwiperSlide key={item.entry.mal_id}>
              <SectionCard
                noBackground={true}
                infoSection={{
                  titulo: item.entry.title,
                  imagenUrl: item.trailer.images.medium_image_url,
                  subtitulo: item.title,
                }}
              />
            </SwiperSlide>
          ))}
        </>
      </SectionContent>
    </section>
  );
};
export default SectionTrailersPopulares;
