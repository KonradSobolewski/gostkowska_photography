import React from "react";
import MARTIX from "../assets/martix.jpg";
import styled from "styled-components";
import { isMobile } from "react-device-detect";
import { FlexCenterContainer, Colors } from "../style/common";
import Line5 from "../assets/lines/5.png";

const Container = styled.div`
  padding: ${(props) => (props.isMobile ? "1em" : "0em 5em 1em 5em")};
  margin: ${(props) => (props.isMobile ? "1em 0 0 0" : "0em 5em 2em 4em ")};
  position: relative;
  width: auto;
`;

const MartynaDiv = styled(FlexCenterContainer)`
  flex-direction: ${(props) => (props.isMobile ? "column" : "row")};
`;

const Img = styled.img`
  padding: ${(props) => (props.isMobile ? "1em" : " 0 0 0 5em")};
  width: ${(props) => (props.isMobile ? "16em" : "30em")};
  transform: ${(props) =>
    props.isMobile ? " translateY(15%)" : " translateX(15%)"};
  filter: drop-shadow(3px 5px 7px #444);
`;

const Motto = styled.div`
  text-align: center;
  font-size: 5em;
  margin: 0.8em 0;
  font-family: "Billion Miracles";
  white-space: nowrap;

  @media (max-width: 1200px) {
    font-size: 4em;
    margin: 0.7em;
  }

  @media (max-width: 1000px) {
    font-size: 3em;
    margin: 0.6em;
  }

  @media (max-width: 700px) {
    font-size: 2em;
    margin: 0.3em;
  }

  @media (max-width: 350px) {
    font-size: 1.5em;
    margin: 0;
  }
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

const LineArtHeader = styled.img`
  width: 10em;
  margin-left: 3em;
  transform: translateY(2em);
  display: ${(props) => (props.isMobile ? "none" : "initial")};
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
  font-size: 3em;
  font-family: "Billion Miracles";
`;

function Content() {
  return (
    <Container isMobile={isMobile} id="content">
      <Motto>Unique moments closed in the photos</Motto>
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
            <LineArtHeader
              src={Line5}
              isMobile={isMobile}
              id="lineArt5"
              alt={"Line art 5"}
              loading="lazy"
            />
          </div>
          <div>
            Cze????!
            <br />
            <br />
          </div>
          <div>
            Mam na imi?? Martyna i fotografia to moja najwi??ksza pasja od
            dziecka. <br /> Pierwszy aparat analogowy da?? mi do r??ki tata i ju??
            wtedy zakocha??am si?? w mo??liwo??ci uchwycenia nim pi??kna ka??dej
            chwili. Przez ostatnie lata stale udoskonala??am swoje umiej??tno??ci i
            poszerza??am wiedz??. Ucz??szcza??am do Akademii Fotografii, w kt??rej
            odkry??am sw??j kierunek w fotografii. Od tego momentu wiem, ??e
            niezwyk???? rado???? sprawia mi fotografowanie szcz????cia i mi??o??ci.
            Uwielbiam wsp????pracowa?? z lud??mi pokazuj??c ich emocje i wi??zi.
            Uwielbiam te?? mod?? i bran??e urodow??, wi??c ch??tnie podejmuj?? si??
            sesji streetowych oraz produktowych, w kt??rych mog?? wykaza?? si??
            swoj?? kreatywno??ci??.
            <br />
            <br />
          </div>
          <div>
            Je??li podoba Ci si?? to co tworz??, nie wahaj si?? i zostaw mi
            wiadomo????. <br />
            Jestem pewna, ??e mo??emy razem stworzy?? co?? pi??knego!
          </div>
          <Singature>Martyna</Singature>
        </Text>
      </MartynaDiv>
    </Container>
  );
}

export default Content;
