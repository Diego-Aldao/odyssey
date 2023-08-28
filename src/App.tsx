import PaginaEpisodios from "./pages/PaginaEpisodios";
import PaginaInicio from "./pages/PaginaInicio";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PaginaTemporadas from "./pages/PaginaTemporadas";
import PaginaTrailers from "./pages/PaginaTrailers";
import PaginaTops from "./pages/PaginaTops";
import PaginaDetalles from "./pages/PaginaDetalles";
import TopsPersonajes from "./components/PaginaTops/TopsPersonajes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PaginaInicio />,
  },
  {
    path: "/episodios/:filtro?",
    element: <PaginaEpisodios />,
  },
  {
    path: "/temporadas/:anio/:season?",
    element: <PaginaTemporadas />,
  },
  {
    path: "/trailers",
    element: <PaginaTrailers />,
  },
  {
    path: "/tops",
    element: <PaginaTops />,
    children: [
      {
        path: "personajes",
        element: <TopsPersonajes />,
      },
    ],
  },
  {
    path: "/detalle/:tipo/:id",
    element: <PaginaDetalles />,
  },
]);

function App() {
  return (
    <div className="bg-main-black w-full xs:border-4 rounded-xl max-w-[1300px] mx-auto border-main-color-background xs:p-3">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
