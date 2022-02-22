import styled from "styled-components";

export const Wrapper = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: start;
`;

export const ImageContainer = styled.div`
    position: absolute;
    width: 95%;
    height: 95%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
`;

export const UpperImage = styled.img`
    position: absolute;
    top: 0;
    right: 0;
    width: 50%;
    z-index: 2;
    `;

export const BottomImage = styled.img`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 40%;
    z-index: 2;
`;

export const ImageWrapper = styled.div`
    width: 70%;
    height: 80%;
    background-color: green;
    overflow: hidden;
`;

export const Image = styled.img`
    height: 100%;
`;

export const BackgroundImage = styled.img`
    width: 100%;
`;