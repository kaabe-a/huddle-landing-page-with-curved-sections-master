import React from "react";
import { Container, Flex, Content } from "./styled/Section.styled";
import bg_section_top_desktop_1 from '../assets/images/bg_section_top_desktop_1.svg';
import illustration_grow_together from '../assets/images/illustration-grow-together.svg';
import illustration_flowing_conversation from '../assets/images/illustration-flowing-conversation.svg';
import bg_section_bottom_desktop_1 from '../assets/images/bg-section-bottom-desktop-1.svg';
import bg_section_top_desktop_2 from '../assets/images/bg-section-top-desktop-2.svg';
import illustration_your_users from '../assets/images/illustration-your-users.svg';
import bg_section_bottom_desktop_2 from '../assets/images/bg-section-bottom-desktop-2.svg';

const datas = [
  {
    bgImgTop: bg_section_top_desktop_1,
    bgImgBottom: bg_section_bottom_desktop_2,
    title: "Grow your business",
    image: illustration_grow_together,
    isRight: false,
    sectionBgColor: "hsl(207, 100%, 98%)",
    description:
      " Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations youmiss out on with a feedback form.",
  },
  {
    bgImgTop: "",
    bgImgBottom:"",
    sectionBgColor: "white",
    title: "Flowing Conversations",
    isRight: true,
    image: illustration_flowing_conversation,
    description:
      "You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow.",
  },
  {
    bgImgBottom: bg_section_bottom_desktop_1,
    bgImgTop: bg_section_top_desktop_2,
    title: "Your Users",
    isRight: false,
    image: illustration_your_users,
    sectionBgColor: "hsl(207, 100%, 98%)",
    description:
      "It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediate",
  },
];

const Sections = () => {
  return (
    <div>
      {datas.map((data, index) => (
        <Container key={index}>
          <img src={data.bgImgTop} alt="" />
          <Content sectionBgColor={data.sectionBgColor}>
            <Flex direction={data.isRight}>
              <div>
                <h2>{data.title}</h2>
                <p>{data.description}</p>
              </div>
              <img src={data.image} alt="" />
            </Flex>
          </Content>
          <img
            src={data.bgImgBottom}
            alt=""
          />
        </Container>
      ))}
    </div>
  );
};

export default Sections;
