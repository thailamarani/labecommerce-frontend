import { Button, InputContainer, FiltroContainer } from './style';

const Filtro = ({ ordem, setOrdem, setValorMin, setValorMax, setBuscaNome }) => {
    const filterCleaner = () => {
        setBuscaNome("")
        setValorMax(Infinity)
        setValorMin(-Infinity)
        setOrdem("asc")
    }

    return (
        <FiltroContainer>
            <p>Ordenar por:</p>
            <select value={ordem} onChange={(e) => setOrdem(e.target.value)}>
                <option value="crescente">Crescente</option>
                <option value="decrescente">Decrescente</option>
            </select>
            <InputContainer>
                <input
                    placeholder="Valor mínimo:"
                    type="number"
                    onChange={(e) => setValorMin(e.target.value)} />
                <input
                    placeholder="Valor máximo:"
                    type="number"
                    onChange={(e) => setValorMax(e.target.value)} />
                <input
                    placeholder="Buscar por nome:"
                    type="text"
                    onChange={(e) => setBuscaNome(e.target.value)} />
            </InputContainer>
            <Button onClick={filterCleaner}>Voltar</Button>
        </FiltroContainer>
    )
};

export default Filtro;