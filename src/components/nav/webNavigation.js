import React from "react";
import styled from "styled-components";
import logo1 from "../../assets/LOGO.png";
import IG from "../../assets/ig.png";
import FB from "../../assets/fb.png";
import { useSelector } from "react-redux";
import { A, FlexCenterContainer } from "../../style/common";

const Web = styled(FlexCenterContainer)`
  color: ${(props) => (props.show ? "#DDD" : "#555")};
  background-color: rgba(
    ${(props) => (props.show ? 0 : 250)},
    ${(props) => (props.show ? 0 : 250)},
    ${(props) => (props.show ? 0 : 250)},
    ${(props) => (props.show ? 0.1 : 1)}
  );
  position: relative;
  height: ${(props) => (props.show ? "8em" : "5em")};
  transition: color 0.1s, background-color 0.5s, height 0.5s ease-in-out;

  :hover {
    background-color: rgba(
      ${(props) => (props.show ? 0 : 235)},
      ${(props) => (props.show ? 0 : 235)},
      ${(props) => (props.show ? 0 : 235)},
      ${(props) => (props.show ? 0.4 : 1)}
    );
  }
`;

const SocialMedia = styled(FlexCenterContainer)`
  left: 10%;
  transform: translate(-10%, 0);
  position: absolute;
`;

const NavTabs = styled(FlexCenterContainer)`
  left: 50%;
  transform: translate(-50%, 0);
  position: absolute;
`;

const ContactContainer = styled(FlexCenterContainer)`
right: 5%;
transform: translate(5%, 0);
position: absolute;`;

const Tab = styled.li`
  position: relative;
  list-style: none;
  cursor: pointer;
  padding: 0px 40px;
  display: flex;
  font-size: 1.2em;
  white-space: nowrap;
  align-items: center;
  transition: all 0.5s ease-in-out;
`;

const NavTab = styled(Tab)`
  :hover {
    color: ${(props) => (props.show ? "#FFF" : "#000")};
    filter: drop-shadow(0px 0px 20px #fff);
  }
`;

const NavLogoTab = styled(Tab)`
  padding: ${(props) => (props.show ? "20px" : "5px")} 20px;
`;

const Img = styled.img`
  filter: invert(${(props) => (props.show ? 1 : 0)})
    drop-shadow(0px 0px 4px #fff);
  width: ${(props) => (props.show ? "10em" : "6em")};
  transition: all 0.5s ease-in-out;
`;

const SocialMediaItem = styled.img`
  padding: 1em;
  width: ${(props) => (props.show ? "3em" : "2em")};
  filter: invert(${(props) => (props.show ? 0.7 : 0.3)});
  cursor: pointer;
  transition: all 0.5s ease-in-out;

  :hover {
    filter: invert(${(props) => (props.show ? 1 : 0)});
  }
`;

const WebNavigation = () => {
  const show = useSelector((state) => state.nav).show;

  return (
    <Web show={show}>
      <SocialMedia>
        <a
          href="https://www.instagram.com/gostkowskaphotography/"
          target="_blank"
          rel="noreferrer"
        >
          <SocialMediaItem
            show={show}
            src={IG}
            id="instagram"
            alt={"Instagram logo"}
          />
        </a>
        <a
          href="https://www.facebook.com/gostkowska.martyna"
          target="_blank"
          rel="noreferrer"
        >
          <SocialMediaItem
            show={show}
            src={FB}
            id="facebook"
            alt={"Facebook logo"}
          />
        </a>
      </SocialMedia>
      <NavTabs>
        <NavTab show={show}>
          <A href="#content">O mnie</A>
        </NavTab>
        <NavTab show={show}>
          <A href="#history">Historie</A>
        </NavTab>
        <NavLogoTab show={show}>
          <a href=".">
            <Img
              show={show}
              src={logo1}
              id="gostkowska_logo"
              alt={"Logo of Martyna Gostkowska"}
            />
          </a>
        </NavLogoTab>
        <NavTab show={show}>
          <A href="#portfolio">Portfolio</A>
        </NavTab>
        <NavTab show={show}>
          <A href="#offers">Oferta </A>
        </NavTab>
      </NavTabs>
      <ContactContainer>
        <NavTab show={show}>
          <A href="#contact">Kontakt </A>
        </NavTab>
      </ContactContainer>
    </Web>
  );
};

export default WebNavigation;
