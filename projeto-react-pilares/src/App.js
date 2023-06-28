import Filtro from './componentes/filtro/Filtro';
import Home from './componentes/home/Home';
import Carrinho from './componentes/carrinho/Carrinho';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

export const AppContainer = styled.div `
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 15px;
    h1 {
        text-align: center;
        font-size: 25px;
    }
    background-color: rgb(0, 0, 72);
    color: white;
`;

const Container = styled.div`
  display: flex;
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
    <AppContainer>
      <Filtro
        ordem={ordem} setOrdem={setOrdem}
        setValorMax={setValorMax}
        setValorMin={setValorMin}
        setBuscaNome={setBuscaNome}
      />
      <Container>
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
    </AppContainer>
  );
}

export default App;