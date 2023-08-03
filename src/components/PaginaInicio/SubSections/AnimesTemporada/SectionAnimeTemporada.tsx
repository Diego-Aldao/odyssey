import React from "react";
import SectionContent from "../SectionContent";
import jsonTemporada from "../../../../mocks/AnimeTemporada.json";
import { SwiperSlide } from "swiper/react";
import SectionCard from "../SectionCard/SectionCard";

type Props = {
  children: JSX.Element;
};

const SectionAnimeTemporada: React.FC<Props> = ({ children }) => {
  /*   const { fetchData, data } = useFetch();

  useEffect(() => {
    void fetchData("https://api.jikan.moe/v4/seasons/now");
  }, []);

  useEffect(() => {
    if (!data) return;
    console.log(data);
  }, [data]); */

  return (
    <section className="sub_section">
      {children}
      <SectionContent subtitulo={"verano 2023"}>
        <>
          {jsonTemporada.data.map((item) => (
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
    </section>
  );
};
export default SectionAnimeTemporada;
