import PaginaEpisodios from "./pages/PaginaEpisodios";
import PaginaInicio from "./pages/PaginaInicio";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PaginaTemporadas from "./pages/PaginaTemporadas";
import PaginaTrailers from "./pages/PaginaTrailers";
import PaginaTops from "./pages/PaginaTops";
import PaginaDetalles from "./pages/PaginaDetalles";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PaginaInicio />,
  },
  {
    path: "/episodios",
    element: <PaginaEpisodios />,
  },
  {
    path: "/temporadas",
    element: <PaginaTemporadas />,
  },
  {
    path: "/trailers",
    element: <PaginaTrailers />,
  },
  {
    path: "/tops",
    element: <PaginaTops />,
  },
  {
    path: "/detalle/:tipo/:id",
    element: <PaginaDetalles />,
  },
]);

function App() {
  return (
    <div className="bg-main-black w-full xs:border-4 rounded-xl max-w-screen-2xl mx-auto  border-main-color-background xs:p-3">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
