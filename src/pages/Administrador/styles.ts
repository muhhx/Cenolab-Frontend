import styled from "styled-components";

export const Section = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 150px 0px;
`;

export const Container = styled.div`
    width: 90%;
    max-width: 1000px;
    display: flex;
    flex-direction: column;
    gap: 100px;
`;

export const Button = styled.button`
    border: none;
    background-color: ${({ theme }) => theme.colors.black};
    color: white;
    font-size: 12px;
    padding: 10px 30px;
    font-family: "Poppins", sans-serif;
    cursor: pointer;

    a {
        color: white;
    }

    @media only screen and (max-width: 450px) {
        width: 100%;
    }
`;