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