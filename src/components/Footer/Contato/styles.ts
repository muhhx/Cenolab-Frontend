import styled from "styled-components";

export const TextContainer = styled.p`
    width: 90%;
    max-width: 700px;
    text-align: center;
    color: white;
    font-weight: 600;
    font-size: 38px;
    word-wrap: break-word;

    @media only screen and (max-width: 600px) {
        font-size: 28px;
    }
`;

export const TextButton = styled.button`
    background-color: transparent;
    border: none;
    color: white;
    font-family: ${({theme}) => theme.font.family};
    font-size: 38px;
    font-style: italic;
    text-decoration: underline;
    cursor: pointer;

    @media only screen and (max-width: 600px) {
        font-size: 28px;
    }
`;