import styled from "styled-components";

export const Section = styled.section`
    width: 100%;
    height: 95vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
`;

export const Container = styled.div`
    width: 90%;
    max-width: 1000px;
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding-top: 100px;
`;

export const PaperDownwardsImage = styled.img`
    width: 100%;
    position: absolute;
    top: 0;
`;

export const Background = styled.img`
    position: absolute;
    height: 101%;
    min-width: 101%;
    z-index: -1;
`;
