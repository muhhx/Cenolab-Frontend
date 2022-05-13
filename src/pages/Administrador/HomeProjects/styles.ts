import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

export const Header = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: start;
    padding-bottom: 10px;
    border-bottom: solid 2px ${({theme}) => theme.colors.purple};
`;

export const Title = styled.h1`
    font-size: 24px;
    color: ${({ theme }) => theme.colors.grey};
    font-weight: 500;
`;

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 50px;
`;