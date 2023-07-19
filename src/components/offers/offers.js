import React from "react";
import styled from "styled-components";
import Indywidualna from "../../assets/offer/Indywidualne.jpg";
import Narzeczenskie from "../../assets/offer/Narzeczenskie.jpg";
import Reportaze from "../../assets/offer/Reportaze.jpg";
import Slubne from "../../assets/offer/Slubne.jpg";
import BG from "../../assets/offerbg.jpg";
import { FlexCenterContainer, Colors, A } from "../../style/common";
import { isMobile } from "react-device-detect";
import { Link } from "react-router-dom";

const Container = styled.div`
  background-image: url(${BG});
  background-size: cover;
  z-index: -2;
`;

const Header = styled.div`
  padding: 2em 0;
  background: ${Colors.obsidian};
  width: auto;
  position: relative;
`;

const Text = styled(FlexCenterContainer)`
  color: ${Colors.white};
  font-size: ${(props) => (props.isMobile ? "2em" : "2em")};
  font-family: "Montaser extra-light";
  @media (max-width: 350px) {
    font-size: 4em;
  }
`;

const SecondText = styled(FlexCenterContainer)`
  color: ${Colors.white};
  font-size: ${(props) => (props.isMobile ? "3em" : "7em")};
  font-family: "Billion Miracles";

  @media (max-width: 350px) {
    font-size: 2em;
  }
`;

const OffersDiv = styled(FlexCenterContainer)`
  flex-direction: ${(props) => (props.isMobile ? "column" : "row")};
  padding:  ${(props) => (props.isMobile ? "2em" : "5em")};
  color: ${Colors.white};
`;

const OfferDiv = styled(FlexCenterContainer)`
  flex-direction: column;
  background: ${Colors.obsidian};
  margin: 2em;
`;

const Title = styled.div`
  font-family: "Billion Miracles";
  white-space: nowrap;
  font-size: 3em;
  text-align: inherit;
`;

const More = styled(FlexCenterContainer)`
  pointer-events: auto;
  cursor: pointer;
  color: ${Colors.black};
  background: ${Colors.cream};
  transition: all 0.3s ease-in-out;
  padding: 1em;
  margin: 1em;
  :hover {
    color: ${Colors.buttonLight};
  }
`;

const Photo = styled.img`
  width: 15em;
  margin: 1em;
`;

const Offers = () => {
  const offers = [
    {
      id: 1,
      title: "Sesja indywidualna",
      photo: Indywidualna,
      link: "/indywidualna",
    },
    {
      id: 2,
      title: "Sesja narzeczeńska",
      photo: Narzeczenskie,
      link: "/narzeczenska",
    },
    {
      id: 3,
      title: "Sesja ślubna",
      photo: Slubne,
      link: "/slubna",
    },
    {
      id: 4,
      title: "Reportaż",
      photo: Reportaze,
      link: "/reportaz",
    },
  ].map((it) => <Offer key={it.title} params={it} />);

  return (
    <Container id="offers">
      <Header>
        <Text isMobile={isMobile}>poznaj</Text>
        <SecondText isMobile={isMobile}>ofertę</SecondText>
      </Header>
      <OffersDiv isMobile={isMobile}>{offers}</OffersDiv>
    </Container>
  );
};

const Offer = (props) => {
  const { title, photo, link } = props.params;

  return (
    <OfferDiv>
      <Photo src={photo} loading="lazy" />
      <Title>{title}</Title>
      <Link to={link} key={props.id} style={{ textDecoration: "none" }}>
        <More>Poznaj ofertę</More>
      </Link>
    </OfferDiv>
  );
};

export default Offers;
