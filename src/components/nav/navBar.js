import React from 'react';
import styled from 'styled-components';
import bg1 from '../../assets/bg1.jpeg';
import { useEffect } from 'react';
import WebNavigation from './webNavigation';
import { useDispatch, useSelector } from 'react-redux';
import * as navigationActions from "../../redux/actions/navigationActions"

const Nav = styled.nav`  
    position: fixed;
    left: 0;
    right: 0;
    color: ${props => (props.show ? "#DDD" : "#555")};
    background-color: rgba(
      ${props => (props.show ? 0 : 250)},
      ${props => (props.show ? 0 : 250)},
      ${props => (props.show ? 0 : 250)}, 
      ${props => (props.show ? 0.1 : 1)});
    transition: color 0.1s, background-color 0.5s ease-in-out;

    :hover {
      background-color: rgba(
        ${props => (props.show ? 0 : 235)},
        ${props => (props.show ? 0 : 235)},
        ${props => (props.show ? 0 : 235)}, 
        ${props => (props.show ? 0.4 : 1)});
    }
`;

const Bg = styled.img`
    width: calc(100vw - (100vw - 100%));
`;

const Mobile = styled.div``;

const NavBar = () => {
  const dispatch = useDispatch();

  const show = useSelector(state => state.nav).show;

  const handleScroll = () => {
    if (window.pageYOffset === 0)
      dispatch(navigationActions.showNav())
    else
      dispatch(navigationActions.hideNav())
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <>
      <Nav show={show}>
        <WebNavigation />
        <Mobile></Mobile>
      </Nav>
      <Bg src={bg1} id="bg1" alt={"Logo of Martyna Gostkowska"} />
    </>
  )
}

export default NavBar;