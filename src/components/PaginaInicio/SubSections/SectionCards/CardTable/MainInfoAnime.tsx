import { Aired } from "../../../../../types";

type Props = {
  tipo: string;
  episodios: number | null;
  fecha: Aired;
  miembros: number;
};

const MainInfoAnime = ({ tipo, episodios, fecha, miembros }: Props) => {
  const currentTipo = tipo === "TV" ? "anime" : tipo.toLowerCase();

  const fechaInicio = new Date(fecha.from).toLocaleDateString("es-AR", {
    month: "short",
    year: "numeric",
  });

  const fechaFin =
    fecha.to &&
    new Date(fecha.to).toLocaleDateString("es-AR", {
      month: "short",
      year: "numeric",
    });
  return (
    <ul className="flex flex-col gap-2 h-full">
      <li className="text-xs xs:text-sm lg:text-base capitalize">
        {currentTipo}{" "}
        {currentTipo !== "movie" && episodios && `de ${episodios} episodios`}
      </li>
      <li className="text-xs capitalize lg:text-sm">
        {fechaInicio}{" "}
        {currentTipo !== "movie" && `- ${fechaFin ? fechaFin : ""}`}
      </li>
      <li className="text-xs capitalize lg:text-sm">
        {miembros?.toLocaleString()} miembros
      </li>
    </ul>
  );
};

export default MainInfoAnime;
