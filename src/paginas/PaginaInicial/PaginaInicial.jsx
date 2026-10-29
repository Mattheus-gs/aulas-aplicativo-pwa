import BotaoCustomizado from "../../componentes/BotaoCustomizado/BotaoCustomizado";
import Principal from "../../componentes/Principal/Principal";
import "./PaginaInicial.css";
import { useNavigate } from "react-router-dom";

function PaginaInicial() {
  const navigate = useNavigate();

  return (
    <Principal titulo= "Pagina Inicial">
      Conteúdo principal
      <BotaoCustomizado
        tipo="primario"
        aoClicar={() => navigate("/lista-produtos")}
      >
        Lista de produtos
      </BotaoCustomizado>
      <BotaoCustomizado
        tipo="secundario"
        aoClicar={() => navigate("/Lista-tarefas")}
      >
        Lista de tarefas
      </BotaoCustomizado>

      <BotaoCustomizado
        tipo="secundario"
        aoClicar={() => navigate("/Cadastro-cliente")}
      >
        Cadastro cliente
      </BotaoCustomizado>

      
    </Principal>
  );
}
export default PaginaInicial;
