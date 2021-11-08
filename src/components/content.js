import React from "react";
import "../style/App.css";
import MARTIX from "../assets/martix.jpg";
import styled , { keyframes } from "styled-components";

const Container = styled.div`
  padding: 5em 5em;
  margin: 5em;

  position: relative;
`;

const MartynaDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img`
  padding: 0 0 0 5em;
  width: 30em;
  transform: translateX(15%);
  filter: drop-shadow(3px 5px 7px #888);
  z-index: 2;
`;

const Text = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;

  padding: 5em 5em 5em 15em;
  background-color: #fdf7e4;
  border-radius: 5em;
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
  position: absolute;
  top: 10em;
  right: 40em;
  left: 30em;
  background-color: #ece5d2;
  height: 12em;
  z-index: 1;

  animation: ${move} 20s infinite;
`;

const Cloud2 = styled.div`
  position: absolute;
  bottom: 10em;
  right: 60em;
  left: 0em;
  background-color: #ece5d2;
  height: 12em;
  z-index: 1;

  animation: ${move} 20s infinite;
  animation-delay: 4s;
`;

const Cloud3 = styled.div`
  position: absolute;
  bottom: 15em;
  right: 0em;
  left: 70em;
  background-color: #ece5d2;
  height: 12em;
  z-index: -1;

  animation: ${moveOpposite} 20s infinite;
  animation-delay: 2s;
`;

function Content() {
  return (
    <Container>
      <Cloud></Cloud>
      <MartynaDiv>
        <Img src={MARTIX} id="martyna" alt={"Martyna image"} />
        <Text>
          <div>
            Cześć ! Miło mi Ciebie poznać!
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
      <Cloud2></Cloud2>
      <Cloud3></Cloud3>
    </Container>
  );
}

export default Content;
