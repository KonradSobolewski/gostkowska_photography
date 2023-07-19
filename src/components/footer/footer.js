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
  color: ${Colors.cream};

  @media only screen and (max-width: 600px) {
    font-size: 0.6em;
  }
`;

const Sites = styled(FlexCenterContainer)`
  flex-direction: row;
`;

const Site = styled.div`
  padding: 2em 2em 0 2em;
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
  background-color: ${Colors.obsidian};
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
  filter: invert(1);
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
  // padding: 1em;
  color: ${Colors.white};
`;

const Footer = () => {
  return (
    <FooterStyle>
      <Instagram></Instagram>
      <Upper>
        <Contact>
          <div>
            gostkowskamartyna.info@gmail.com
            <br />
            tel. 782-884-474
          </div>
          <SocialMedia>
            <A
              href="https://www.instagram.com/gostkowskaphotography/"
              target="_blank"
              rel="noreferrer"
            >
              <SocialMediaItem src={IG} id="instagram" alt={"Instagram logo"} />
            </A>
            <A
              href="https://www.facebook.com/gostkowskaphotography"
              target="_blank"
              rel="noreferrer"
            >
              <SocialMediaItem src={FB} id="facebook" alt={"Facebook logo"} />
            </A>
          </SocialMedia>
        </Contact>
      </Upper>
      <Sites>
        <A href="/#content">
          <Site> O mnie</Site>
        </A>
        <A href="/#portfolio">
          <Site>Portfolio</Site>
        </A>
        <A href="/#offers">
          <Site>Oferta</Site>
        </A>
        <A href="/#contact">
          <Site>Kontakt</Site>
        </A>
      </Sites>
      <Copy>
        Gostkowska Photography &copy; Warszawa 2022. All rights reserved.
      </Copy>
    </FooterStyle>
  );
};

export default Footer;
