import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    height: 0;
    position: sticky;
    top: 0;
    z-index: 99;
`;

export const Section = styled.section`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
`;

export const Container = styled.div`
    height: 35%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const Block = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Title = styled.h1`
    color: ${({theme}) => theme.colors.black};
    font-size: 24px;
`;

export const Description = styled.p`
    color: ${({theme}) => theme.colors.black};
    font-size: 10px;
`;