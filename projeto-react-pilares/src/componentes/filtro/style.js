import styled from 'styled-components';

export const InputContainer = styled.div`
    display: flex;
    flex-direction: row;
    p {
        margin: 15px;
    }
    input {
        margin: 15px;
        text-align: center;
    }
`;

export const FiltroContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background: rgb(59, 59, 161);
    text-align: center;
    select {
        width: 115px;
        height: 25px;
        justify-content: center; 
        margin: 15px;
    }
    p {
        font-size: 16px;
        margin-left: 30px; 
    }
`;

export const Button = styled.button`
    margin-right:30px;
    width: 50px;
    height: 25px;
    margin: 15px; 
`;