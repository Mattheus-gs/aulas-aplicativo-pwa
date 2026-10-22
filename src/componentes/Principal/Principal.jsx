import "./Principal.css";
import { TbArrowBack } from "react-icons/tb";

import { Link } from "react-router-dom";

function Principal(props) {
  return (
    <main className="principal_root">
      <div className="principal_titulo">
        {props.backto && (
          <Link to={props.backto}>
            <TbArrowBack size={25} />
          </Link>
        )}

        <h1> {props.titulo}</h1>
      </div>
      {props.children}
    </main>
  );
}

export default Principal;
