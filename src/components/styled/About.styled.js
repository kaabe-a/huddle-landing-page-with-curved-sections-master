import styled from "styled-components";

export const Container = styled.div `
    max-width:1440px;
    width: 90%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 0 auto;
    @media (min-width: 768px) {
        width: 70%;
    }
    img {
        width: 60%;
        object-fit: cover;
    }
    `

export const Flex = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: .5rem;
    margin-top:2rem;

    img{
        width: 30px;
        object-fit: cover;
    }

    `

export const FlexContainer = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 60%;
    gap: 1rem;
    `
