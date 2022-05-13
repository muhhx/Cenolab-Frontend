import styled from "styled-components";

type Props = {
    imageUrl?: string;
    isSelected?: boolean;
}

export const Project = styled.div`
    width: 100%;
    height: 200px;
    display: flex;
    gap: 20px;

    @media only screen and (max-width: 900px) {
        flex-direction: column;
        height: auto;
        gap: 0px;
    }
`;

export const Thumb = styled.div`
    min-width: 200px;
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

export const Information = styled.div`
    width: calc(100% - 200px);
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media only screen and (max-width: 900px) {
        height: auto;
        gap: 10px;
        width: 100%;
    }
`;

export const Data = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

export const Options = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

export const Name = styled.h3`
    font-size: 16px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.black};
`;

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    @media only screen and (max-width: 900px) {
        flex-direction: column-reverse;
        gap: 10px;
    }
`;

export const Button = styled.button`
    border: none;
    display: ${( props: Props ) => props.isSelected === true ? "block" : "none"};
    background-color: ${({ theme }) => theme.colors.purple};
    color: white;
    font-size: 12px;
    font-family: "Poppins", sans-serif;
    cursor: pointer;
    padding: 5px 30px;

    @media only screen and (max-width: 900px) {
        width: 100%;
    }
`;

export const ProjectsContainer = styled.div`
    width: 100%;
    overflow-x: scroll;
`;

export const Option = styled.button`
    border: none;
    background-color: ${( props: Props ) => props.isSelected === true ? ({ theme }) => theme.colors.purple : "#ccc"};
    cursor: pointer;
    font-size: 12px;
    font-family: "Poppins", sans-serif;
    color: white;
    font-weight: 300;
    padding: 0px 10px;
`;

export const Itens = styled.div`
    display: flex;
    gap: 10px;
`;