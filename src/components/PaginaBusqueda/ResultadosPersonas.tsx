import { BASE_URL_PEOPLE } from "../../constants";
import useFetch from "../../hooks/useFetch";
import { ApiResponseTopPersona } from "../../types";
import CardBusqueda from "./CardBusqueda";

type Props = {
  query: string | undefined;
};

const ResultadosPersonas = ({ query }: Props) => {
  const url = `${BASE_URL_PEOPLE}?q=${query || ""}`;
  const { respuestaApi, loading } = useFetch<ApiResponseTopPersona>(url);

  return (
    <div className="grid gap-2 mt-10 md:grid-cols-2 md:gap-4 lg:grid-cols-3">
      <>
        {loading || !respuestaApi ? (
          <>cargando...</>
        ) : (
          <>
            {respuestaApi.data.map((persona) => {
              let fechaCumpleaños;
              if (persona.birthday) {
                fechaCumpleaños = new Date(persona.birthday).toLocaleDateString(
                  "es-AR",
                  {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  }
                );
              }

              return (
                <CardBusqueda
                  titulo={persona.name}
                  imagen={persona.images.jpg.image_url}
                  id={persona.mal_id}
                  tipo="persona"
                >
                  <>
                    {persona.given_name && (
                      <p className="text-xs font-semibold">
                        ({persona.given_name} {persona.family_name})
                      </p>
                    )}
                    {fechaCumpleaños && (
                      <p className="text-xs font-semibold">
                        cumpleaños:{" "}
                        <span className="font-normal">{fechaCumpleaños}</span>
                      </p>
                    )}

                    <p className="text-xs capitalize font-semibold">
                      favoritos:{" "}
                      <span className="font-normal">{persona.favorites}</span>
                    </p>
                  </>
                </CardBusqueda>
              );
            })}
          </>
        )}
      </>
    </div>
  );
};

export default ResultadosPersonas;
