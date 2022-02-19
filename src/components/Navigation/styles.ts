import styled from "styled-components";

export const Nav = styled.nav`
    width: 100%;
    height: 0px;
    position: absolute;
    top: 0;
    z-index: 100;

    @media only screen and (max-width: 900px) {
        position: sticky;
    }
`;

export const Background = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    background: linear-gradient(rgba(0,0,0,100%), rgba(0,0,0, 0%));
`;

export const Container = styled.div`
    width: 90%;
    max-width: 1000px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const LogoWrapper = styled.div`
    width: 30px;
    aspect-ratio: 1;
    cursor: pointer;
    position: relative;
    display: flex;
    align-items: center;
`;

export const Image = styled.img`
    position: absolute;
    width: 100%;
`;

export const Block = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    cursor: pointer;

    @media only screen and (max-width: 900px) {
        display: none;
    }
`;

export const Title = styled.h1`
    color: white;
    font-size: 24px;
`;

export const Description = styled.p`
    color: white;
    font-size: 10px;
`;

export const Hamburger = styled.button`
    width: 30px;
    aspect-ratio: 1;
    position: relative;
    background-color: transparent;
    border: none;
    cursor: pointer;
    display: none;

    
    @media only screen and (max-width: 900px) {
        display: flex;
        align-items: center;
    }
`;