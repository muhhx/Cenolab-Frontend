import styled from "styled-components";

type Props = {
    imageUrl: string;
}

export const Section = styled.section`
    width: 100%;
    display: flex;

    @media only screen and (max-width: 900px) {
        flex-direction: column-reverse;
    }
`;

export const Images = styled.div`
    width: 60%;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media only screen and (max-width: 900px) {
        width: 100%;
    }
`;

export const Image = styled.div`
    width: 100%;
    height: 85vh;
    background-image: url(${( props: Props ) => props.imageUrl});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    @media only screen and (max-width: 900px) {
        height: 50vh;
    }
`;

export const PaperContainer = styled.div`
    width: 50px;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;

    @media only screen and (max-width: 900px) {
        height: 50px;
        width: 100%;
    }
`;

export const Paper = styled.img`
    width: 100%;
    height: 100vh;
    position: sticky;
    top: 0;

    @media only screen and (max-width: 900px) {
        height: 100%;
        position: initial;
    }
`;

export const InformationContainer = styled.div`
    width: 40%;
    position: relative;
    display: flex;
    justify-content: center;
    gap: 10px;

    @media only screen and (max-width: 900px) {
        width: 100%;
        padding-top: 200px;
        padding-bottom: 100px;
    }
`;

export const Information = styled.div`
    width: 90%;
    max-width: 400px;
    height: 100vh;
    position: sticky;
    top: 0;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    justify-content: center;

    @media only screen and (max-width: 900px) {
        height: auto;
    }
`;

export const Name = styled.h1`
    font-size: 36px;
    text-align: center;
    text-transform: uppercase;
    line-height: 1;
`;

export const Description = styled.p`
    text-align: justify;
`;

export const Divisor = styled.div`
    width: 30%;
    border-bottom: solid 3px ${({ theme }) => theme.colors.purple};
`;

export const Category = styled.h3`
    color: ${({ theme }) => theme.colors.grey};
    font-size: 18px;
    line-height: 1;
    font-weight: 600;
`;