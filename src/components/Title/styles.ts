import styled from 'styled-components'

interface Props {
    color: string;
}

export const Text = styled.p`
    width: 90%;
    max-width: 690px;
    font-size: 38px;
    text-align: center;
    color: ${(props) => props.color};
    font-weight: 700;
    word-wrap: break-word;

    @media only screen and (max-width: 600px) {
        font-size: 28px;
    }
`;

export const CustomText = styled.span`
    font-size: 38px;
    color: ${(props) => props.color};
    font-family: ${({theme}) => theme.font.family};
    font-style: italic;

    @media only screen and (max-width: 600px) {
        font-size: 28px;
    }
`;