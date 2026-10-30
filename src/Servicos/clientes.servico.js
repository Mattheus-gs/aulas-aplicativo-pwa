import { buscarLocalStorage, salvarLocalStorage } from "./localstorage_servico";

function salvarCliente(cliente) {
  const clientes = buscarLocalStorage("clientes") || [];

  clientes.push(cliente);

  salvarLocalStorage("clientes", clientes);
}

function buscarClientes(){
    return buscarLocalStorage("clientes") || [];
}
export { salvarCliente, buscarClientes };


