import React from 'react'
import { Button } from './Button';
import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 5rem 0;
    width: 100%;
    media (min-width: 768px) {
        flex-direction: row;
    }
`;

export const Flex = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    width: 100%;
    `

const CallToAction = () => {
  return (
    <Container>
        <Flex>
            <h2> Ready To Build Your Community?</h2>
            <Button  primaryColorLight={'hsl(322, 100%, 66%)'} color={'#fff'} >Get Started For Free</Button>
        </Flex>
    </Container>
  )
}

export default CallToAction