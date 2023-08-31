type Props = {
  nombre: string;
  sobrenombres: string[];
};

const HeaderPersonaje = ({ nombre, sobrenombres }: Props) => {
  return (
    <header className="md:h-auto text-center h-[500px] flex flex-col justify-end mb-10">
      <h1 className="text-[42px] leading-10 uppercase font-bold font-chivo text-center md:text-left xs:text-5xl lg:text-6xl xl:text-7xl text-main-color-background drop-shadow-[0px_0px_8px_#000000]">
        {nombre}
      </h1>
      {sobrenombres.length >= 1 && (
        <p
          className="text-lg text-main-black md:text-left mb-5 
    "
        >
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
    </header>
  );
};

export default HeaderPersonaje;
