import styled from "styled-components";

type Props = {
    isSelected: boolean;
}

export const Section = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 150px 0px;
`;

export const Container = styled.div`
    width: 90%;
    max-width: 450px;
    display: flex;
    flex-direction: column;
    gap: 50px;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
`;

export const Span = styled.span`
    color: ${({ theme }) => theme.colors.grey};
    text-align: justify;
`;

export const Error = styled.span`
    color: red;
    text-align: justify;
`;

export const Title = styled.h3`
    font-size: 18px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.purple};
`;

export const Input = styled.input`
    width: 100%;
    padding: 5px 0px;
    border: none;
    border-bottom: solid 1px ${({ theme }) => theme.colors.purple};
    color: black;
    font-family: "Poppins", sans-serif;
    font-size: 12px;
    
    &:focus {
        outline: none;
  }
`;

export const CategoryWrapper = styled.div`
    width: 100%;
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
`;

export const Category = styled.button`
    border: none;
    background-color: ${( props: Props ) => props.isSelected === true ? ({ theme }) => theme.colors.purple : "#ccc"};
    font-size: 12px;
    font-family: "Poppins", sans-serif;
    color: white;
    padding: 0px 15px;
    cursor: pointer;
`;

export const Button = styled.button`
    width: 100%;
    padding: 10px 0px;
    color: white;
    background-color: ${({ theme }) => theme.colors.black};
    border: none;
    font-size: 12px;
    font-family: "Poppins", sans-serif;
    cursor: pointer;
`;