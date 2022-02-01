import React from "react";
import styled from "styled-components";
import { FlexCenterContainer } from "../../style/common";

const Img = styled.img`
  padding: 2vh 0.5em;
  height: 96vh;

  @media (max-width: 1000px) {
    padding: 1vh 0.3em;
    height: 42vh;
  }

  @media (max-width: 320px) {
    padding: 1vh 0.3em;
    height: 38vh;
  }
`;

const InnerImg = styled.img`
  height: 47vh;

  :first-child {
    padding: 2vh 0.5em 1vh 0.5em;
  }

  :nth-child(2) {
    padding: 1vh 0.5em 2vh 0.5em;
  }

  @media (max-width: 1000px) {
    padding: 1vh 0.3em;
    height: 20vh;
  }

  @media (max-width: 320px) {
    padding: 1vh 0.3em;
    height: 18vh;
  }
`;

const Container = styled(FlexCenterContainer)`
  flex-direction: ${(props) => (props.direction ? "row" : "row-reverse")};
`;

const InnnerContainer = styled(FlexCenterContainer)`
  flex-direction: column;
`;

export const StandardSection = (props) => {
  const { images, direction } = props;

  return (
    <Container direction={direction ? 1 : 0}>
      <Img src={images[0]} alt={"Test Image"} loading="lazy" />
      <InnnerContainer>
        {images[1] && (
          <InnerImg src={images[1]} alt={"Test Image"} loading="lazy" />
        )}
        {images[2] && (
          <InnerImg src={images[2]} alt={"Test Image"} loading="lazy" />
        )}
      </InnnerContainer>
    </Container>
  );
};
