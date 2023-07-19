import React from "react";
import { FlexCenterContainer, Colors } from "../../style/common";
import styled from "styled-components";
import { isMobile } from "react-device-detect";
import { Link } from "react-router-dom";
import SESSION1 from "../../assets/narzeczenska/ZalewZegrzynski/SNZ1-2.jpg";
import SESSION2 from "../../assets/indywidualna/Anastasia/Anastasia1.jpg";
import SESSION3 from "../../assets/mini3.jpg";
import SESSION4 from "../../assets/reportaz/StodolaBorucza43/19.jpg";
import SESSION5 from "../../assets/narzeczenska/HalaKoszyki/SNK2.jpg";
import SESSION6 from "../../assets/narzeczenska/CentrumWarszawy/SNC2.jpg";
import SESSION7 from "../../assets/mini1.jpg";

const Container = styled(FlexCenterContainer)`
  justify-content: space-between;
  box-sizing: content-box;
`;

const ImgContainer = styled.div`
  position: relative;
  text-align: center;
  color: ${Colors.white};
  transition: all 0.3s ease-in-out;
  :hover {
    filter: brightness(0.7);
  }
`;

const Img = styled.img`
  cursor: pointer;
  transition: all 0.3s ease-in-out;
`;

const TextContainer = styled(FlexCenterContainer)`
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transform-origin: left center;
`;

const ImgText = styled.div`
  font-family: "Montaser extra-light";
  padding: 1em 0;
  cursor: pointer;
  opacity: 1;
  transition: all 0.3s ease-in-out;
  font-size: ${(props) => (props.isMobile ? "0.8em" : "1.8em")};
  color: white;
`;

const Look = styled(ImgText)`
  font-family: "Montaser light";
  font-size: ${(props) => (props.isMobile ? "0.8em" : "1.2em")};
  padding: 0.6em 1em;
  border: ${(props) => (props.isMobile ? "solid 1px white" : "solid 2px white")};
`;

const Gallery = () => {
  const height = isMobile ? 150 : 500;
  const secondHeight = isMobile ? 150 : 540;
  const photos = [
    {
      id: 1,
      src: SESSION1,
      height: height,
      text: "Sesja narzeczeńska nad zalewem zegrzyńskim",
    },
    {
      id: 2,
      src: SESSION2,
      height: height,
      text: "Sesja miejska z Anastazją",
    },
    {
      id: 3,
      src: SESSION3,
      height: secondHeight,
      text: "Sesja ślubna w stylu boho",
    },
    {
      id: 4,
      src: SESSION4,
      height: secondHeight,
      text: "Wesele w stylu slow w Stodole Borucza",
    },
    {
      id: 5,
      src: SESSION5,
      height: secondHeight,
      text: "Sesja narzeczeńska w Hali Koszyki",
    },
    {
      id: 6,
      src: SESSION6,
      height: height,
      text: "Sesja narzeczeńska w centrum Warszawy",
    },
    {
      id: 7,
      src: SESSION7,
      height: height,
      text: "Wesele w Pastelowych Polach",
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
          <TextContainer isMobile={isMobile}>
            <ImgText isMobile={isMobile}>{props.text}</ImgText>
            <Look isMobile={isMobile}>Zobacz</Look>
          </TextContainer>
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
        {imageRenderer(photos[4])}
      </Container>
      <Container>
        {imageRenderer(photos[5])}
        {imageRenderer(photos[6])}
      </Container>
    </div>
  );
};

export default Gallery;
