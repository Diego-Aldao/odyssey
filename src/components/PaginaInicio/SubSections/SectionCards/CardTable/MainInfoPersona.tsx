type Props = {
  nombreSecundario: string;
};

const MainInfoPersona = ({ nombreSecundario }: Props) => {
  return (
    <ul className="flex flex-col gap-2 h-full">
      <li className="capitalize max-w-[350px]">{nombreSecundario}</li>
    </ul>
  );
};

export default MainInfoPersona;
