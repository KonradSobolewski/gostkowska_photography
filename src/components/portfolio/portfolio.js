import React from "react";
import styled from "styled-components";
import { isMobile } from "react-device-detect";
import { FlexCenterContainer, Colors } from "../../style/common";
import Gallery from "./gallery";

const Container = styled(FlexCenterContainer)`
  flex-direction: column;
  background: ${Colors.lightCream};
`;

const Text = styled(FlexCenterContainer)`
  padding: 0.5em;
  color: ${Colors.lightBlack};
  font-size: ${(props) => (props.isMobile ? "3em" : "5em")};
  font-family: "Walterose";
  @media (max-width: 350px) {
    font-size: 2em;
  }
`;

const InnerContainer = styled.div`
  background: ${Colors.lightCream};
`;

const Portfolio = () => {
  return (
    <Container id="history" isMobile={isMobile}>
      <Text isMobile={isMobile}>moje realizacje</Text>
      <InnerContainer>
        <Gallery />
      </InnerContainer>
    </Container>
  );
};

export default Portfolio;
