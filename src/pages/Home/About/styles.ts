import styled from "styled-components";

export const Section = styled.section`
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    /* background: linear-gradient(transparent 70%, rgba(0, 0, 0, .1)) */
`;

export const Container = styled.div`
    width: 90%;
    max-width: 1000px;
    padding: 100px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 80px;
`;

export const TitleWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;

    @media only screen and (max-width: 900px) {
        display: none;
    }
`;

export const BlockColumn = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;

    @media only screen and (max-width: 900px) {
        flex-direction: column;
        gap: 80px;
    }
`;

export const Block = styled.div`
    width: 45%;
    display: flex;
    gap: 20px;
    align-items: center;

    @media only screen and (max-width: 900px) {
        width: 100%;
        flex-direction: column;
    }
`;

export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    padding-left: 20px;
    border-left: solid 5px ${({theme}) => theme.colors.purple};

    @media only screen and (max-width: 900px) {
        border: none;
        padding: initial;
        align-items: center;
        max-width: 360px;
    }
`;

export const Image = styled.img`
    width: 60px;
`;

export const Header = styled.h1`
    line-height: 1;

    @media only screen and (max-width: 900px) {
        text-align: center;
    }
`;

export const Description = styled.p`
    color: ${({theme}) => theme.colors.black};
    text-align: justify;
`;