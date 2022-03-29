import styled from "styled-components";

export const Container = styled.div`;
    margin: 10rem auto;
    img{
        width: 100%;
    }
    `
export const Flex = styled.div`
    text-align:center;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    margin: 0 auto;
    width:90%;
    gap: 5rem;
    @media (min-width: 768px) {
        flex-direction: ${props => props.direction ?  "row":"row-reverse"};
        justify-content:space-between;
        width:70%;
        text-align:left;
    }
    img{
        width:50%;
        object-fit:cover;
    }
    `

export const Content = styled.div`
    width:100%;
    margin-top:-2rem;
    background-color:${props => props.sectionBgColor};
    `
