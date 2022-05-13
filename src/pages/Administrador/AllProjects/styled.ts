import styled from "styled-components";

type Props = {
    imageUrl: string;
}

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
    justify-content: space-between;
    padding-bottom: 10px;
    border-bottom: solid 2px ${({theme}) => theme.colors.purple};
    flex-wrap: wrap;
    gap: 10px;
`;

export const Title = styled.h1`
    font-size: 24px;
    color: ${({ theme }) => theme.colors.grey};
    font-weight: 500;
`;

export const NewProject = styled.button`
    border: none;
    background-color: ${({ theme }) => theme.colors.purple};
    color: white;
    font-size: 12px;
    padding: 10px 30px;
    font-family: "Poppins", sans-serif;
    cursor: pointer;

    a {
        color: white;
    }

    @media only screen and (max-width: 450px) {
        width: 100%;
    }
`;

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 30px;
`;

export const Project = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    gap: 20px;

    @media only screen and (max-width: 900px) {
        flex-direction: column;
        height: auto;
        gap: 0px;
    }
`;

export const Thumb = styled.div`
    width: 200px;
    height: 100%;
    background-image: url(${( props: Props ) => props.imageUrl});
    background-position: center;
    background-size: cover;
    position: relative;

    @media only screen and (max-width: 900px) {
        width: 100%;
        height: 200px;
    }
`;

export const Index = styled.div`
    position: absolute;
    top: 0px;
    left: 0px;
    background-color: ${({ theme }) => theme.colors.black};
    color: white;
    font-weight: 300;
    padding: 2px 6px;
`;

export const Information = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    gap: 20px;

    @media only screen and (max-width: 900px) {
        flex-direction: column;
        gap: 10px;
        height: auto;
    }
`;

export const Description = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    @media only screen and (max-width: 900px) {
        height: auto;
    }
`;

export const Options = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
    padding: 0px 15px;
    border-right: 2px solid black;
    
    a {
        height: 15px;
    }

    @media only screen and (max-width: 900px) {
        width: 100%;
        padding: 0px 0px;
        border: none;
        justify-content: start;
    }
`;

export const Icons = styled.img`
    height: 15px;
    aspect-ratio: 1;
    cursor: pointer;
`;

export const Name = styled.h3`
    font-size: 16px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.black};
`;