import styled from "styled-components";

type Props = {
    backgroundImage?: string;
    buttonBackround?: string;
}

export const Section = styled.section`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${( props: Props ) => props.backgroundImage});
    background-size: cover;
    background-position: center center;
`;

export const Form = styled.form`
    width: 90%;
    max-width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
`;

export const Status = styled.p`
    width: 100%;
    text-align: center;
    color: white;
`;

export const Input = styled.input`
    padding: 10px 10px;
    width: 100%;
    font-family: "Poppins", sans-serif;
    color: black;
    background-color: white;
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
    background-image: url(${( props: Props ) => props.buttonBackround});
    background-size: 100% 100%;
    height: 45px;
    width: 100%;
    border: none;
    color: white;
    font-size: 12px;
    font-weight: 500;
    font-family: "Poppins", sans-serif;
    cursor: pointer;
`;