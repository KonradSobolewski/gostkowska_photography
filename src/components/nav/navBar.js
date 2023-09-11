import React from "react";
import styled from "styled-components";
import BG from "../../assets/bg.jpg";
import { useEffect } from "react";
import WebNavigation from "./webNavigation";
import MobileNavigation from "./mobileNavigation";
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
        <Img src={BG} id="bg" alt={"Background image"} loading="lazy"/>
      </Bg>
    </>
  );
};

export default NavBar;
