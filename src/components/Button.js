import styled from "styled-components";

export const Button = styled.button`
    padding:.4rem 1.3rem;
    border:none;
    background-color: ${props=> props.primaryColorLight}; 
    border: 2px solid ${({theme}) => theme.colors.primaryColorLight};
    color: ${(props) => props.color};
    border-radius:20px;
    font-size:1.3rem;
    cursor:pointer;
`