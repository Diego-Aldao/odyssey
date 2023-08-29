import PaginaEpisodios from "./pages/PaginaEpisodios";
import PaginaInicio from "./pages/PaginaInicio";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PaginaTemporadas from "./pages/PaginaTemporadas";
import PaginaTrailers from "./pages/PaginaTrailers";
import PaginaTops from "./pages/PaginaTops";
import PaginaDetalles from "./pages/PaginaDetalles";
import TopsPersonajes from "./components/PaginaTops/TopsPersonajes";
import TopsPersonas from "./components/PaginaTops/TopsPersonas";
import TopsAnime from "./components/PaginaTops/TopsAnime";
import DetallePersona from "./components/PaginaDetalle/DetallePersona";
import DetalleAnime from "./components/PaginaDetalle/DetalleAnime";
import DetallePersonaje from "./components/PaginaDetalle/DetallePersonaje";

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
      {
        path: "anime",
        element: <TopsAnime />,
      },
      {
        path: "personas",
        element: <TopsPersonas />,
      },
    ],
  },
  {
    path: "/detalle",
    element: <PaginaDetalles />,
    children: [
      {
        path: "persona/:id",
        element: <DetallePersona />,
      },
      {
        path: "anime/:id",
        element: <DetalleAnime />,
      },
      {
        path: "personaje/:id",
        element: <DetallePersonaje />,
      },
    ],
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
