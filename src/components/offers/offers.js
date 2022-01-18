import React from "react";
import styled from "styled-components";
import BOHO2 from "../../assets/session1/boho2.jpg";
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
    },
    {
      direction: false,
      title: "Sesja miłosna",
      decription:
        "Tutaj cos bedzie asdasdadas asdsad asdsa dsadsadsadsa aadadasdsa daasdasdasdasdasdasdasdas " +
        " adasd asdasdadadas  adasdasd  sadsad adsa dasdasd asd asdas asdassadsad aadsad asda asdas dasdasdasd asd asd as",
      photo: BOHO2,
    },
    {
      direction: true,
      title: "Sesja ślubne",
      decription:
        "Tutaj cos bedzie asdasdadas asdsad asdsa dsadsadsadsa aadadasdsa daasdasdasdasdasdasdasdas " +
        " adasd asdasdadadas  adasdasd  sadsad adsa dasdasd asd asdas asdassadsad aadsad asda asdas dasdasdasd asd asd as",
      photo: BOHO2,
    },
  ].map((it) => <Offer params={it} />);

  return (
    <Container id="offers">
      <Header>
        <Text>Oferta</Text>
        <SecondText>Co mogę dla Ciebie zrobić</SecondText>
      </Header>
      <OffersDiv>{offers}</OffersDiv>
    </Container>
  );
};

const Offer = (props) => {
  const { direction, title, decription, photo } = props.params;

  return (
    <OfferDiv direction={direction}>
      <Box direction={direction}>
        <Title>{title}</Title>
        <Description>{decription}</Description>
      </Box>
      <Photo src={photo} />
    </OfferDiv>
  );
};

export default Offers;
