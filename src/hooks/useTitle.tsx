import { BASE_TITLE } from "../constants";

const useTitle = () => {
  const fijarTitulo = (titulo: string) => {
    document.title = `${titulo} ${BASE_TITLE}`;
  };

  return { fijarTitulo };
};

export default useTitle;
