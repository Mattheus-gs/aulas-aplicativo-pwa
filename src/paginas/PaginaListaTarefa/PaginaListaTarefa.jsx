import { useState } from "react";
import BotaoCustomizado from "../../componentes/BotaoCustomizado/BotaoCustomizado";
import CampoCustomizado from "../../componentes/CampoCustomizado/CampoCustomizado";
import Principal from "../../componentes/Principal/Principal";
import "./PaginaListaTarefa.css";
import { HiMiniTrash } from "react-icons/hi2";

function PaginaListaTarefa() {
  // 1. Criar os estados
  const [descricaoTarefa, setDescricaoTarefa] = useState("");
  const [tarefas, setTarefas] = useState([]);

  // 2. Capturar o texto digitado
  const aoDigitar = (evento) => {
    setDescricaoTarefa(evento.target.value);
  };

  // 3. Adicionar a tarefa ao array
  const adicionaTarefas = () => {
    if (descricaoTarefa.trim()) {
      const totalTarefa = { id: Date.now(), descricao: descricaoTarefa };

      setTarefas([...tarefas, totalTarefa]);
      setDescricaoTarefa("");
    } else {
      alert("gloria a deus");
    }
  };
  const removerTarefa = (id) => {
    if (confirm("deseja remover esta tarefa")) { //confirmação para excluir
      const tarefasrAtuais = tarefas.filter((item) => item.id !== id);
      setTarefas(tarefasrAtuais);
    }
  };
<hr />
  // 4. Exibir os componentes e as tarefas
  return (
    <Principal titulo="ListaTarefas" backto="/">
      <CampoCustomizado
        label="Tarefa"
        type="text"
        placeholder="Digite uma tarefa"
        value={descricaoTarefa}
        onChange={aoDigitar}
      />

      <BotaoCustomizado tipo="primario" aoClicar={adicionaTarefas}>
        Adicionar Tarefa
      </BotaoCustomizado>

      {tarefas.map((item) => {
        return (
          <div key={item.id} className="PaginaListaTarefas_item">
            <span>
              <input type="checkbox" />
              {item.descricao}
            </span>
            <HiMiniTrash
              color="red"
              onClick={() => removerTarefa(item.id)}
              cursor="pointer"
            />
          </div>
        );
      })}



      {!tarefas.length && <span className="PaginaListaTarefas_vazia"> nenhuma tarefa cadastrada</span>}
    </Principal>
  );
}

export default PaginaListaTarefa;
