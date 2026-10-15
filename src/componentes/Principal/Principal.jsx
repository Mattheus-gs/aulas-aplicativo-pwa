import "./Principal.css";

import { Link } from "react-router-dom";

function Principal(props) {
  return (
    <main className="principal_root">
        {props.backto && <Link to={props.backto}>{"<"}</Link>}
      <h1> {props.titulo}</h1>

      {props.children}
    </main>
  );
}

export default Principal;
