import React from "react";
import styled from "styled-components";
import logo1 from "../../assets/LOGO.png";
import IG from "../../assets/ig.png";
import FB from "../../assets/fb.png";
import USER from "../../assets/padlock.png";
import { useSelector } from "react-redux";
import { A, FlexCenterContainer } from "../../style/common";

const Web = styled(FlexCenterContainer)`
  color: ${(props) => (props.show ? "#EEE" : "#444")};
  background-color: rgba(
    ${(props) => (props.show ? 0 : 250)},
    ${(props) => (props.show ? 0 : 250)},
    ${(props) => (props.show ? 0 : 250)},
    ${(props) => (props.show ? 0.25 : 1)}
  );
  position: relative;
  height: ${(props) => (props.show ? "8em" : "5em")};
  transition: color 0.1s, background-color 0.5s, height 0.5s ease-in-out;

  :hover {
    background-color: rgba(
      ${(props) => (props.show ? 0 : 255)},
      ${(props) => (props.show ? 0 : 255)},
      ${(props) => (props.show ? 0 : 255)},
      ${(props) => (props.show ? 0.5 : 1)}
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
  position: absolute;
`;

const Tab = styled.li`
  position: relative;
  list-style: none;
  cursor: pointer;
  padding: 0px 40px;
  display: flex;
  font-size: 1.3em;
  white-space: nowrap;
  align-items: center;
  transition: all 0.5s ease-in-out;

  @media (max-width: 1250px) {
    font-size: 1em;
    padding: 0px 20px;
  }
`;

const NavTab = styled(Tab)`
  :hover {
    color: ${(props) => (props.show ? "#FFF" : "#000")};
  }
`;

const NavLogoTab = styled(Tab)`
  padding: ${(props) => (props.show ? "20px" : "5px")} 20px;
`;

const Img = styled.img`
  filter: invert(${(props) => (props.show ? 0 : 1)})
    drop-shadow(0px 0px 4px #fff);
  width: ${(props) => (props.show ? "15em" : "7em")};
  transition: all 0.5s ease-in-out;
`;

const SocialMediaItem = styled.img`
  padding: 1em;
  width: ${(props) => (props.show ? "3em" : "2em")};
  filter: invert(${(props) => (props.show ? 0.1 : 0.7)});
  cursor: pointer;
  transition: all 0.5s ease-in-out;

  :hover {
    filter: invert(${(props) => (props.show ? 0 : 1)});
  }
`;

const User = styled.img`
    width:1.3em;
    filter: invert(${(props) => (props.show ? 0 : 1)});
    padding-right: .5em;
    transition: all 0.5s ease-in-out;

    :hover {
      filter: invert(${(props) => (props.show ? 0 : 1)});
    }
`;

const WebNavigation = () => {
  const show = useSelector((state) => state.nav).show;

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  const logoStyle = {
    "display": "flex",
    "alignItems": "center"
  }

  return (
    <Web show={show}>
      <SocialMedia>
        <a
          href="https://www.instagram.com/sobolewskaphotography/"
          target="_blank"
          rel="noreferrer"
        >
          <SocialMediaItem
            show={show}
            src={IG}
            id="instagram"
            alt={"Instagram logo"}
            loading="lazy"
          />
        </a>
        <a
          href="https://www.facebook.com/sobolewskamartynaphotography"
          target="_blank"
          rel="noreferrer"
        >
          <SocialMediaItem
            show={show}
            src={FB}
            id="facebook"
            alt={"Facebook logo"}
            loading="lazy"
          />
        </a>
      </SocialMedia>
      <NavTabs>
        <NavTab show={show} onClick={() => scrollTo("history")}>
          Realizacje
        </NavTab>
        <NavTab show={show} onClick={() => scrollTo("portfolio")}>
          Portfolio
        </NavTab>
        <NavLogoTab show={show}>
          <a href=".">
            <Img
              show={show}
              src={logo1}
              id="sobolewska_logo"
              alt={"Logo of Martyna Sobolewska"}
              loading="lazy"
            />
          </a>
        </NavLogoTab>
        <NavTab show={show} onClick={() => scrollTo("offers")}>
          Oferta
        </NavTab>
        <NavTab show={show} onClick={() => scrollTo("contact")}>
          Kontakt
        </NavTab>
      </NavTabs>
      <ContactContainer>
        <NavTab show={show}>
          <A href="https://sobolewskaphotography.photonesto.com/g" style={logoStyle}>
            <User src={USER}  show={show} alt="User area icon" loading="lazy"/>
            Strefa Klienta
          </A>
        </NavTab>
      </ContactContainer>
    </Web>
  );
};

export default WebNavigation;
