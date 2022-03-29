import React from "react";
import { Button } from "./Button";
import { Logo, Nav } from "./styled/Header.styled";
import { Container } from "./styled/Container.styled";
import styled from "styled-components";
import logo from '../assets/images/logo.svg'


const HeaderContainer = styled.div`
    background-color: #fff;
    width: 100%;
    padding: 1rem 0rem;
  `

const Header = () => {
  return (
    <Container>
      <HeaderContainer>
        <Nav>
          <Logo src={logo}></Logo>
          <Button primaryColorLight={"white"} color={"hsl(321, 100%, 78%)"}>
            Try it free
          </Button>
        </Nav>
      </HeaderContainer>
    </Container>
  );
};

export default Header;
