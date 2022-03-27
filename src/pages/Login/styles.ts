import styled from "styled-components";

export const Section = styled.section`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.purple};
`;

export const Form = styled.form`
    width: 90%;
    max-width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
`;

export const Status = styled.p`
    width: 100%;
    text-align: center;
    color: white;
`;

export const Input = styled.input`
    width: 100%;
    padding: 5px 10px;
    outline: none;
`;

export const Button = styled.button `
    width: 100%;
    padding: 5px 10px;
    background-color: black;
    border: none;
    font-size: 12px;
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    color: white;
    cursor: pointer;
`;