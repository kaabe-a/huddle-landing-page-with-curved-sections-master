import React from "react";
import { Button } from "./Button";
import { HeroContainer } from "./styled/Hero.styled";

const Hero = () => {
  return (
    <HeroContainer>
      <div>
      <h1>Build The Community Your Fans Will Love</h1>
      <p>
        Huddle re-imagines the way we build communities. You have a voice, but
        so does your audience. Create connections with your users as you engage
        in genuine discussion.
      </p>
      <Button primaryColorLight={'hsl(322, 100%, 66%)'} color={'#fff'} >Get Started For Free</Button>
      </div>
    </HeroContainer>
  );
};

export default Hero;
