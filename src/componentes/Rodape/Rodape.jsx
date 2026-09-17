import "./Rodape.css";

function Rodape() {

    const anoatual = new Date().getFullYear();

  return (
    <footer className="Rodape_root">
      <span>
        Copyright © {anoatual} - Todos os direitos reservados - Mattheus-Garcia
      </span>        
    </footer>
  );
}

export default Rodape;
