import produtos from '../../produtos.json';
import { Imagem, ProdContainer, ProdutosContainer } from './style';

const Home = ({ carrinho, setCarrinho, ordem, valorMin, valorMax, buscaNome }) => {
    const addProduto = (produto) => {
        const produtoNoCarrinho = carrinho.find(
            (item) => item.nome === produto.nome
        )

        if (produtoNoCarrinho) {
            const novoCarrinho = carrinho.map(item =>
                produtoNoCarrinho.nome === item.nome
                    ?
                    { ...item, quantidade: item.quantidade + 1 }
                    :
                    item
            )
            setCarrinho(novoCarrinho)

        } else {
            setCarrinho([...carrinho, { ...produto, quantidade: 1 }]);
        }
    };

    return (
        <ProdutosContainer>
            <p>PRODUTOS</p>
            {produtos
                .sort((prod1, prod2) => {
                    return ordem === "crescente"
                        ?
                        prod1.nome.localeCompare(prod2.nome)
                        :
                        prod2.nome.localeCompare(prod1.nome)
                })
                .filter((produto) => {
                    return valorMin
                        ?
                        produto.valor >= valorMin
                        :
                        produto
                })
                .filter((produto) => {
                    return valorMax
                        ?
                        produto.valor <= valorMax
                        :
                        produto
                })
                .filter((produto) => {
                    return produto.nome.toLowerCase().includes(buscaNome.toLowerCase())
                })
                .map((produto) => {
                    return (
                        <ProdContainer key={produto.id}>
                            <Imagem src={produto.imagem} alt={produto.nome} />
                            <p>Nome: {produto.nome}</p>
                            <p>Preço: {produto.valor}</p>
                            <button onClick={() => addProduto(produto)}>Comprar</button>
                        </ProdContainer>
                    )
                })}
        </ProdutosContainer>
    )
};

export default Home;