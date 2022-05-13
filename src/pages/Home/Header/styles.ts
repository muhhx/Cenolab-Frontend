import styled from "styled-components";

export const Container = styled.header`
    width: 100%;
    height: 100vh;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: end;
    overflow: hidden;
`;

export const BackgroundVideo = styled.video`
    min-height: 100%;
    min-width: 100%;
    position: absolute;
    z-index: -1;
`;

export const DivisonBackground = styled.div`
    width: 100%;
    height: 10%;
    position: relative;
    background: linear-gradient(transparent, black);
    bottom: 0;
`;

export const Paper = styled.img`
    width: 100%;
    position: absolute;
    bottom: 0;
`;

export const TitleWrapperAbsolute = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0,0,0,.5);

    @media only screen and (min-width: 900px) {
        display: none;
    }
`;