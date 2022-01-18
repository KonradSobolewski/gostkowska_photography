import React from "react";
import styled from "styled-components";
import BOHO2 from "../../assets/session1/boho2.jpg";
import { FlexCenterContainer, Colors } from "../../style/common";

const OffersDiv = styled(FlexCenterContainer)`
  flex-direction: column;
  background: ${Colors.obsidian};
  padding: 4em;
  position: relative;
`;

const Header = styled.div`
  position: absolute;
  top: 0.2em;
  left: 2em;
  font-size: 7em;
  font-family: "Billion Miracles";
  color: ${Colors.white};
`;

const OfferDiv = styled(FlexCenterContainer)`
  flex-direction: ${(props) => (props.direction ? "row" : "row-reverse")};
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
  flex-direction: column;
`;

const Title = styled.div`
  font-family: "Billion Miracles";
  white-space: nowrap;
  font-size: 5em;
`;

const Description = styled.div`
  text-align: left;
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
      decription: "Tutaj cos bedzie",
      photo: BOHO2,
    },
    {
      direction: true,
      title: "Sesja ślubne",
      decription: "Tutaj cos bedzie",
      photo: BOHO2,
    },
  ].map((it) => <Offer params={it} />);

  return (
    <OffersDiv id="offers">
      <Header>Oferta</Header>
      {offers}
    </OffersDiv>
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
