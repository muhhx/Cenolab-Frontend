import styled from 'styled-components'

export const Text = styled.p`
    width: 90%;
    max-width: 700px;
    font-size: 38px;
    text-align: center;
    color: white;
    font-weight: 600;
    word-wrap: break-word;

    @media only screen and (max-width: 600px) {
        font-size: 28px;
    }
`;

export const CustomText = styled.span`
    font-size: 38px;
    color: white;
    font-family: ${({theme}) => theme.font.family};
    font-style: italic;

    @media only screen and (max-width: 600px) {
        font-size: 28px;
    }
`;