import BotaoCustomizado from "../BotaoCustomizado/BotaoCustomizado"
import "./Principal.css"
function Principal() {
    return (
            <main className="principal_root">
            Principal
            
            <button>Salvar</button>
            
            <BotaoCustomizado tipo='primario' aoClicar={() => alert("Salvar clicado")} >Salvar</BotaoCustomizado>
            <BotaoCustomizado tipo='secundario' aoClicar={() => alert("Cancelar clicado")}>Cancelar</BotaoCustomizado>
        </main>
    )
}

export default Principal