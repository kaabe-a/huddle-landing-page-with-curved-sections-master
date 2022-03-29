import React from "react";
import { Container,Flex,FlexContainer } from "./styled/About.styled";

import screen_mockups from '../assets/images/screen-mockups.svg';
import icon_communities from '../assets/images/icon-communities.svg';
import icon_messages from '../assets/images/icon-messages.svg';


const About = () => {
  return (
    <Container>
      <img src={screen_mockups} alt="" />
      <FlexContainer>
        <Flex>
          <img src={icon_communities} alt="" />
          <h1>1.4k+</h1>
          <p>communities formed</p>
        </Flex>
        <Flex>
          <img src={icon_messages} alt="" />
          <h1>2.7m+</h1>
          <p>Messages Sent</p>
        </Flex>
      </FlexContainer>
    </Container>
  );
};

export default About;
