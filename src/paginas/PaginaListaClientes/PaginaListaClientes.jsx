import Principal from "../../componentes/Principal/Principal";
import { buscarClientes } from "../../Servicos/clientes.servico";
import { MdOutlineEmail } from "react-icons/md";
import { IoMdPerson } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { BsPencilSquare } from "react-icons/bs";




import "./PaginaListaClientes.css";

function PaginaListaClientes() {
  const listaClientes = buscarClientes();

  return (
    <Principal titulo="Lista de clientes" backto="/">
      

      {listaClientes.map((cliente) => {
        return (
          <div className="PaginaListaCliente_cliente">
            <strong> <IoMdPerson />nome: {cliente.nome}</strong>
            <br />
            <strong><MdOutlineEmail /> Email: {cliente.email}</strong>
            <br />
            <strong><FaPhoneAlt />Telefone: {cliente.telefone}</strong>
            <br />
            <strong><FaCalendarAlt />Data de nascimento: {cliente.dataNascimento}</strong>
           <BsPencilSquare />
          </div>
        );
      })}
    </Principal>
  );
}
export default PaginaListaClientes;
