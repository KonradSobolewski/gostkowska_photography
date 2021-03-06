import React from "react";
import styled from "styled-components";
import TLO1 from "../../assets/TLO1.png";
import TLO2 from "../../assets/TLO2.png";
import TLO3 from "../../assets/TLO3.png";
import { useEffect } from "react";
import WebNavigation from "./webNavigation";
import MobileNavigation from "./mobileNavigation";
import ScrollDown from "./scrollDown";
import { useDispatch, useSelector } from "react-redux";
import * as navigationActions from "../../redux/actions/navigationActions";
import { isMobile } from "react-device-detect";

const Nav = styled.nav`
  position: fixed;
  left: 0;
  right: 0;
  z-index: 10;
`;

const Bg = styled.div`
  height: 100vh;
  position: relative;
  top: 0;
  left: 0;
  right: 0;
`;

const Img = styled.img`
  position: absolute;
  height: inherit;
  object-fit: cover;
  margin: auto;
  width: 100%;
`;

const Img1 = styled(Img)`
  @keyframes fadeIn1 {
    0% {
      opacity: 1;
    }

    10% {
      opacity: 1;
    }

    20% {
      opacity: 1;
    }

    30% {
      opacity: 1;
    }

    40% {
      opacity: 0;
    }

    50% {
      opacity: 0;
    }

    60% {
      opacity: 0;
    }

    70% {
      opacity: 0;
    }

    80% {
      opacity: 1;
    }

    100% {
      opacity: 1;
    }
  }
  animation: fadeIn1 15s infinite;
`;

const Img2 = styled(Img)`
  @keyframes fadeIn2 {
    0% {
      opacity: 0;
    }

    10% {
      opacity: 0;
    }

    20% {
      opacity: 0;
    }

    30% {
      opacity: 1;
    }

    40% {
      opacity: 1;
    }

    50% {
      opacity: 1;
    }

    60% {
      opacity: 1;
    }

    70% {
      opacity: 0;
    }

    80% {
      opacity: 0;
    }

    100% {
      opacity: 0;
    }
  }
  animation: fadeIn2 15s infinite;
`;

const Img3 = styled(Img)`
  @keyframes fadeIn3 {
    0% {
      opacity: 0;
    }

    10% {
      opacity: 0;
    }

    20% {
      opacity: 0;
    }

    30% {
      opacity: 0;
    }

    40% {
      opacity: 0;
    }

    50% {
      opacity: 0;
    }

    60% {
      opacity: 1;
    }

    70% {
      opacity: 1;
    }

    80% {
      opacity: 1;
    }

    100% {
      opacity: 0;
    }
  }
  animation: fadeIn3 15s infinite;
`;

const NavBar = () => {
  const dispatch = useDispatch();

  const show = useSelector((state) => state.nav).show;

  const handleScroll = () => {
    if (window.pageYOffset === 0) dispatch(navigationActions.showNav());
    else dispatch(navigationActions.hideNav());
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <>
      <Nav show={show}>
        {isMobile ? <MobileNavigation /> : <WebNavigation />}
      </Nav>
      <Bg>
        <Img1 src={TLO1} id="bg1" alt={"First background image"} />
        <Img2 src={TLO2} id="bg2" alt={"Second background image"} />
        <Img3 src={TLO3} id="bg3" alt={"Third background image"} />
        <ScrollDown />
      </Bg>
    </>
  );
};

export default NavBar;
