import React from "react";
import styled from "styled-components";
import Indywidualna from "../../assets/offer/Indywidualne.jpg";
import Narzeczenskie from "../../assets/offer/Narzeczenskie.jpg";
import Reportaze from "../../assets/offer/Reportaze.jpg";
import Slubne from "../../assets/offer/Slubne.jpg";
import Fotoprodukty from "../../assets/offer/Fotoprodukty.jpg";
import Produktowe from "../../assets/offer/Produktowe.jpg";
import BG from "../../assets/offerbg.jpg";
import { FlexCenterContainer, Colors, A } from "../../style/common";
import { isMobile } from "react-device-detect";
import { Link } from "react-router-dom";

const Container = styled(FlexCenterContainer)`
  background-image: url(${BG});
  background-size: cover;
  z-index: -2;
  flex-direction: column;
`;

const Text = styled(FlexCenterContainer)`
  background: ${Colors.lightCream};
  width: 100%;
  padding: 0.5em 0;
  color: ${Colors.lightBlack};
  font-size: ${(props) => (props.isMobile ? "3em" : "5em")};
  font-family: "Walterose";
  @media (max-width: 350px) {
    font-size: 2em;
  }
`;

const OffersDiv = styled(FlexCenterContainer)`
  flex-direction: ${(props) => (props.isMobile ? "column" : "row")};
  padding: 2em 0 0 0;
  color: ${Colors.white};
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

const OfferDiv = styled(FlexCenterContainer)`
  flex-direction: column;
  background: ${Colors.cream};
  margin: 1em 2em;

  @media (max-width: 1200px) {
    margin: 1em 1em;
  }
`;

const Title = styled.div`
  font-family: "chocolates";
  white-space: nowrap;
  font-size: 1.4em;
  text-align: inherit;
  padding: 0.5em;
  color: ${Colors.lightBlack};
  text-transform: uppercase;

  @media (max-width: 1200px) {
    font-size: 1.2em;
  }
`;

const Photo = styled.img`
  width: 17em;
  margin: 0.2em;

  @media (max-width: 1200px) {
    width: 14em;
  }
`;

const Button = styled.button`
  all: unset;
  padding: 1em 2em;
  white-space: nowrap;
  margin: 3em 0 4em 0;
  font-size: ${(props) => (props.isMobile ? "1em" : "1.5em")};
  background: ${Colors.cream};
  cursor: pointer;
  border: 1px solid #000;
  transition: all 0.5s ease-in-out;
  display:flex;
  align-items: center;
  :hover {
    background: ${Colors.lightCream};
  }
`;

const Offers = () => {
  const offers1 = [
    {
      id: 1,
      title: "Sesja indywidualna",
      photo: Indywidualna,
      link: "/indywidualna",
      alt: "Individual session"
    },
    {
      id: 2,
      title: "Sesja narzeczeńska",
      photo: Narzeczenskie,
      link: "/narzeczenska",
      alt: "Engagement session"
    },
    {
      id: 3,
      title: "Sesja ślubna",
      photo: Slubne,
      link: "/slubna",
      alt: "Married session"
    }
  ].map((it) => <Offer key={it.title} params={it} />);

  const offers2 = [
    {
      id: 4,
      title: "Reportaż",
      photo: Reportaze,
      link: "/reportaz",
      alt: "Wedding reportage"
    },
    {
      id: 5,
      title: "Produktowe",
      photo: Produktowe,
      link: "/oroduktowe",
      alt: "product session"
    },
    {
      id: 6,
      title: "Fotoprodukty",
      photo: Fotoprodukty,
      link: "/otoprodukty",
      alt: "fotoproduct session"
    },
  ].map((it) => <Offer key={it.title} params={it} />);

  return (
    <Container id="offers">
      <Text isMobile={isMobile}>oferta</Text>
      <OffersDiv isMobile={isMobile}>{offers1}</OffersDiv>
      <OffersDiv isMobile={isMobile}>{offers2}</OffersDiv>
      <Button isMobile={isMobile}>
        <A href="https://sobolewskaphotography.bookmy.art">UMÓW TERMIN SWOJEJ SESJI</A>
      </Button>
    </Container>
  );
};

const Offer = (props) => {
  const { title, photo, link, alt } = props.params;

  return (
    <OfferDiv>
      <Photo src={photo} loading="lazy" alt={alt} />
      <Title>{title}</Title>
      <Link to={link} key={props.id} style={{ textDecoration: "none" }}>
        {/* <More>Poznaj ofertę</More> */}
      </Link>
    </OfferDiv>
  );
};

export default Offers;
