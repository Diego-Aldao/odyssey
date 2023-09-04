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
    <header className="md:h-auto text-center h-[500px] flex flex-col justify-end mb-10">
      <h1 className="text-[42px] leading-10 uppercase font-bold font-chivo text-center md:text-left xs:text-5xl lg:text-6xl xl:text-7xl text-main-color-background drop-shadow-[0px_0px_8px_#000000]">
        {nombre}
      </h1>
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
        <li className="flex gap-1 items-center bg-main-black py-1 px-3 rounded-sm">
          <p className="font-semibold md:text-base">cumpleaños:</p>
          <span className="text-xs md:text-sm">{fechaCumpleaños}</span>
        </li>
        <li className="flex gap-2 bg-main-black py-1 px-3 items-center rounded-sm">
          <p className="font-semibold md:text-base">favoritos:</p>
          <span className="text-xs md:text-sm">{favoritos}</span>
        </li>
        {sitioWeb && (
          <li className="bg-main-black py-1 px-3 items-center rounded-sm">
            <p className="font-semibold md:text-base">sitio web:</p>
            <span className="text-xs md:text-sm">{sitioWeb}</span>
          </li>
        )}
      </ul>
    </header>
  );
};

export default HeaderPersona;
