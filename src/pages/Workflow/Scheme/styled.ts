import styled from "styled-components";

export const Section = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
`;

export const Container = styled.div`
    width: 90%;
    max-width: 900px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 100px 0px;
    gap: 80px;
`;

export const Header = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Title = styled.h1`
    text-align: center;
    font-size: 24px;
`;

export const Description = styled.p`
    text-align: center;
    max-width: 250px;
    padding-bottom: 10px;
    border-bottom: solid 5px ${({theme}) => theme.colors.purple};
`;

export const WorkflowWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 50px;
    
    @media only screen and (max-width: 750px) {
        flex-direction: column;
    }
`;

export const WorkflowPanel = styled.div`
    width: 30%;
    max-width: 300px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    @media only screen and (max-width: 750px) {
        width: 100%;
        gap: 50px;
    }
`;

export const WorkflowItem = styled.div`
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const WorkflowBackground = styled.img`
    width: 100%;
`;

export const WorkflowText = styled.span`
    position: absolute;
    max-width: 180px;
    color: white;
    font-weight: 300;
    text-align: center;
    font-size: 10px;
    `;

export const WorkflowCustomText = styled.span`
    position: absolute;
    max-width: 180px;
    color: white;
    font-weight: 300;
    text-align: center;
    font-size: 10px;
    transform: translateY(23px);
`;

export const WorkflowArrow = styled.img`
    height: 30px;
    width: 8px;

    @media only screen and (max-width: 750px) {
        display: none;
    }
`;