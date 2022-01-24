import React, { useCallback } from "react";
import SESSION1 from "../../assets/session1/boho1.jpg";
import SESSION2 from "../../assets/session1/boho2.jpg";
import SESSION3 from "../../assets/session1/boho3.jpg";
import SESSION4 from "../../assets/session1/boho4.jpg";
import SESSION5 from "../../assets/session1/boho5.jpg";
import SESSION6 from "../../assets/session1/boho6.jpg";
import Line3 from "../../assets/lines/3.png";
import styled from "styled-components";
import { isMobile } from "react-device-detect";
import Gallery from "react-photo-gallery";
import { FlexCenterContainer, Colors } from "../../style/common";

const Container = styled(FlexCenterContainer)`
  flex-direction: column;
  background: ${Colors.obsidian};
  padding: ${(props) => (props.isMobile ? "1em 0" : "3em 0")};
`;

const Header = styled.div`
  position: relative;
`;

const LineArt = styled.img`
  position: absolute;
  top: 0.5em;
  left: 50%;
  transform: translate(-50%, 0);
  width: 10em;
  filter: invert(1);
  display: ${(props) => (props.isMobile ? "none" : "block")};
`;

const Text = styled(FlexCenterContainer)`
  color: ${Colors.white};
  font-size: ${(props) => (props.isMobile ? "6em" : "8em")};
  font-family: "Billion Miracles";
  margin-left: ${(props) => (props.isMobile ? "0" : "9em")};

  @media (max-width: 350px) {
    font-size: 4em;
  }
`;

const SecondText = styled(FlexCenterContainer)`
  color: ${Colors.white};
  font-size: ${(props) => (props.isMobile ? "3em" : "4em")};
  font-family: "Billion Miracles";
  margin-left: ${(props) => (props.isMobile ? "0em" : "9em")};
  transform: ${(props) =>
    props.isMobile ? "translateY(0%)" : "translateY(-40%)"};

  @media (max-width: 350px) {
    font-size: 2em;
  }
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
  cursor: pointer;
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
      <ImgContainer key={props.key}>
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
    <Container id="portfolio" isMobile={isMobile}>
      <Header>
        <Text isMobile={isMobile}>Portfolio</Text>
        <SecondText isMobile={isMobile}>Zobacz moje prace</SecondText>
        <LineArt
          src={Line3}
          isMobile={isMobile}
          id="line art 3"
          alt={"Line art 3"}
        />
      </Header>
      <InnerContainer>
        <Gallery
          photos={photos}
          targetRowHeight={isMobile ? 200 : 400}
          renderImage={imageRenderer}
          margin={0}
        />
      </InnerContainer>
    </Container>
  );
};

export default Portfolio;
