import styled from "styled-components";

type Props = {
    direction?: boolean;
    imageUrl?: string;
    display?: boolean;
    displayBigger?: boolean;
}

export const Section = styled.section`
    width: 90%;
    max-width: 1100px;
    min-height: 100vh;
    display: flex;
    flex-direction: ${( props: Props ) => props.direction === true ? "row" : "row-reverse"};
    align-items: center;
    gap: 50px;

    @media only screen and (max-width: 900px) {
        flex-direction: column;
        min-height: auto;
        max-width: 500px;
        margin: 100px 0px;
    }
`;

export const Information = styled.div`
    width: 45%;
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 20px;

    @media only screen and (max-width: 900px) {
        width: 100%;
        height: auto;
    }
`;

export const InformationWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    justify-content: center;
`;

export const Category = styled.span`
    font-size: 14px;
    /* font-weight: 700; */
    color: ${({ theme }) => theme.colors.grey};
    /* text-transform: uppercase; */
    padding: 0px 10px;
`;

export const CategoryWrapper = styled.div`
    border-bottom: solid 2px ${({theme}) => theme.colors.purple};
`;

export const Title = styled.h1`
    font-size: 24px;
    font-weight: 700;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.black};
    text-align: center;
`;

export const Description = styled.p`
    font-size: 12px;
    color: ${({ theme }) => theme.colors.black};  
    text-align: justify;
`;

export const Button = styled.button`
    background-color: transparent;
    border: none;
    height: 60px;
    width: 100%;
    max-width: 280px;
    position: relative;
    cursor: pointer;
    background-image: url(${(props: Props) => props.imageUrl});
    background-position: center;
    background-size: 100% 100%;
`;

export const ButtonText = styled.span`
    color: white;
    font-family: 'Poppins', sans-serif;
    font-weight: 300;
    text-align: center;
    font-size: 12px;
`;

export const Slides = styled.div`
    width: 55%;
    display: flex;
    flex-direction: ${( props: Props ) => props.direction === true ? "row" : "row-reverse"};
    gap: 10px;
    align-items: center;

    @media only screen and (max-width: 900px) {
        width: 100%;
    }
`;

export const Panel = styled.div`
    width: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;

    @media only screen and (max-width: 900px) {
        display: none;
    }
`;

export const PanelWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;

`;

export const PanelButton = styled.button`
    width: 100%;
    height: 10px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const PanelArrow = styled.img`
    height: 100%;
`;

export const PanelOption = styled.button`
    width: 7px;
    aspect-ratio: 1;
    background-color: ${(props: Props) => props.display === true ? "black" : "transparent"};
    border: solid 2px black;
    cursor: pointer;
`;

export const SlideWrapper = styled.div`
    width: 100%;
    
    @media only screen and (max-width: 900px) {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
`;

export const Slide = styled.div`
    width: 100%;
    min-height: 600px;  
    display: ${( props: Props ) => props.display === true ? 'grid' : 'none'};
    grid-template-columns: 1fr 1fr 1fr;
    grid-auto-rows: 200px;
    gap: 10px;

    @media only screen and (max-width: 900px) {
        display: grid;
        min-height: auto;
    }
`;

export const Project = styled.div`
    height: 100%;
    width: 100%;
    position: relative;
    cursor: pointer;
    background-image: url(${(props:Props) => props.imageUrl});
    background-position: center;
    background-size: cover;
    grid-column: ${(props:Props) => props.displayBigger === true ? "1 / 3" : "auto"};
    grid-row: ${(props:Props) => props.displayBigger === true ? "1 / 3" : "auto"};

    @media only screen and (max-width: 900px) {
        grid-column: auto;
        grid-row: auto;
    }
`;

export const Selected = styled.div`
    background-color: ${({theme}) => theme.colors.purple};
    position: absolute;
    padding: 2px 10px;
    top: 5px;
    right: 5px;
    
    @media only screen and (max-width: 350px) {
        height: 15px;
        width: 15px;
        padding: initial;
    }
`;

export const SelectedText = styled.span`
    color: white;
    font-weight: 600;
    font-size: 10px;
    overflow-wrap: break-word;
    
    @media only screen and (max-width: 350px) {
        display: none;
    }
`;