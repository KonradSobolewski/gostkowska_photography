import React from "react";
import MARTIX from "../assets/martix.jpg";
import styled from "styled-components";
import { isMobile } from "react-device-detect";
import { FlexCenterContainer, Colors } from "../style/common";

const Container = styled.div`
  position: relative;
  width: auto;
`;

const MartynaDiv = styled(FlexCenterContainer)`
  padding: ${(props) => (props.isMobile ? "0 1e" : "0em 5em")};
  margin: ${(props) => (props.isMobile ? "0" : "4em 5em 0em 4em ")};
  flex-direction: ${(props) => (props.isMobile ? "column" : "row")};
`;

const Img = styled.img`
  padding: ${(props) => (props.isMobile ? "1em" : " 0 0 0 5em")};
  width: ${(props) => (props.isMobile ? "16em" : "30em")};
  transform: ${(props) =>
    props.isMobile ? " translateY(15%)" : " translateX(15%)"};
  filter: drop-shadow(3px 5px 7px #444);
  z-index: 1;
`;

const Text = styled.div`
  padding: ${(props) =>
    props.isMobile ? "7em 2em 2em 2em" : "5em 5em 5em 10em"};
  font-size: ${(props) => (props.isMobile ? "0.8em" : "1em")};
  color: ${Colors.black};
  letter-spacing: 1px;
  line-height: 1.5;
  width: 60em;

  @media (max-width: 1200px) {
    width: 50em;
  }

  @media (max-width: 1000px) {
    width: 90%;
    font-size: 0.7em;
  }
`;

const Title = styled.div`
  white-space: nowrap;
  display: ${(props) => (props.isMobile ? "none" : "initial")};
  height: 1.3em;
  font-family: "Billion Miracles";
  font-size: 8em;
  padding-bottom: 0.5em;
`;

const Singature = styled.div`
  margin-top: 0.5em;
  font-size: 3em;
  color: ${(props) => (props.isMobile ? Colors.black : "white")};
  font-family: "Billion Miracles";
  z-index: 1;
`;

const Box = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  height: 14em;
  z-index: -3;
  background: ${Colors.obsidian};
  display: ${(props) => (props.isMobile ? "none" : "block")};

  @media (max-width: 2000px) {
    height: 12.5em;
  }

  @media (max-width: 1900px) {
    height: 11em;
  }

  @media (max-width: 1700px) {
    height: 10em;
  }
`;

function Content() {
  return (
    <Container isMobile={isMobile} id="content">
      <MartynaDiv isMobile={isMobile}>
        <Img
          src={MARTIX}
          id="martyna"
          alt={"Martyna image"}
          isMobile={isMobile}
          loading="lazy"
        />
        <Text isMobile={isMobile}>
          <div>
            <Title isMobile={isMobile}>O mnie</Title>
          </div>
          <div>
            Cześć!
            <br />
            <br />
          </div>
          <div>
            Mam na imię Martyna i fotografia to moja największa pasja od
            dziecka. <br /> Pierwszy aparat analogowy dał mi do ręki tata i już
            wtedy zakochałam się w możliwości uchwycenia nim piękna każdej
            chwili. Przez ostatnie lata stale udoskonalałam swoje umiejętności i
            poszerzałam wiedzę. Uczęszczałam do Akademii Fotografii, w której
            odkryłam swój kierunek w fotografii. Od tego momentu wiem, że
            niezwykłą radość sprawia mi fotografowanie szczęścia i miłości.
            Uwielbiam współpracować z ludźmi pokazując ich emocje i więzi.
            Uwielbiam też modę i branże urodową, więc chętnie podejmuję się
            sesji streetowych oraz produktowych, w których mogę wykazać się
            swoją kreatywnością.
            <br />
            <br />
          </div>
          <div>
            Jeśli podoba Ci się to co tworzę, nie wahaj się i zostaw mi
            wiadomość. <br />
            Jestem pewna, że możemy razem stworzyć coś pięknego!
          </div>
          <Singature isMobile={isMobile}>Martyna</Singature>
        </Text>
      </MartynaDiv>
      <Box isMobile={isMobile}></Box>
    </Container>
  );
}

export default Content;
