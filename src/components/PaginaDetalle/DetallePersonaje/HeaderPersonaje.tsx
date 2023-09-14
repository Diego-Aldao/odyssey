import HeaderDetalle from "../HeaderDetalle";

type Props = {
  nombre: string;
  sobrenombres: string[];
};

const HeaderPersonaje = ({ nombre, sobrenombres }: Props) => {
  return (
    <HeaderDetalle titulo={nombre}>
      <>
        {sobrenombres.length >= 1 && (
          <p className="text-lg text-main-black md:text-left mb-5">
            (
            {sobrenombres.map((nickname, index) => {
              if (sobrenombres.length === index + 1) {
                return <span key={nickname}>{nickname}</span>;
              } else {
                return <span key={nickname}>{nickname}, </span>;
              }
            })}
            )
          </p>
        )}
      </>
    </HeaderDetalle>
  );
};

export default HeaderPersonaje;
