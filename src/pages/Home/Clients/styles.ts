import styled from "styled-components"

export const Section = styled.section`
    width: 100%;
    min-height: 90vh;
    background: linear-gradient(rgba(0, 0, 0, .1), transparent 70%);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Container = styled.div`
    width: 100%;
    height: 100%;
    margin: 100px 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`;

export const BackgroundWrapper = styled.div`
    min-width: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
`;

export const Background = styled.img`
    min-width: 100%;
    min-height: 300px;
`;

export const ClientWrapper = styled.div`
    position: absolute;
    display: flex;
    gap: 30px;
`;

export const ClientIcon = styled.div`
    width: 30px;
    aspect-ratio: 1;
    background-color: white;
`;