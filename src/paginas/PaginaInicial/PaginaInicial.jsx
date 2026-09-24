import BotaoCustomizado from "../../componentes/BotaoCustomizado/BotaoCustomizado";
import Principal from "../../componentes/Principal/Principal";
import "./PaginaInicial.css"

function PaginaInicial (){
    return <Principal>
    Principal
            
            
        <BotaoCustomizado tipo='primario' aoClicar={() => alert("Salvar clicado")} >Salvar</BotaoCustomizado>
        <BotaoCustomizado tipo='secundario' aoClicar={() => alert("Cancelar clicado")}>Cancelar</BotaoCustomizado>
    
    </Principal>;
}
export default PaginaInicial;