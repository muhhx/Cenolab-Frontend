import styled from "styled-components";

export const Section = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    position: relative;
`;

export const Container = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 100px;
    overflow: hidden;
`;

export const PaperImage = styled.img`
    width: 100%;
`;

export const Background = styled.img`
    position: absolute;
    height: 101%;
    min-width: 101%;
    z-index: -1;
`;
