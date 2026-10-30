import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PaginaInicial from "./paginas/PaginaInicial/PaginaInicial";
import PaginaListaProdutos from "./componentes/PaginaListaProdutos/PaginaListaProdutos";
import PaginaListaTarefa from "./paginas/PaginaListaTarefa/PaginaListaTarefa";
import PaginaCadastroCliente from "./paginas/PaginaCadastroCliente/PaginaCadastroCliente";
import PaginaListaClientes from "./paginas/PaginaListaClientes/PaginaListaClientes";

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
  {
    path: "Lista-clientes",
    element: <PaginaListaClientes />,
  },
]);

function Roteador() {
  return <RouterProvider router={roteador} />;
}

export default Roteador;
