import styled from "styled-components";

type Props = {
    buttonBackground: string;
}

export const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
`;

export const Status = styled.span`
    font-size: 12px;
    color: white;
    text-align: center;
    max-width: 400px;
`;

export const Input = styled.input`
    padding: 10px 10px;
    font-family: "Poppins", sans-serif;
    color: white;
    background-color: transparent;
    border: none;
    border-bottom: solid 1px white;
    outline: none;
    font-size: 12px;

    &::placeholder {
        color: #aaa;
    }
`;

export const Button = styled.button`
    background-color: transparent;
    background-image: url(${( props: Props ) => props.buttonBackground});
    background-size: 100% 100%;
    height: 50px;
    width: 100%;
    border: none;
    color: white;
    font-size: 12px;
    font-weight: 500;
    font-family: "Poppins", sans-serif;
    cursor: pointer;
`;