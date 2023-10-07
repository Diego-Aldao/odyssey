type Props = {
  sobrenombres: string[];
};

const MainInfoPersonaje = ({ sobrenombres }: Props) => {
  return (
    <ul className="flex flex-col gap-2 h-full text-main-black">
      <li className="capitalize max-w-[350px]">
        {sobrenombres.map((sobrenombre, index) => {
          if (sobrenombres.length === index + 1) {
            return (
              <span
                key={sobrenombre}
                className="text-xs md:text-sm lg:text-base"
              >
                {sobrenombre}
              </span>
            );
          } else {
            return (
              <span
                key={sobrenombre}
                className="text-xs md:text-sm lg:text-base"
              >
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
