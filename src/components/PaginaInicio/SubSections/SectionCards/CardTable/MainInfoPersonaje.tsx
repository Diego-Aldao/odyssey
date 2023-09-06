type Props = {
  sobrenombres: string[];
};

const MainInfoPersonaje = ({ sobrenombres }: Props) => {
  return (
    <ul className="flex flex-col gap-2 h-full">
      <li className="capitalize max-w-[350px]">
        {sobrenombres.map((sobrenombre, index) => {
          if (sobrenombres.length === index + 1) {
            return (
              <span className="text-xs md:text-sm lg:text-base">
                {sobrenombre}
              </span>
            );
          } else {
            return (
              <span className="text-xs md:text-sm lg:text-base">
                {sobrenombre},{" "}
              </span>
            );
          }
        })}
      </li>
    </ul>
  );
};

export default MainInfoPersonaje;
