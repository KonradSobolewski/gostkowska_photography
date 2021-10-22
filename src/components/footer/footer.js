import React from "react";
import styled from "styled-components";

const FooterStyle = styled.div`
  font-size: 1em;
  text-align: center;
  position: relative;
  bottom: 0;
  width: 100%;
  height: 5em;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #eee;

  @media only screen and (max-width: 600px) {
    font-size: 0.6em;
  }
`;

const Footer = () => {
  return (
    <FooterStyle>
      Gostkowska Photography &copy; Warszawa 2021. All rights reserved.
    </FooterStyle>
  );
};

export default Footer;
