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

export const Block1 = styled.div`
    width: 40%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;

    @media only screen and (max-width: 900px) {
        width: 100%;
        padding: 50px 0px;
    }
`;

export const Block2 = styled.div`
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
    justify-content: center;
    gap: 10px;
    align-items: flex-end;
    width: 90%;

    @media only screen and (max-width: 900px) {
        justify-content: center;
    }
`;

export const TextWrapper = styled.div`
    width: 100%;
    max-width: 500px;
    height: 500px;
    background-image: url(${( props: Props ) => props.backgroundImage});
    background-position: center;
    background-size: 100% auto;
    background-repeat: no-repeat;
    cursor: pointer;
`;

export const FormContainer = styled.div`
    width: 90%;
    max-width: 400px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;