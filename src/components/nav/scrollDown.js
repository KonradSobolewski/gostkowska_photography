import React from "react";
import Lottie from "react-lottie";
import scrollDown from "../../assets/lottie/scroll_down";
import styled from "styled-components";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: scrollDown,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const LottieStyle = styled.div`
  position: absolute;
  bottom: 4em;
  left: 0;
  right: 0;
  filter: drop-shadow(5px 10px 2px #000);
`;

const ScrollDown = () => {
  return (
    <LottieStyle>
      <Lottie
        isClickToPauseDisabled={true}
        options={defaultOptions}
        height={150}
        width={75}
        isStopped={false}
        isPaused={false}
      />
    </LottieStyle>
  );
};

export default ScrollDown;
