import Principal from "../Principal/Principal";
import "./PaginaListaProdutos.css";

const produtos = [
  {
    nome: "Smartphone Samsung",
    preco: 2999,
    cores: ["#29d8d5", "#252a34", "#fc3766"],
  },
  {
    nome: "Notebook Acer",
    preco: 4999,
    cores: ["#ffd045", "#d4394b", "#f37c59"],
  },
  {
    nome: "Tablet Asus",
    preco: 1499,
    cores: ["#365069", "#47c1c8", "#f95786"],
  },
];

function PaginaListaProdutos() {
  return (
    <Principal titulo="Lista da fruterinha da dona chica">
      {produtos.map((item, index) => {
        return (
          <div key={index} className="PaginaListaProdutos">
            <strong>PRODUTO:</strong> {item.nome}

            <br />

            <strong>PREÇO:</strong>{" "}
            {item.preco.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}

            <br />

            <strong>CORES:</strong>

            <div className="PaginaListaProdutos_cores">
              {item.cores.map((itemCor, index) => {
                return (
                  <div
                    key={index}
                    style={{
                      backgroundColor: itemCor,
                      width: "30px",
                      height: "30px",
                    }}
                  ></div>
                );
              })}
            </div>
          </div>
        );
      })}
    </Principal>
  );
}

export default PaginaListaProdutos;