import { createGlobalStyle } from "styled-components";
import Light from "./light.ttf";
import ExtraLight from "./extraLight.ttf";
import Emitha from "./Emitha-Script.ttf";
import Walterose from "./walterosse.ttf";
import Chocolates from "./chocolates.otf";

const FontStyles = createGlobalStyle`

@font-face {
  font-family: "Montaser light";
  src: url(${Light});
  font-style: normal;
  font-weight: 300;
}

@font-face {
  font-family: "Montaser extra-light";
  src: url(${ExtraLight});
  font-style: normal;
  font-weight: 500;
}
  @font-face {
    font-family: "Emitha";
    src: url(${Emitha});
    font-style: normal;
    font-weight: 300;
  }

  @font-face {
    font-family: "Walterose";
    src: url(${Walterose});
    font-style: normal;
    font-weight: 300;
  }

  @font-face {
    font-family: "Chocolates";
    src: url(${Chocolates});
    font-style: normal;
    font-weight: 300;
  }
`;

export default FontStyles;
