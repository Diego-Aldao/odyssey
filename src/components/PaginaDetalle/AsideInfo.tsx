import React from "react";
import { InfoAside } from "../../types";

type Props = {
  imagenUrl?: string;
  data: InfoAside[];
};

const AsideInfo: React.FC<Props> = ({ imagenUrl, data }) => {
  return (
    <aside className="hidden md:flex flex-col gap-10 z-20 relative col-start-1 w-full">
      <div className="border-2 rounded-xl overflow-hidden border-main-black  w-full">
        <img src={imagenUrl} alt="" />
      </div>
      <div className="info">
        <div className="border-b-[3px] border-main-black w-[calc(100%_+_14px)] lg:w-[calc(100%_+_18px)]">
          <p className="subtitulo-aside-detalle relative  capitalize text-lg inline-block text-main-color-background bg-main-black px-2 rounded-t-md rounded-tr-[10px]">
            información
          </p>
        </div>
        <ul className="flex flex-col gap-2 my-5">
          {data.map((item) => (
            <React.Fragment key={item.nombre}>
              {!Array.isArray(item.data) ? (
                <li>
                  <span className="capitalize">{item.nombre}: </span>
                  <span>{item.data?.toLocaleString()}</span>
                </li>
              ) : (
                <>
                  {item.data.length >= 1 && (
                    <li>
                      <span className="capitalize">{item.nombre}: </span>
                      {item.data.map((obj) => (
                        <span key={obj.mal_id}>{obj.name}</span>
                      ))}
                    </li>
                  )}
                </>
              )}
            </React.Fragment>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default AsideInfo;
