import styled from "styled-components";

type Props = {
    backgroundImage?: string;
    backgroundPaper1?: string;
    backgroundPaper2?: string;
}

export const Section = styled.section`
    width: 100%;
    height: 100vh;
    display: flex;

    @media only screen and (max-width: 900px) {
        flex-direction: column;
        align-items: center;
    }
`;

export const Block1 = styled.section`
    width: 40%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;

    @media only screen and (max-width: 900px) {
        width: 100%;
        min-height: 100vh;
    }
`;

export const Block2 = styled.section`
    width: 60%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    background-image: url(${( props: Props ) => props.backgroundImage});
    background-size: cover;
    background-position: center center;

    @media only screen and (max-width: 900px) {
        width: 100%;
        min-height: 100vh;
    }
`;

export const Paper = styled.div`
    position: absolute;
    left: 0;
    height: 100%;
    width: 150px;
    background-image: url(${( props: Props ) => props.backgroundPaper1});
    background-size: 100% 100%;

    @media only screen and (max-width: 900px) {
        background-image: url(${( props: Props ) => props.backgroundPaper2});
        top: 0;
        height: 50px;
        width: 100%;
    }
`;

export const Information = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
    width: 90%;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    width: 100%;
`;

export const Logo = styled.img`
    width: 30px;
    aspect-ratio: 1;
`;

export const Title = styled.h1`
    max-width: 260px;
    font-size: 32px;
    line-height: 1;
    text-align: center;
    text-transform: uppercase;
    border-bottom: solid 3px ${({ theme }) => theme.colors.purple};
    padding-bottom: 10px;
`;

export const Description = styled.p`
    width: 100%;
    max-width: 400px;
    color: ${({ theme }) => theme.colors.black};
    text-align: center;
    font-size: 12px;
    line-height: 1.5;
`;

export const FooterContainer1 = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;
    width: 250px;
    justify-content: start;

    @media only screen and (max-width: 900px) {
        flex-direction: column;
        gap: 0px;
        width: auto;
    }
`;

export const Icon = styled.img`
    width: 20px;
    aspect-ratio: 1;
`;

export const FooterContainer2 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    @media only screen and (max-width: 900px) {
        align-items: center;
    }
`;

export const Subtitle = styled.span`
    font-size: 12px;
    color: #aaa;
    text-align: center;
`;

export const Text = styled.span`
    font-size: 12px;
    color: ${({ theme }) => theme.colors.black};
    font-weight: 500;
`;

export const FormContainer = styled.div`
    width: 90%;
    max-width: 350px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;