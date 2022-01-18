import React from "react";
import styled from "styled-components";
import IG from "../../assets/ig.png";
import FB from "../../assets/fb.png";
import { FlexCenterContainer, Colors } from "../../style/common";

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
  background-color: #2a2a2a;
`;

const SocialMedia = styled(FlexCenterContainer)``;

const SocialMediaItem = styled.img`
  padding: 1em 1em 0 1em;
  width: 3em;
  filter: invert(1);
  cursor: pointer;
  transition: all 0.5s ease-in-out;
`;

const Contact = styled.div`
  padding: 1em;
  color: ${Colors.white};
  text-align: left;
  line-height: 2em;
`;

const Instagram = styled.div`
  padding: 1em;
  color: ${Colors.white};
`;

const Footer = () => {
  return (
    <FooterStyle>
      <Upper>
        <Contact>
          gostkowskamartyna.info@gmail.com
          <br />
          tel. 782-884-474
          <SocialMedia>
            <a
              href="https://www.instagram.com/gostkowskaphotography/"
              target="_blank"
              rel="noreferrer"
            >
              <SocialMediaItem src={IG} id="instagram" alt={"Instagram logo"} />
            </a>
            <a
              href="https://www.facebook.com/gostkowska.martyna"
              target="_blank"
              rel="noreferrer"
            >
              <SocialMediaItem src={FB} id="facebook" alt={"Facebook logo"} />
            </a>
          </SocialMedia>
        </Contact>
        <Instagram></Instagram>
      </Upper>
      <Sites>
        <Site>O mnie</Site>
        <Site>Portfolio</Site>
        <Site>Oferta</Site>
        <Site>Kontakt</Site>
      </Sites>
      <Copy>
        Gostkowska Photography &copy; Warszawa 2022. All rights reserved.
      </Copy>
    </FooterStyle>
  );
};

export default Footer;
