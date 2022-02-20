import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: .5fr .35fr .15fr;
`;

export const About = styled.div`
    height: 100%;
    grid-column: 1 / 2;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: end;
    gap: 10px;

    @media only screen and (max-width: 700px) {
        grid-column: 1 / 4;
        align-items: center;
    }
`;

export const AboutWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

export const AboutImage = styled.img`
    width: 20px;
`;

export const Title = styled.h3`
    color: white;
    font-weight: 600;
`;

export const Description = styled.p`
    color: white;
    font-weight: 300;
    text-align: justify;
    max-width: 390px;
`;

export const Contact = styled.div`
    height: 100%;
    grid-column: 2 / 3;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: start;
    gap: 10px;

    @media only screen and (max-width: 950px) {
        grid-column: 2 / 4;
    }

    @media only screen and (max-width: 700px) {
        display: none;
    }
`;

export const ContactWrapper = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: end;
    gap: 10px;
`;

export const ContactDescription = styled.p`
    font-weight: 300;
    color: white;
    text-align: end;
    
    @media only screen and (max-width: 950px) {
        max-width: 250px;
    }
`;

export const Icon = styled.img`
    width: 12px;
    padding-top: 2px;
`;


export const Navigation = styled.div`
    height: 100%;
    grid-column: 3 / 4;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: start;
    gap: 10px;

    @media only screen and (max-width: 950px) {
        display: none;
    }
`;

export const NavigationWrapper = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: end;
    gap: 10px;
    cursor: pointer;
`;