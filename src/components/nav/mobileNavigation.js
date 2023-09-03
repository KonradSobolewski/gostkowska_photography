import React, { useState } from "react";
import styled from "styled-components";
import { A, FlexCenterContainer } from "../../style/common";
import logo1 from "../../assets/LOGO.png";
import IG from "../../assets/ig.png";
import FB from "../../assets/fb.png";

const Background = styled(FlexCenterContainer)`
  color: #555;
  background-color: rgba(250, 250, 250, 1);
  transition: color 0.1s, background-color 0.5s ease-in-out;
`;

const Mobile = styled(FlexCenterContainer)`
  flex-direction: column;
  font-size: 20px;
  width: 100vw;
`;

const FirstRow = styled(Background)`
  z-index: 10;
  width: 100%;
  justify-content: center;
`;

const LoginContainer = styled.div`
  flex: 1;
`;

const Tab = styled.li`
  list-style: none;
  cursor: pointer;
  padding: 0.8em 0px;
  white-space: nowrap;
  transition: all 0.5s ease-in-out;
`;

const NavLogoTab = styled(Tab)`
  flex: 1;
  padding: ${(props) => (props.show ? "1em" : ".5em")};

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Img = styled.img`
  filter: drop-shadow(0px 0px 4px #555) invert(1);
  width: 8em;
  transition: all 0.5s ease-in-out;
`;

const Hamburger = styled(FlexCenterContainer)`
  flex: 1;
  flex-direction: column;
  position: relative;
`;

const Input = styled.input`
  position: absolute;
  transform: scale(2.5);
  opacity: 0; /* hide this */
  z-index: 20; /* and place it over the hamburger */
  -webkit-touch-callout: none;

  :checked ~ span {
    opacity: 1;
    transform: rotate(-45deg) translate(-1px, 3px);
  }

  :checked ~ span:nth-last-child(2) {
    opacity: 0;
    transform: rotate(0deg) scale(0.3, 0.3);
  }
  :checked ~ span:nth-last-child(3) {
    transform: rotate(45deg) translate(-1px, -1px);
  }
`;

const Span = styled.span`
  display: block;
  width: 1.5em;
  height: 3px;
  margin: 2px;
  position: relative;

  background: #666;
  z-index: 15;
  transform-origin: 4px 1px;

  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
    background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;

  :first-child {
    transform-origin: 0% 0%;
  }

  :nth-last-child(1) {
    transform-origin: 0% 100%;
  }
`;

const NavTabs = styled(Background)`
  width: 100%;
  z-index: 0;
  flex-direction: column;

  transform: translateY(${(props) => (props.show ? "0%" : "-100%")});
  transition: all 0.5s ease-in-out;
`;

const SocialMedia = styled(FlexCenterContainer)`
  flex: 1;
`;

const SocialMediaItem = styled.img`
  padding: 2em;
  width: 2em;
  filter: invert(0.6);
  cursor: pointer;
  transition: all 0.5s ease-in-out;
`;

const MobileNavigation = () => {
  const [show, setShow] = useState(false);

  const handleClick = (event) => {
    setShow(event.target.checked);
  };

  return (
    <Mobile show={show}>
      <FirstRow show={show}>
        <LoginContainer></LoginContainer>
        <NavLogoTab show={show}>
          <a href=".">
            <Img
              show={show}
              src={logo1}
              id="sobolewska_logo"
              alt={"Logo of Martyna Sobolewska"}
            />
          </a>
        </NavLogoTab>
        <Hamburger>
          <Input type="checkbox" onClick={handleClick} />
          <Span></Span>
          <Span></Span>
          <Span></Span>
        </Hamburger>
      </FirstRow>
      <NavTabs show={show}>
        <Tab show={show}>
          <A href="#history">Realizacje</A>
        </Tab>
        <Tab show={show}>
          <A href="#portfolio">Portfolio</A>
        </Tab>
        <Tab show={show}>
          <A href="#offers">Oferta</A>
        </Tab>
        <Tab show={show}>
          <A href="#contact">Kontakt</A>
        </Tab>
        <Tab show={show}>
          <A href="https://sobolewskaphotography.photonesto.com/g">
            Strefa Klienta
          </A>
        </Tab>

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
            />
          </a>
        </SocialMedia>
      </NavTabs>
    </Mobile>
  );
};

export default MobileNavigation;
