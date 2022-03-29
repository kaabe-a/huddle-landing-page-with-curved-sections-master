import React from "react";
import styled from "styled-components";
import logofooter from '../assets/images/logofooter.svg';
import bg_footer_top_desktop from '../assets/images/bg-footer-top-desktop.svg';

const Section = styled.section`
  width: 100%;
  height: auto;
  background-color: ${(props) => props.theme.colors.footerColor};
  border: none;
  padding: 0;
  margin-top:-10px;
`;

export const Container = styled.div`
  width: 90%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 2rem 0rem;
  color: #fff;
  @media (min-width: 768px) {
    width: 70%;
  }
`;
export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction:column;
  gap: 5rem;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    margin-top: 1rem;
  }
  p{
      margin:1rem 0;
  }
  @media (min-width: 768px) {
    flex-direction:row;
  a{
    color:white;
  }
`;
const Input = styled.div`
    background-color: #fff;
    width: 100%;
    padding: .4rem;
    input[type="text"] {
        padding: 0.5rem;
        width: 80%;
        border:none;
        outline:none;
        // background-color: #fff;
    }
    input[type="submit"] {
        width: 20%;
        border:none;
        padding: .6rem 1rem;
        background-color: hsl(322, 100%, 66%);
        color:white;
        cursor: pointer;
    }
    `
const Icons = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
`;
const Logo = styled.img`
  fill: red;
  color:red;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const Footer = () => {
  return (
    <div>
        <Image src={bg_footer_top_desktop} alt="" />
      <Section>
        <Container>
          <Flex>
            <div>
              <Logo color='white' src={logofooter}></Logo>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                nulla quam, hendrerit lacinia vestibulum a, ultrices quis sem.
              </p>
              <ul>
                <li>
                  <i className="bi bi-telephone-outbound"></i>{" "}
                  <span>Phone: +1-543-123-4567</span>
                </li>
                <li>
                  <i className="bi bi-envelope"></i> <span>example@huddle.com</span>
                </li>
              </ul>
              <Icons>
                <a href="https://www.facebook.com/"> <i className="bi bi-facebook"></i></a>
                <a href="https://www.twitter.com/"> <i className="bi bi-twitter"></i></a>
                <a href="https://www.instagram.com/"> <i className="bi bi-instagram"></i></a>
                <a href="https://www.linkedin.com/"> <i className="bi bi-linkedin"></i></a>
              </Icons>
            </div>
            <div>
              <h2>Newsletter</h2>
              <p>
                To recieve tips on how to grow your community, sign up to our
                weekly newsletter. We'll never send you spam or pass on your
                email address
              </p>
              <Input>
                <input type="text" placeholder="Enter Email" />
                <input type="submit" value="Subscribe" />
              </Input>
            </div>
          </Flex>
        </Container>
      </Section>
    </div>
  );
};

export default Footer;
