import { createGlobalStyle } from "styled-components";
import Light from "./light.ttf";
import ExtraLight from "./extraLight.ttf";
import Thin from "./thin.ttf";
import Miracles from "./miracles.otf";

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
    font-family: "Montaser thin";
    src: url(${Thin});
    font-style: normal;
    font-weight: 300;
  }

  
  @font-face {
    font-family: "Billion Miracles";
    src: url(${Miracles});
    font-style: normal;
    font-weight: 300;
  }
`;

export default FontStyles;
