import SectionContent from "../SectionContent";
import jsonEpisodios from "../../../../mocks/EpisodiosRecientes.json";
import { SwiperSlide } from "swiper/react";
import SectionCard from "../SectionCards/SectionCard/SectionCard";

type Props = {
  children: JSX.Element;
};

const SectionEpisodiosRecientes: React.FC<Props> = ({ children }) => {
  /*   const { fetchData, data } = useFetch();

  useEffect(() => {
    void fetchData("https://api.jikan.moe/v4/watch/episodes");
  }, []);

  useEffect(() => {
    if (!data) return;
    console.log(data);
  }, [data]); */

  return (
    <section className="sub_section">
      {children}
      <SectionContent subtitulo="los ultimos capítulos">
        <>
          {jsonEpisodios.data.slice(0, 25).map((item) => (
            <SwiperSlide key={item.entry.mal_id}>
              <SectionCard
                infoSection={{
                  id: item.entry.mal_id,
                  titulo: item.entry.title,
                  episodios: item.episodes,
                  imagenUrl: item.entry.images.webp.image_url,
                }}
              />
            </SwiperSlide>
          ))}
        </>
      </SectionContent>
    </section>
  );
};
export default SectionEpisodiosRecientes;
