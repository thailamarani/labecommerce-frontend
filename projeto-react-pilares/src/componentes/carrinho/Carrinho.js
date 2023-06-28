import { CarrinhoContainer } from './style';

const Carrinho = ({ carrinho, setCarrinho }) => {

    const removerProduto = (produto) => {
        const novoCarrinho = carrinho.map((item) =>
            item.nome === produto.nome
                ?
                { ...item, quantidade: item.quantidade - 1 }
                :
                item
        ).filter((item) => item.quantidade > 0)
        setCarrinho(novoCarrinho)
    }

    const total = carrinho.reduce((acumulador, produto) => {
        return acumulador + produto.valor * produto.quantidade
    }, 0)

    return (
        <CarrinhoContainer>
            <p>Carrinho</p>
            {
                carrinho.map((item) => {
                    return (
                        <div key={item.id}>
                            <p>Nome: {item.nome}</p>
                            <p>Quantidade: {item.quantidade}</p>
                            <button onClick={() => removerProduto(item)}>Remover</button>
                        </div>
                    )
                })
            }
            <p>Total: R$ {total} </p>
        </CarrinhoContainer>
    )
};

export default Carrinho;