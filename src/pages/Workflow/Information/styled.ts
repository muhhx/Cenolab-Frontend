import styled from "styled-components";

export const Section = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
`;

export const Container = styled.div`
    width: 90%;
    max-width: 900px;
    /* min-height: 100vh; */
    display: flex;
    align-items: center;
    margin: 100px 0px;
    gap: 50px;

    @media only screen and (max-width: 700px) {
        flex-direction: column;
    }
`;

export const Wrapper = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;

    @media only screen and (max-width: 700px) {
        width: 100%;
        max-width: 390px;
        min-height: 100vh;
    }
`;

export const DescriptionWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
`;

export const DescriptionNumber = styled.p`
    color: ${({theme}) => theme.colors.purple};
    font-weight: 700;
`;

export const DescriptionTitle = styled.h1`
    color: black;
    padding: 10px 0px;
    border-bottom: solid 5px ${({theme}) => theme.colors.purple};
    text-align: center;
    width: 65%;
    font-size: 24px;
    word-wrap: break-word;
`;

export const DescriptionParagraph = styled.p`
    color: black;
    text-align: justify;
`;

export const FrameWrapper = styled.div`
    width: 100%;
    height: 450px;
    display: flex;
    align-items: flex-end;

    @media only screen and (max-width: 700px) {
        height: auto;
    }
`;