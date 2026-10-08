import "./Principal.css";

function Principal(props) {
    return (
            <main className=
            "principal_root">
            <h1> {props.titulo}</h1>
            

            {props.children}
            </main>
    )
}

export default Principal;