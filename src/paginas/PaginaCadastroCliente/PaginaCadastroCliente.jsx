import { useState } from "react";
import BotaoCustomizado from "../../componentes/BotaoCustomizado/BotaoCustomizado";
import CampoCustomizado from "../../componentes/CampoCustomizado/CampoCustomizado";
import Principal from "../../componentes/Principal/Principal";
import { formatarComMascara, MASCARA_CPF, MASCARA_TELEFONE } from "../../utils/FormatarComMascara";
import { toast } from "react-toastify";
import validarCPF from "../../utils/ValidarCPF";
import validarEmail from "../../utils/ValidarEmail";
import { salvarCliente } from "../../Servicos/clientes.servico";
function PaginaCadastroCliente() {
  const [nome, setnome] = useState("");
  const [email, setemail] = useState("");
    const [telefone, settelefone] = useState("");
  const [dataNascimento, setdataNascimento] = useState("");
  const [CPF, setCPF] = useState("");

  const salvar = () => {
    if(!nome.trim()){
      toast.warning("campo nome obrigatorio!");
      return
    }
     if(email.trim() && !validarEmail(email)){
      toast.warning("campo email invalido!");
      return
    }
     if(!telefone.trim()){
      toast.warning("campo telefone obrigatorio!");
      return
    }
     if(!dataNascimento.trim()){
      toast.warning("campo dataNascimento obrigatorio!");
      return
    }
     if(CPF.trim() && !validarCPF(CPF)){
      toast.warning("campo CPF invalido!");
      return
    }


    const cliente = {nome, email, telefone, dataNascimento, CPF};
    salvarCliente(cliente)
  };

  const puxarNome = (evento) => {
    setnome(evento.target.value);
  };
  const puxarEmail = (evento) => {
    setemail(evento.target.value);
  };
  const puxarTelefone = (evento) => {
    settelefone( formatarComMascara(evento.target.value,MASCARA_TELEFONE));
  };
  const puxarDtNascimento = (evento) => {
    setdataNascimento(evento.target.value);
  };
  const puxarCPF = (evento) => {
    setCPF(formatarComMascara(evento.target.value,MASCARA_CPF));
  };

  return (
    <Principal titulo="Novo cliente" backto="/">
      <CampoCustomizado
        label="Nome"
        type="text"
        placeholder="Digite uma tarefa"
        value={nome}
        onChange={puxarNome}
      />
      <CampoCustomizado
        label="email"
        type="text"
        placeholder="Digite seu email"
        value={email}
        onChange={puxarEmail}
      />
      <CampoCustomizado
        label="Telefone"
        type="tel"
        placeholder="Digite seu telefone"
        value={telefone}
        onChange={puxarTelefone}
        
      />
      <CampoCustomizado
        label="Data nascimento"
        type="date"
        placeholder="Digite sua data de nascimento"
        value={dataNascimento}
        onChange={puxarDtNascimento}
      />
      <CampoCustomizado
        label="CPF"
        type="text"
        placeholder="Digite seu CPF"
        value={CPF}
        onChange={puxarCPF}
        
      />

      <BotaoCustomizado tipo="primario" aoClicar={salvar}>Salvar</BotaoCustomizado>
    </Principal>
  );
}
export default PaginaCadastroCliente;
