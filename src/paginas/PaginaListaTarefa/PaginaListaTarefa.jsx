import { useState } from "react";
import BotaoCustomizado from "../../componentes/BotaoCustomizado/BotaoCustomizado";
import Principal from "../../componentes/Principal/Principal";
import "./PaginaListaTarefa.css";

function PaginaListaTarefa() {
  const [descricaoTarefa, setdescricaoTarefa] = useState("");

  const adicaoTarefa = () => {};

  return (
    <Principal titulo="ListaTarefas" backto="/">
      <input
        type="text"
        placeholder="Digite uma tarefa"
        value={descricaoTarefa}
        onChange={(evento) => {
          setdescricaoTarefa(evento.target.value);
        }}
      />
      <BotaoCustomizado tipo="primario" Aoclicar={adicaoTarefa}>
        Adicionar Tarefas{" "}
      </BotaoCustomizado>
    </Principal>
  );
}

export default PaginaListaTarefa;
