import React from "react";
import styled from "styled-components";
import IG from "../../assets/ig.png";
import FB from "../../assets/fb.png";
import { FlexCenterContainer, Colors, A } from "../../style/common";

const FooterStyle = styled(FlexCenterContainer)`
  font-size: 1m;
  text-align: center;
  position: relative;
  bottom: 0;
  flex-direction: column;
  background: ${Colors.lightBlack};
  color: #ddd;

  @media only screen and (max-width: 600px) {
    font-size: 0.6em;
  }
`;

const Sites = styled(FlexCenterContainer)`
  flex-direction: row;
`;

const Site = styled.div`
  padding: 0 2em;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  :hover {
    color: ${Colors.white};
  }
`;

const Copy = styled.div`
  padding: 2em;
  color: ${Colors.white};
`;

const Upper = styled(FlexCenterContainer)`
  flex-direction: row;
  width: -webkit-fill-available;
  padding: 1em;
  color: ${Colors.white};
  background-color: ${Colors.lightBlack};
`;

const SocialMedia = styled(FlexCenterContainer)`
  padding: 0 5em;
  @media only screen and (max-width: 1000px) {
    padding: 0;
  }
`;

const SocialMediaItem = styled.img`
  padding: 1em 1em 0 1em;
  width: 3em;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
`;

const Contact = styled.div`
  display: inherit;
  padding: 1em;
  color: ${Colors.white};
  text-align: left;
  line-height: 2em;

  @media only screen and (max-width: 1000px) {
    display: block;
  }
`;

const Instagram = styled.div`
  color: ${Colors.white};
`;

const DATA = styled(FlexCenterContainer)`
  flex-direction: column;
`;

const Footer = () => {
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  return (
    <FooterStyle id="contact">
      <Instagram></Instagram>
      <Upper>
        <Contact>
          <DATA>
            <A href="mailto:sobolewskaphotography@gmail.com">
              sobolewskaphotography@gmail.com
            </A>
            <A href="tel:+48782884474">tel. 782-884-474</A>
          </DATA>
          <SocialMedia>
            <A
              href="https://www.instagram.com/sobolewskaphotography/"
              target="_blank"
              rel="noreferrer"
            >
              <SocialMediaItem src={IG} id="instagram" alt={"Instagram logo"} loading="lazy"/>
            </A>
            <A
              href="https://www.facebook.com/sobolewskamartynaphotography"
              target="_blank"
              rel="noreferrer"
            >
              <SocialMediaItem src={FB} id="facebook" alt={"Facebook logo"} loading="lazy"/>
            </A>
          </SocialMedia>
        </Contact>
      </Upper>
      <Sites>
        <Site onClick={() => scrollTo("history")}>Realizacje</Site>
        <Site onClick={() => scrollTo("portfolio")}>Portfolio</Site>
        <Site onClick={() => scrollTo("offers")}>Oferta</Site>
        <Site onClick={() => scrollTo("contact")}>Kontakt</Site>
      </Sites>
      <Copy>
        Sobolewska Photography &copy; Warszawa 2023. All rights reserved.
      </Copy>
    </FooterStyle>
  );
};

export default Footer;
