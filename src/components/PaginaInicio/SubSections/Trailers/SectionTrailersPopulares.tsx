import { useEffect, useState } from "react";
import SectionContent from "../SectionContent";
import { SwiperSlide } from "swiper/react";
import SectionCard from "../SectionCards/SectionCard/SectionCard";
import useFetch from "../../../../hooks/useFetch";
import { ApiResponseTrailers, DataTrailers } from "../../../../types";
import { BASE_URL_TRAILERS } from "../../../../constants";

type Props = {
  children: JSX.Element;
  noBackground: boolean;
};

const SectionTrailersPopulares: React.FC<Props> = ({
  noBackground,
  children,
}) => {
  const { fetchData, data, loading } = useFetch<ApiResponseTrailers>();
  const [currentData, setCurrentData] = useState<DataTrailers[]>();

  useEffect(() => {
    void fetchData(`${BASE_URL_TRAILERS}/popular`);
  }, []);

  useEffect(() => {
    if (!data) return;
    setCurrentData(data.data.slice(0, 10));
  }, [data]);

  return (
    <>
      {loading || !currentData ? (
        <>cargando</>
      ) : (
        <section className="sub_section">
          {children}
          <SectionContent noBackground={noBackground}>
            <>
              {currentData.map((item) => (
                <SwiperSlide key={item.entry.mal_id}>
                  <SectionCard
                    noBackground={noBackground}
                    id={item.entry.mal_id}
                    titulo={item.entry.title}
                    imagenUrl={item.trailer.images.medium_image_url}
                    subtitulo={item.title}
                  />
                </SwiperSlide>
              ))}
            </>
          </SectionContent>
        </section>
      )}
    </>
  );
};
export default SectionTrailersPopulares;
