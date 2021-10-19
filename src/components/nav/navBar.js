import React from "react";
import styled from "styled-components";
import bg1 from "../../assets/bg1.jpeg";
import { useEffect } from "react";
import WebNavigation from "./webNavigation";
import MobileNavigation from "./mobileNavigation";
import { useDispatch, useSelector } from "react-redux";
import * as navigationActions from "../../redux/actions/navigationActions";

const Nav = styled.nav`
  position: fixed;
  left: 0;
  right: 0;
`;

const Bg = styled.img`
  width: calc(100vw - (100vw - 100%));
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
        {/* <WebNavigation /> */}
        <MobileNavigation/>
        {/* https://stackoverflow.com/questions/39435395/reactjs-how-to-determine-if-the-application-is-being-viewed-on-mobile-or-deskto */}
      </Nav>
      <Bg src={bg1} id="bg1" alt={"Logo of Martyna Gostkowska"} />
    </>
  );
};

export default NavBar;
