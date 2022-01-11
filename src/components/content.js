import React from "react";
import "../style/App.css";
import MARTIX from "../assets/martix.jpg";
import styled, { keyframes } from "styled-components";
import { isMobile } from "react-device-detect";

const Container = styled.div`
  padding: ${(props) => (props.isMobile ? "1em" : "1em 5em 4em 5em")};
  margin: ${(props) => (props.isMobile ? "1em 0 0 0" : "0em 5em 0em 4em ")};

  position: relative;
`;

const MartynaDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${(props) => (props.isMobile ? "column" : "row")};
`;

const Img = styled.img`
  padding: ${(props) => (props.isMobile ? "1em" : " 0 0 0 5em")};
  width: ${(props) => (props.isMobile ? "16em" : "30em")};
  transform: ${(props) =>
    props.isMobile ? " translateY(15%)" : " translateX(15%)"};
  filter: drop-shadow(3px 5px 7px #888);
  z-index: 2;
`;

const Motto = styled.div`
  text-align: center;
  font-size: 4em;
  margin: 1em;
  font-family: 'Billion Miracles';
`;
const Text = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  font-family: 'Montaser extra-light';

  padding: ${(props) =>
    props.isMobile ? "7em 2em 2em 2em" : "5em 5em 5em 15em"};
  font-size: ${(props) => (props.isMobile ? "0.8em" : "1em")};
  color: white;
  background-image: linear-gradient(90deg, #717171, #505252);
  border-radius: ${(props) => (props.isMobile ? "3em" : "5em")};
  letter-spacing: 0.4px;
`;

const move = keyframes`
 0% {  transform: translateX(0); }
 50% { transform: translateX(8%); }
 100% { transform: translateX(0); }
`;

const moveOpposite = keyframes`
 0% {  transform: translateX(0); }
 50% { transform: translateX(-8%); }
 100% { transform: translateX(0); }
`;

const Cloud = styled.div`
  display: ${(props) => (props.isMobile ? "none" : "initial")};
  position: absolute;
  top: ${(props) => props.position.top};
  right: ${(props) => props.position.right};
  left: ${(props) => props.position.left};
  bottom: ${(props) => props.position.bottom};
  background-color: #ece5d2;
  height: 12em;
  z-index: ${(props) => (props.zIndex ? props.zIndex : 0)};

  animation: ${(props) => props.animation} 20s infinite;
  animation-delay: ${(props) => (props.delay ? props.delay : 0)};
`;

const slide = keyframes`
  0% {
    transform:translateX(25%);
  }
  100% {
    transform:translateX(-25%);
  }
`;

const Bg = styled.div`
  animation: ${slide} 15s ease-in-out infinite alternate;
  background-image: linear-gradient(-60deg, #FFF 50%, #FFF7E3 50%);
  bottom: 0;
  left: -50%;
  position: fixed;
  right: -50%;
  top: 0;
  z-index: -10;
  opacity: 0.5;
`;

const Bg2 = styled(Bg)`
  animation-direction: alternate-reverse;
  animation-duration: 25s;
  background-image: linear-gradient(120deg, #FFFCF6 50%, #FFF7E3 50%);
`;

const Bg3 = styled(Bg)`
  animation-duration: 30s;
  background-image: linear-gradient(-60deg, #FFF 50%, #FFF7E3 50%);
`;

function Content() {
  return (
    <Container isMobile={isMobile}>
      <Bg />
      <Bg2 />
      <Bg3 />
      <Motto>Unique moments closed in the photos</Motto>
      <MartynaDiv isMobile={isMobile}>
        <Img
          src={MARTIX}
          id="martyna"
          alt={"Martyna image"}
          isMobile={isMobile}
        />
        <Text isMobile={isMobile}>
          <div>
            Cześć! Miło mi Ciebie poznać!
            <br />
            <br />
          </div>
          <div>
            Mam na imię Martyna i fotografia to moja największa pasja od
            dziecka. Pierwszy aparat analogowy dał mi do ręki tata i już wtedy
            zakochałam się w możliwości uchwycenia nim piękna każdej chwili.
            Przez ostatnie lata stale udoskonalałam swoje umiejętności i
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
        </Text>
      </MartynaDiv>
      <Cloud
        isMobile={isMobile}
        position={{
          top: "25%",
          right: "40%",
          left: "18%",
        }}
        animation={move}
        delay={0}
      ></Cloud>
      <Cloud
        isMobile={isMobile}
        position={{
          bottom: "10%",
          right: "45%",
          left: "10%",
        }}
        animation={moveOpposite}
        delay={"4s"}
      ></Cloud>
      <Cloud
        isMobile={isMobile}
        position={{
          bottom: "20%",
          right: "0em",
          left: "65%",
        }}
        zIndex={-1}
        animation={move}
        delay={"2s"}
      ></Cloud>
    </Container>
  );
}

export default Content;
