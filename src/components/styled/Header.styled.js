import styled from "styled-components";

export const Logo = styled.img `
    object-fit:cover;
`

export const Nav = styled.nav `
    display:flex;
    flex-direction:row;
    padding: 1rem 0rem;
    // background-color: #fff;
    // position:fixed;
    margin:0 auto;
    width:90%;
    justify-content:space-between;
    align-items:center;
    @media (min-width:768px){
        flex-direction:row;
         width: 70%;
    }
`