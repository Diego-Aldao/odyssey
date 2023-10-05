import SubSectionDetalle from "../SubSectionDetalle";

type Props = {
  info: string;
};

const PersonajeInfo = ({ info }: Props) => {
  return (
    <SubSectionDetalle
      titulo={"Informacion principal"}
      visibleContent="general"
    >
      <p className="whitespace-pre-line text-main-black">{info}</p>
    </SubSectionDetalle>
  );
};

export default PersonajeInfo;
