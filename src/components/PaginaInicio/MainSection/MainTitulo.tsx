type Props = {
  texto: string;
};

const MainTitulo: React.FC<Props> = ({ texto }) => {
  return <h1 className="main_titulo">{texto}</h1>;
};

export default MainTitulo;
