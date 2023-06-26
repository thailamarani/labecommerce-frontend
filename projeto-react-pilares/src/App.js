import Filtro from './componentes/filtro/Filtro';
import Home from './componentes/home/Home';
import Carrinho from './componentes/carrinho/Carrinho';
import { useEffect, useState } from 'react';
import { ProdutosContainer } from './componentes/home/style';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: rgb(0, 0, 64);
  color: white;
`

function App() {
  const [carrinho, setCarrinho] = useState([])
  const [ordem, setOrdem] = useState("crescente")
  const [valorMax, setValorMax] = useState(0)
  const [valorMin, setValorMin] = useState(0)
  const [buscaNome, setBuscaNome] = useState("")

  useEffect(() => {
    if (carrinho.length > 0) {
      localStorage.setItem("carrinho", JSON.stringify(carrinho))
    }
  }, [carrinho])

  useEffect(() => {
    const carrinhoLocalStorage = localStorage.getItem("carrinho")
    if (carrinhoLocalStorage) {
      setCarrinho(JSON.parse(carrinhoLocalStorage))
    }
  }, [])

  return (
    <Container className="App">
      <Filtro
        ordem={ordem} setOrdem={setOrdem}
        setValorMax={setValorMax}
        setValorMin={setValorMin}
        setBuscaNome={setBuscaNome}
      />
      <Home
        carrinho={carrinho} setCarrinho={setCarrinho}
        ordem={ordem}
        valorMin={valorMin}
        valorMax={valorMax}
        buscaNome={buscaNome}
      />
      <Carrinho
        carrinho={carrinho} setCarrinho={setCarrinho}
      />
    </Container>
  );
}

export default App;