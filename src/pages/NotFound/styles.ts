import styled from "styled-components";

type Props = {
    buttonImage: string;
}

export const Section = styled.section`
    width: 100%;
    min-height: 90vh;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Container = styled.div`
    width: 90%;
    max-width: 1000px;
    padding: 100px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
`;

export const Text = styled.p`
    width: 90%;
    max-width: 690px;
    font-size: 38px;
    text-align: center;
    font-weight: 700;
    word-wrap: break-word;
    text-transform: uppercase;

    @media only screen and (max-width: 600px) {
        font-size: 28px;
    }
`;

export const Button = styled.button`
    background-color: transparent;
    background-image: url(${( props: Props ) => props.buttonImage});
    background-size: 100% 100%;
    height: 50px;
    width: 100%;
    max-width: 300px;
    border: none;
    color: white;
    font-size: 12px;
    font-weight: 500;
    font-family: "Poppins", sans-serif;
    cursor: pointer;
`;