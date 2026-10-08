import "./App.css";
import Cabecalho from "./componentes/cabecalho/cabecalho";
import Rodape from "./componentes/Rodape/Rodape";
import Roteador from "./roteador";

function App() {
  return (
    <>
      <Cabecalho />
      <Roteador />
      <Rodape />
    </>
  );
}

export default App;
