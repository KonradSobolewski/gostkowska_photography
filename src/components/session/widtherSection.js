import React, { useEffect } from "react";
import styled from "styled-components";
import { FlexCenterContainer } from "../../style/common";

const Img = styled.img`
  padding: 1vw 0.5em;
  width: 60vw;

  @media (max-width: 1000px) {
    padding: 1vw 0.5em;
    width: 90vw;
  }
`;

const InnerImg = styled.img`
  width: 29vw;
  padding: 1em 1vw;

  @media (max-width: 1000px) {
    width: 44vw;
    padding: 1em 1vw;
  }
`;

const InnerBigImg = styled.img`
  width: 60vw;
  padding: 1em 1vw;

  @media (max-width: 1000px) {
    width: 90vw;
    padding: 1em 1vw;
  }
`;

const Container = styled(FlexCenterContainer)`
  flex-direction: column;
`;

const InnnerContainer = styled(FlexCenterContainer)`
  flex-direction: row;
`;

export const WidtherSection = (props) => {
  const { images, direction } = props;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <Container direction={direction ? 1 : 0}>
      {images.size === 2 ? (
        <>
          <InnerImg src={images[0]} alt={"Test Image"} loading="lazy" />
          <InnerImg src={images[1]} alt={"Test Image"} loading="lazy" />
        </>
      ) : (
        <>
          <Img src={images[0]} alt={"Test Image"} loading="lazy" />
          <InnnerContainer>
            {images[1] && images[2] ? (
              <>
                <InnerImg src={images[1]} alt={"Test Image"} loading="lazy" />
                <InnerImg src={images[2]} alt={"Test Image"} loading="lazy" />
              </>
            ) : (
              images[1] && (
                <InnerBigImg
                  src={images[1]}
                  alt={"Test Image"}
                  loading="lazy"
                />
              )
            )}
          </InnnerContainer>
        </>
      )}
    </Container>
  );
};
