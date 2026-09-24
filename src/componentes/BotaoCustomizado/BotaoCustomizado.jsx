import "./BotaoCustomizado.css"


function BotaoCustomizado(props){
    const classe = ["BotaoCustomizado_root"];

    switch (props.tipo){
        case "primario":
            classe.push("BotaoCustomizado_primario")
        break;
        case "secundario":
            classe.push("BotaoCustomizado_secundario")
            break;
        default:
        break;
    }



    return <button className={classe.join(" ")}  onClick={props.aoClicar}  >{props.children}</button>;
}

export default BotaoCustomizado;