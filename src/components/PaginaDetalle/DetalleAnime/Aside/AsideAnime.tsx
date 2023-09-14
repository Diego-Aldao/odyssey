import { InfoAside } from "../../../../types";
import React from "react";

type Props = {
  data: InfoAside[];
};

const AsideAnime = ({ data }: Props) => {
  return (
    <ul className="flex flex-col gap-2 my-5">
      {data.map((item) => (
        <React.Fragment key={item.nombre}>
          {!Array.isArray(item.data) ? (
            <li>
              <span className="capitalize font-semibold">{item.nombre}:</span>{" "}
              <span className="text-sm">{item.data?.toLocaleString()}</span>
            </li>
          ) : (
            <>
              {item.data.length >= 1 && (
                <li>
                  <span className="capitalize font-semibold">
                    {item.nombre}:{" "}
                  </span>
                  {item.data.map((obj) => (
                    <span key={obj.mal_id} className="text-sm">
                      {obj.name}{" "}
                    </span>
                  ))}
                </li>
              )}
            </>
          )}
        </React.Fragment>
      ))}
    </ul>
  );
};

export default AsideAnime;
