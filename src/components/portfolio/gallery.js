import React from "react";
import { FlexCenterContainer, Colors } from "../../style/common";
import styled from "styled-components";
import { isMobile } from "react-device-detect";
import { Link } from "react-router-dom";
import SESSION1 from "../../assets/session1/boho1.jpg";
import SESSION2 from "../../assets/session1/boho2.jpg";
import SESSION3 from "../../assets/session1/boho3.jpg";
import SESSION4 from "../../assets/session1/boho4.jpg";
import SESSION5 from "../../assets/session1/boho9.jpg";
import SESSION6 from "../../assets/session1/boho6.jpg";

const Container = styled(FlexCenterContainer)``;

const ImgContainer = styled.div`
  position: relative;
  text-align: center;
  color: ${Colors.white};
  transition: all 0.3s ease-in-out;
  :hover {
    filter: brightness(0.7);
  }
`;

const ImgText = styled.div`
  cursor: pointer;
  opacity: 1;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transform-origin: left center;
  transition: all 0.3s ease-in-out;
  font-size: 2em;
  color: white;
  :hover {
    scale: 1.1;
  }
`;

const Img = styled.img`
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  :hover + div {
    scale: 1.1;
  }
`;

const Gallery = () => {
  const height = isMobile ? 150 : 400;
  const photos = [
    {
      id: 1,
      src: SESSION1,
      height: height,
      text: "Photo1",
    },
    {
      id: 2,
      src: SESSION2,
      height: height,
      text: "Photo2",
    },
    {
      id: 3,
      src: SESSION3,
      height: height,
      text: "Photo3",
    },
    {
      id: 4,
      src: SESSION4,
      height: height,
      text: "Photo4",
    },
    {
      id: 5,
      src: SESSION5,
      height: height,
      text: "Photo5",
    },
    {
      id: 6,
      src: SESSION6,
      height: height,
      text: "Photo6",
    },
  ];

  const imageRenderer = (props) => {
    return (
      <ImgContainer key={props.key}>
        <Link
          to={`/session/${props.id}`}
          key={props.id}
          style={{ textDecoration: "none" }}
        >
          <Img
            src={props.src}
            key={props.id}
            alt={props.text}
            loading="lazy"
            {...props}
          />
          <ImgText>{props.text}</ImgText>
        </Link>
      </ImgContainer>
    );
  };
  return (
    <div>
      <Container>
        {imageRenderer(photos[0])}
        {imageRenderer(photos[1])}
      </Container>
      <Container>
        {imageRenderer(photos[2])}
        {imageRenderer(photos[3])}
      </Container>
      <Container>
        {imageRenderer(photos[4])}
        {imageRenderer(photos[5])}
      </Container>
    </div>
  );
};

export default Gallery;
