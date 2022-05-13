import styled from 'styled-components'

interface Props {
    pageStatus?: boolean;
    status?: boolean;
}

export const LogoWrapper = styled.div`
    width: 30px;
    aspect-ratio: 1;
    cursor: pointer;
    position: relative;
    display: flex;
    align-items: center;
    
    @media only screen and (max-width: 900px) {
        display: ${(props: Props) => props.status === true ? 'none' : 'flex'};
    }
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
        display: ${(props: Props) => props.status === false ? 'none' : 'flex'};
        align-items: ${(props: Props) => props.status === true ? 'center' : 'center'};
    }
`;

export const Title = styled.h1`
    text-align: ${(props: Props) => props.status === true ? 'center' : 'initial'};
    color: ${(props: Props) => props.status === true ? 'black' : 'white'};
    font-size: 24px;
    font-weight: ${(props: Props) => props.pageStatus === true ? '700' : '300'};
    `;

export const Description = styled.p`
    text-align: ${(props: Props) => props.status === true ? 'center' : 'initial'};
    color: ${(props: Props) => props.status === true ? 'black' : 'white'};
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
        display: ${(props: Props) => props.status === false ? 'flex' : 'none'};
        align-items: center;
    }
`;