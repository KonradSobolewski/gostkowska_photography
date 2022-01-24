import React from "react";
import styled from "styled-components";
import BOHO2 from "../../assets/session1/boho2.jpg";
import Line2 from "../../assets/lines/2.png";
import Line4 from "../../assets/lines/4.png";
import Line1 from "../../assets/lines/1.png";
import Line6 from "../../assets/lines/6.png";
import { FlexCenterContainer, Colors } from "../../style/common";
import { isMobile } from "react-device-detect";

const Container = styled.div`
  width: auto;
`;

const OffersDiv = styled(FlexCenterContainer)`
  flex-direction: column;
  background: ${Colors.obsidian};
  padding: 1em;
`;

const Header = styled.div`
  padding: 1em 0;
  background: ${Colors.cream};
  width: auto;
  position: relative;
  white-space: nowrap;
`;

const Text = styled(FlexCenterContainer)`
  color: ${Colors.lightBlack};
  font-size: ${(props) => (props.isMobile ? "6em" : "8em")};
  font-family: "Billion Miracles";
  margin-right: ${(props) => (props.isMobile ? "0" : "9em")};

  @media (max-width: 350px) {
    font-size: 4em;
  }
`;

const SecondText = styled(FlexCenterContainer)`
  color: ${Colors.lightBlack};
  font-size: ${(props) => (props.isMobile ? "3em" : "4em")};
  font-family: "Billion Miracles";
  margin-right: ${(props) => (props.isMobile ? "0" : "9em")};
  transform: translateY(-40%);

  @media only screen and (max-width: 1600px) {
    transform: translateY(-20%);
  }

  @media only screen and (max-width: 1200px) {
    transform: translateY(0%);
  }

  @media (max-width: 350px) {
    font-size: 2em;
  }
`;

const OfferDiv = styled(FlexCenterContainer)`
  cursor: pointer;
  flex-direction: ${(props) => (props.direction ? "row" : "row-reverse")};
  transform: translateY(-20%);

  @media only screen and (max-width: 1200px) {
    transform: translateY(0%);
  }
`;

const Box = styled.div`
  background: ${Colors.cream};
  color: ${Colors.black};
  padding: 2em;
  margin: 1em 0;
  display: flex;
  justify-content: ${(props) => (props.direction ? "start" : "end")};
  align-items: ${(props) => (props.direction ? "start" : "end")};
  text-align: ${(props) => (props.direction ? "left" : "right")};
  flex-direction: column;
  position: relative;

  width: 50em;
  transform: translateY(30%);

  @media only screen and (max-width: 1300px) {
    width: 40em;
    transform: translateY(0%);
  }

  @media only screen and (max-width: 1000px) {
    width: 30em;
    transform: translateY(0%);
  }

  @media only screen and (max-width: 800px) {
    width: 90%;
    transform: translateY(0%);
  }

  @media only screen and (max-width: 350px) {
    font-size: 0.7em;
  }
`;

const LineArt = styled.img`
  position: absolute;
  top: 0.5em;
  left: 15%;
  transform: translate(-15%, 0);
  left: ${(props) => (props.direction ? "45em" : "4em")};
  width: 6em;

  @media only screen and (max-width: 1500px) {
    left: ${(props) => (props.direction ? "80%" : "4em")};
    width: 4em;
  }

  @media only screen and (max-width: 1000px) {
    left: ${(props) => (props.direction ? "80%" : "4em")};
  }

  @media only screen and (max-width: 800px) {
    display: none;
  }
`;

const LineArtHeader = styled.img`
  position: absolute;
  top: 0.5em;
  left: 50%;
  transform: translate(-50%, 0);
  width: 10em;

  @media only screen and (max-width: 1500px) {
    width: 8em;
  }

  @media only screen and (max-width: 1200px) {
    width: 6em;
    left: 70%;
    transform: translate(-70%, 0);
  }

  @media only screen and (max-width: 800px) {
    display: none;
  }
`;

const Title = styled.div`
  font-family: "Billion Miracles";
  white-space: nowrap;
  font-size: 5em;
  text-align: inherit;
  transform: translateY(-15%);

  @media only screen and (max-width: 1000px) {
    font-size: 3em;
  }
`;

const Description = styled.div`
  text-align: inherit;
`;

const Photo = styled.img`
  width: 15em;

  @media only screen and (max-width: 1200px) {
    width: 10em;
  }

  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

const Offers = () => {
  const offers = [
    {
      direction: true,
      title: "Sesja indywidualna",
      decription:
        "Tutaj cos bedzie asdasdadas asdsad asdsa dsadsadsadsa aadadasdsa daasdasdasdasdasdasdasdas " +
        " adasd asdasdadadas  adasdasd  sadsad adsa dasdasd asd asdas asdassadsad aadsad asda asdas dasdasdasd asd asd as",
      photo: BOHO2,
      lineArt: Line4,
    },
    {
      direction: false,
      title: "Sesja miłosna",
      decription:
        "Tutaj cos bedzie asdasdadas asdsad asdsa dsadsadsadsa aadadasdsa daasdasdasdasdasdasdasdas " +
        " adasd asdasdadadas  adasdasd  sadsad adsa dasdasd asd asdas asdassadsad aadsad asda asdas dasdasdasd asd asd as",
      photo: BOHO2,
      lineArt: Line1,
    },
    {
      direction: true,
      title: "Sesja ślubne",
      decription:
        "Tutaj cos bedzie asdasdadas asdsad asdsa dsadsadsadsa aadadasdsa daasdasdasdasdasdasdasdas " +
        " adasd asdasdadadas  adasdasd  sadsad adsa dasdasd asd asdas asdassadsad aadsad asda asdas dasdasdasd asd asd as",
      photo: BOHO2,
      lineArt: Line2,
    },
  ].map((it) => <Offer key={it.title} params={it} />);

  return (
    <Container id="offers">
      <Header>
        <Text isMobile={isMobile}>Oferta</Text>
        <SecondText isMobile={isMobile}>Co mogę dla Ciebie zrobić</SecondText>
        <LineArtHeader src={Line6} id="lineArt6" alt={"Line art 6"} />
      </Header>
      <OffersDiv>{offers}</OffersDiv>
    </Container>
  );
};

const Offer = (props) => {
  const { direction, title, decription, photo, lineArt } = props.params;

  return (
    <OfferDiv direction={direction ? 1 : 0}>
      <Box direction={direction ? 1 : 0}>
        <Title>{title}</Title>
        <Description>{decription}</Description>
        <LineArt src={lineArt} direction={direction ? 1 : 0} alt={"Line art"} />
      </Box>
      <Photo src={photo} />
    </OfferDiv>
  );
};

export default Offers;
