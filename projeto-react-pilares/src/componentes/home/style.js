import styled from 'styled-components';

export const ProdutosContainer = styled.div`
    display: flex;
    justify-content: space-between; 
    padding-top: 10px;
    flex-wrap: wrap;
`;

export const Imagem = styled.img`
    width: 15%;
    min-width:150px;
    padding: 10px 12px;
    margin: 10px 0;
`;

export const ProdContainer = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 30%;
    text-align: center;
    padding: 20px 0;
    p{
        margin:15px;
        font-size: 16px;
        line-height: 1%;
    }
`;