import HeaderDetalle from "../HeaderDetalle";

type Props = {
  nombre: string;
  nombresAlternativos: string[];
  cumpleaños: Date;
  favoritos: number;
  sitioWeb: string | null;
};

const HeaderPersona = ({
  nombre,
  nombresAlternativos,
  cumpleaños,
  favoritos,
  sitioWeb,
}: Props) => {
  const fechaCumpleaños = new Date(cumpleaños).toLocaleDateString("es-AR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  return (
    <HeaderDetalle titulo={nombre}>
      <ul className="capitalize text-sm flex flex-wrap gap-2 mt-5 items-center justify-center md:justify-start text-main-color-background">
        {nombresAlternativos.length >= 1 && (
          <li className="flex gap-2 bg-main-black py-1 px-3 items-center rounded-sm">
            <p className="font-semibold md:text-base">tambien conocido como:</p>
            {nombresAlternativos.map((nombre, index) => {
              if (nombresAlternativos.length === index + 1) {
                return <span className="text-xs md:text-sm">{nombre}</span>;
              } else {
                return <span className="text-xs md:text-sm">{nombre}, </span>;
              }
            })}
          </li>
        )}
        <li className="flex gap-2 items-center bg-main-black py-1 px-3 rounded-sm">
          <p className="font-semibold md:text-base">cumpleaños:</p>
          <span className="text-xs md:text-sm">{fechaCumpleaños}</span>
        </li>
        <li className="flex gap-2 bg-main-black py-1 px-3 items-center rounded-sm">
          <p className="font-semibold md:text-base">favoritos:</p>
          <span className="text-xs md:text-sm">{favoritos}</span>
        </li>
        {sitioWeb && (
          <li className="flex gap-2 bg-main-black py-1 px-3 items-center rounded-sm">
            <p className="font-semibold md:text-base">sitio web:</p>
            <span className="text-xs md:text-sm">{sitioWeb}</span>
          </li>
        )}
      </ul>
    </HeaderDetalle>
  );
};

export default HeaderPersona;
