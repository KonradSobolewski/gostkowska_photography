import React from "react";
import MARTIX from "../assets/zdjfoto.jpg";
import styled from "styled-components";
import { isMobile } from "react-device-detect";
import { FlexCenterContainer, Colors } from "../style/common";
import BG from "../assets/offerbg.jpg";

const Container = styled.div`
  position: relative;
  background: ${Colors.cream};

`;

const MartynaDiv = styled(FlexCenterContainer)`
  padding: ${(props) => (props.isMobile ? "0" : "0em 5em 0 5em")};
  flex-direction: ${(props) => (props.isMobile ? "column" : "row")};
  background-image: url(${BG});
  background-size: cover;
  z-index: -2;
`;

const Img = styled.img`
  padding: ${(props) => (props.isMobile ? "1em" : " 0 0 0 5em")};
  width: ${(props) => (props.isMobile ? "16em" : "23em")};
  transform: ${(props) =>
    props.isMobile ? " translateY(15%)" : " translate(15%, -10%)"};
  filter: drop-shadow(3px 5px 7px #444);
  z-index: 2;
`;

const Text = styled.div`
  padding: ${(props) =>
    props.isMobile ? "7em 2em 2em 2em" : "2em 5em 5em 10em"};
  font-size: ${(props) => (props.isMobile ? "0.8em" : "1em")};
  color: ${Colors.black};
  letter-spacing: 1px;
  line-height: 1.5;
  width: 60em;
  z-index: 2;

  @media (max-width: 1200px) {
    width: 50em;
  }

  @media (max-width: 1000px) {
    width: 90%;
    font-size: 0.7em;
  }
`;

const ImgContainer = styled.div`
  position: relative;
`;

const Title = styled.div`
  position: absolute;
  top: ${(props) => (props.isMobile ? "10%" : "-10%")};
  left: -5%;
  white-space: nowrap;
  height: 1.1em;
  color: ${Colors.white};
  background-color: ${Colors.lightBlack};
  font-family: "Billion Miracles";
  font-size: ${(props) => (props.isMobile ? "5em" : "8em")};
  padding: 0 0.5em;
  z-index: 5;
`;

const Singature = styled.div`
  margin-top: 0.5em;
  font-size: 4em;
  color: ${Colors.black};
  font-family: "Billion Miracles";
`;

const Motto = styled.div`
  text-align: center;
  font-size: ${(props) => (props.isMobile ? "5vw" : "3vw")};
  color: ${Colors.lightBlack};
  padding: ${(props) => (props.isMobile ? "1.5em 0 0 0" : "1em")};
  font-family: "Billion Miracles";
  white-space: nowrap;
  cursor: default;
  text-transform: uppercase;
`;

function Content() {
  return (
    <Container isMobile={isMobile} id="content">
      <Motto isMobile={isMobile}>
        Fotografując staraj się pokazać to <br /> czego bez Ciebie nikt by nie
        zobaczył <br /> Robert Bresson
      </Motto>
      <MartynaDiv isMobile={isMobile}>
        <ImgContainer>
          {/* <Title isMobile={isMobile}>Cześć!</Title> */}
          <Img
            src={MARTIX}
            id="martyna"
            alt={"Martyna image"}
            isMobile={isMobile}
            loading="lazy"
          />
        </ImgContainer>
        <Text isMobile={isMobile}>
          <div>
            Mam na imię Martyna, a fotografia towarzyszy mi od dziecka. Swoje
            pierwsze poważne sesje zdjęciowe zaczęłamrobić ponad 6 lat temu.
            Przez ten czas stale udoskonalałam swoje umiejętności i poszerzałam
            wiedzę. Z czasem odkryłam swój kierunek w fotografii. Od tego
            momentu wiem, że niezwykłą radość sprawia mi fotografowanie
            szczęścia i miłości. Uwielbiam współpracować z ludźmi pokazując ich
            emocje i więzi. Uwielbiam też modę i branżę urodową, więc chętnie
            podejmuję się sesji streetowych oraz produktowych, w których mogę
            wykazać się swoją kreatywnością.
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
    </Container>
  );
}

export default Content;
