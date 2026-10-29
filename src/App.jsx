import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
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
    <ToastContainer />
    </>
  );
}

export default App;
