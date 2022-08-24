import React from "react";
import Line3 from "../../assets/lines/3.png";
import styled from "styled-components";
import { isMobile } from "react-device-detect";
import { FlexCenterContainer, Colors } from "../../style/common";
import Gallery from "./gallery";

const Container = styled(FlexCenterContainer)`
  flex-direction: column;
  background: ${Colors.obsidian};
  padding: ${(props) => (props.isMobile ? "2em 0" : "0")};
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

const Portfolio = () => {
  return (
    <Container id="portfolio" isMobile={isMobile}>
      <Header>``
        <Text isMobile={isMobile}>Portfolio</Text>
        <SecondText isMobile={isMobile}>Zobacz moje prace</SecondText>
      </Header>
      <InnerContainer>
        <Gallery />
      </InnerContainer>
    </Container>
  );
};

export default Portfolio;
