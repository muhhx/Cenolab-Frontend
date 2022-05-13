import styled from "styled-components";

type Props = {
    imageUrl: string;
}

export const Wrapper = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: end;
`;

export const ImageContainer = styled.div`
    position: absolute;
    width: 90%;
    height: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
`;

export const UpperImage = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 65%;
    z-index: 2;
    `;

export const BottomImage = styled.img`
    position: absolute;
    bottom: 0;
    right: 0;
    width: 40%;
    z-index: 2;
`;

export const ImageWrapper = styled.div`
    width: 70%;
    height: 80%;
    background-color: green;
    overflow: hidden;
    background-image: url(${( props: Props ) => props.imageUrl});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
`;

export const BackgroundImage = styled.img`
    width: 100%;
`;