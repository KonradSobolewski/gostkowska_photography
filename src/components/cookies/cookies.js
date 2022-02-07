import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import styled from "styled-components";
import { FlexCenterContainer, Colors } from "../../style/common";

const Container = styled.div`
  position: fixed;
  z-index: 100;
  bottom: 0;
  left: 0;
  right: 0;
  display: ${(props) => (props.show ? "block" : "none")};
`;

const Content = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding: 0.5em;

  display: block;
  position: relative;
  font-size: 0.85em;
  text-align: center;
  background: #eee;
  width: 80%;
  height: auto;
  filter: drop-shadow(1px 1px 5px ${Colors.obsidian});
`;

const Title = styled.div`
  font-size: 1.5em;
  padding: 1em;
`;

const ButtonContainer = styled(FlexCenterContainer)`
  padding: 1em 0;
`;

const Button = styled(FlexCenterContainer)`
  margin: 0.5em 2em;
  border: 2px solid ${Colors.lightBlack};
  background: transparent;
  color: ${Colors.lightBlack};
  width: 5em;
  height: 3em;
  cursor: pointer;
  transition: all 0.5s;

  :hover {
    color: white;
    background: ${Colors.lightBlack};
  }
`;

const ButtonCancel = styled(Button)`
  background: ${Colors.lightBlack};
  color: ${Colors.cream};
  &:hover {
    background: transparent;
    color: ${Colors.lightBlack};
  }
`;

const Cookies = () => {
  const [cookies, setCookie] = useCookies(["policy"]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (cookies.policy) {
      setShow(false);
    } else {
      setShow(true);
    }
  }, [cookies]);

  return (
    <Container show={show ? 1 : 0}>
      <Content>
        <Title>I use Cookies</Title>
        <>
          This site use cookies and other tracking technologies to improve your
          browsing experience on our website and to show you personalized
          content. By browsing my website, you consent to my use of cookies.
        </>
        <ButtonContainer>
          <Button onClick={() => setCookie("policy", true, { path: "/" })}>
            ACCEPT
          </Button>
          <ButtonCancel onClick={() => setShow(false)}>CANCEL</ButtonCancel>
        </ButtonContainer>
      </Content>
    </Container>
  );
};

export default Cookies;
