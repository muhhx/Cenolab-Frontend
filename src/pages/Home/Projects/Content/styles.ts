import styled from 'styled-components'

interface Props {
    direction: number;
}

export const Container = styled.div`
    width: 100%;
    min-height: 50vh;
    margin: 100px 0px;
    display: flex;
    align-items: center;
    flex-direction: ${(props: Props) => props.direction === 1 ? 'row' : 'row-reverse'};
    gap: 50px;

    @media only screen and (max-width: 700px) {
        flex-direction: column;
    }
`;

export const ImageWrapper = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;

    @media only screen and (max-width: 700px) {
        width: 100%;
    }
`;

export const Information = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    justify-content: center;
    max-width: 390px;

    @media only screen and (max-width: 700px) {
        width: 100%;
    }
`;

export const InformationNumber = styled.p`
    font-weight: 700;
`;

export const InformationTitle = styled.h1`
    font-size: 24px;
    text-align: center;
    text-transform: uppercase;
`;

export const InformationParagraph = styled.p`
    text-align: justify;
`;

export const Button = styled.button`
    background-color: transparent;
    border: none;
    height: 60px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

export const ButtonBackground = styled.img`
    height: 100%;
`;

export const ButtonText = styled.span`
    color: white;
    position: absolute;
    font-family: 'Poppins', sans-serif;
    font-weight: 300;
`;