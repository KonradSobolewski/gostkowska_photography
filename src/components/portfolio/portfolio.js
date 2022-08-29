import React from "react";
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

const Text = styled(FlexCenterContainer)`
  color: ${Colors.white};
  font-size: ${(props) => (props.isMobile ? "2em" : "3em")};
  font-family: "Montaser extra-light";
  margin-left: ${(props) => (props.isMobile ? "0" : "17em")};
  padding: 0 0 0.5em 0;
  @media (max-width: 350px) {
    font-size: 4em;
  }
`;

const SecondText = styled(FlexCenterContainer)`
  color: ${Colors.white};
  font-size: ${(props) => (props.isMobile ? "3em" : "5em")};
  font-family: "Billion Miracles";
  margin-left: ${(props) => (props.isMobile ? "0em" : "5em")};
  transform: ${(props) =>
    props.isMobile ? "translateY(0%)" : "translateY(-40%)"};

  @media (max-width: 350px) {
    font-size: 2em;
  }
`;

const InnerContainer = styled.div`
  margin: 1em;
  background: ${Colors.obsidian};
`;

const Portfolio = () => {
  return (
    <Container id="history" isMobile={isMobile}>
      <Header>
        <Text isMobile={isMobile}>Zobacz</Text>
        <SecondText isMobile={isMobile}>prawdziwe historie</SecondText>
      </Header>
      <InnerContainer>
        <Gallery />
      </InnerContainer>
    </Container>
  );
};

export default Portfolio;
