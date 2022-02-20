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