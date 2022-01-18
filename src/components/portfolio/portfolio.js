import React, { useCallback } from "react";
import SESSION1 from "../../assets/session1/boho1.jpg";
import SESSION2 from "../../assets/session1/boho2.jpg";
import SESSION3 from "../../assets/session1/boho3.jpg";
import SESSION4 from "../../assets/session1/boho4.jpg";
import SESSION5 from "../../assets/session1/boho5.jpg";
import SESSION6 from "../../assets/session1/boho6.jpg";
import styled from "styled-components";
import { isMobile } from "react-device-detect";
import Gallery from "react-photo-gallery";
import { FlexCenterContainer, Colors } from "../../style/common";

const Container = styled(FlexCenterContainer)`
  flex-direction: column;
  background: ${Colors.obsidian};
  padding: 3em 0;
`;

const Header = styled.div`
  width: 100%;
`;

const Text = styled(FlexCenterContainer)`
  color: ${Colors.white};
  font-size: 8em;
  font-family: "Billion Miracles";
  margin-left: 9em;
`;

const SecondText = styled(FlexCenterContainer)`
  color: ${Colors.white};
  font-size: 4em;
  font-family: "Billion Miracles";
  margin-left: 9em;
  transform: translateY(-40%);
`;

const InnerContainer = styled.div`
  margin: 2em;
  max-width: 1000px;
  background: ${Colors.obsidian};
`;

const ImgContainer = styled.div`
  position: relative;
  text-align: center;
  color: ${Colors.white};
`;

const ImgText = styled.div`
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.3s ease-in-out;
  font-size: 3em;
`;
const Img = styled.img`
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  :hover {
    filter: brightness(0.7);
  }
  :hover + div {
    opacity: 1;
  }
`;

const Portfolio = () => {
  const photos = [
    {
      src: SESSION1,
      width: 3,
      height: 2,
      text: "Photo1",
    },
    {
      src: SESSION2,
      width: 2,
      height: 3,
      text: "Photo2",
    },
    {
      src: SESSION3,
      width: 2,
      height: 3,
      text: "Photo3",
    },
    {
      src: SESSION4,
      width: 3,
      height: 2,
      text: "Photo4",
    },
    {
      src: SESSION5,
      width: 3,
      height: 2,
      text: "Photo5",
    },
    {
      src: SESSION6,
      width: 2,
      height: 3,
      text: "Photo6",
    },
  ];

  const imageRenderer = useCallback((props) => {
    return (
      <ImgContainer>
        <Img
          src={props.photo.src}
          key={props.key}
          alt={props.title}
          {...props.photo}
        />
        <ImgText>{props.photo.text}</ImgText>
      </ImgContainer>
    );
  }, []);

  return (
    <Container id="portfolio">
      <Header>
        <Text>Portfolio</Text>
        <SecondText>Zobacz moje prace</SecondText>
      </Header>
      <InnerContainer>
        <Gallery
          photos={photos}
          targetRowHeight={400}
          renderImage={imageRenderer}
          margin={0}
        />
      </InnerContainer>
    </Container>
  );
};

export default Portfolio;
