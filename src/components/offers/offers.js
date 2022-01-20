import React from "react";
import styled from "styled-components";
import BOHO2 from "../../assets/session1/boho2.jpg";
import Line2 from "../../assets/lines/2.png";
import Line4 from "../../assets/lines/4.png";
import Line1 from "../../assets/lines/1.png";
import Line6 from "../../assets/lines/6.png";
import { FlexCenterContainer, Colors } from "../../style/common";

const Container = styled.div``;

const OffersDiv = styled(FlexCenterContainer)`
  flex-direction: column;
  background: ${Colors.obsidian};
  padding: 1em;
`;

const Header = styled.div`
  padding: 1em 0;
  background: ${Colors.cream};
  width: 100%;
  position:relative;
`;

const Text = styled(FlexCenterContainer)`
  color: ${Colors.lightBlack};
  font-size: 8em;
  font-family: "Billion Miracles";
  margin-right: 9em;
`;

const SecondText = styled(FlexCenterContainer)`
  color: ${Colors.lightBlack};
  font-size: 4em;
  font-family: "Billion Miracles";
  margin-right: 9em;
  transform: translateY(-40%);
`;

const OfferDiv = styled(FlexCenterContainer)`
  cursor: pointer;
  flex-direction: ${(props) => (props.direction ? "row" : "row-reverse")};
  transform: translateY(-20%);
`;

const Box = styled.div`
  background: ${Colors.cream};
  color: ${Colors.black};
  padding: 2em;
  margin: 1em 0;
  width: 50em;

  display: flex;
  justify-content: ${(props) => (props.direction ? "start" : "end")};
  align-items: ${(props) => (props.direction ? "start" : "end")};
  text-align: ${(props) => (props.direction ? "left" : "right")};
  transform: translateY(30%);
  flex-direction: column;
  position:relative;
`;

const LineArt = styled.img`
  position: absolute;
  top: 0.5em;
   left: 15%;
  transform: translate(-15%, 0);
  left: ${(props) => (props.direction ? "45em" : "4em")};;
  width: 6em;
`;

const LineArtHeader = styled.img`
  position: absolute;
  top: 0.5em;
  left: 50%;
  transform: translate(-50%, 0);
  width: 10em;
`;

const Title = styled.div`
  font-family: "Billion Miracles";
  white-space: nowrap;
  font-size: 5em;
  text-align: inherit;
  transform: translateY(-15%);
`;

const Description = styled.div`
  text-align: inherit;
`;

const Photo = styled.img`
  width: 15em;
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
  ].map((it) => <Offer params={it} />);

  return (
    <Container id="offers">
      <Header>
        <Text>Oferta</Text>
        <SecondText>Co mogę dla Ciebie zrobić</SecondText>
        <LineArtHeader src={Line6}/>
      </Header>
      <OffersDiv>{offers}</OffersDiv>
    </Container>
  );
};

const Offer = (props) => {
  const { direction, title, decription, photo, lineArt } = props.params;

  return (
    <OfferDiv direction={direction}>
      <Box direction={direction}>
        <Title>{title}</Title>
        <Description>{decription}</Description>
        <LineArt src={lineArt} direction={direction} />
      </Box>
      <Photo src={photo} />
    </OfferDiv>
  );
};

export default Offers;
