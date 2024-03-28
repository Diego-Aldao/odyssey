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
import DetallePersona from "./components/PaginaDetalle/DetallePersona/DetallePersona";
import DetalleAnime from "./components/PaginaDetalle/DetalleAnime/DetalleAnime";
import DetallePersonaje from "./components/PaginaDetalle/DetallePersonaje/DetallePersonaje";
import PaginaNotFound from "./pages/PaginaNotFound";
import PaginaBusqueda from "./pages/PaginaBusqueda";
import { DarkModeContextProvider } from "./context/DarkModeContext";

const router = createBrowserRouter([
  {
    path: "*",
    element: <PaginaNotFound />,
  },
  {
    path: "/",
    element: <PaginaInicio />,
  },
  {
    path: "/episodios/:filtro?",
    element: <PaginaEpisodios />,
  },
  {
    path: "/temporadas/:anio?/:season?",
    element: <PaginaTemporadas />,
  },
  {
    path: "/trailers/:filtro?",
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
        path: "anime/:id/:seccion?",
        element: <DetalleAnime />,
      },
      {
        path: "personaje/:id",
        element: <DetallePersonaje />,
      },
    ],
  },
  {
    path: "/busqueda/:query/:tipo?",
    element: <PaginaBusqueda />,
  },
]);

function App() {
  return (
    <div className="bg-main-black w-full max-w-[1440px] mx-auto rounded-md p-1 md:p-2">
      <DarkModeContextProvider>
        <RouterProvider router={router} />
      </DarkModeContextProvider>
    </div>
  );
}

export default App;
