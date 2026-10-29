import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PaginaInicial from "./paginas/PaginaInicial/PaginaInicial";
import PaginaListaProdutos from "./componentes/PaginaListaProdutos/PaginaListaProdutos";
import PaginaListaTarefa from "./paginas/PaginaListaTarefa/PaginaListaTarefa";
import PaginaCadastroCliente from "./paginas/PaginaCadastroCliente/PaginaCadastroCliente";

const roteador = createBrowserRouter([
  {
    path: "",
    element: <PaginaInicial />,
  },
  {
    path: "Lista-produtos",
    element: <PaginaListaProdutos />,
  },
  {
    path: "Lista-tarefas",
    element: <PaginaListaTarefa />,
  },
  {
    path: "Cadastro-cliente",
    element: <PaginaCadastroCliente />,
  },
]);

function Roteador() {
  return <RouterProvider router={roteador} />;
}

export default Roteador;
