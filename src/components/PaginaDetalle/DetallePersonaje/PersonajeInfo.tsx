import SectionDetalle from "../SectionDetalle";

type Props = {
  info: string;
};

const PersonajeInfo = ({ info }: Props) => {
  return (
    <SectionDetalle titulo={"Informacion principal"}>
      <p className="whitespace-pre-line">{info}</p>
    </SectionDetalle>
  );
};

export default PersonajeInfo;
