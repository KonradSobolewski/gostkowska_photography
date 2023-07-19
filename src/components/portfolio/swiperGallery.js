import React, { useState } from "react";
import { FlexCenterContainer, Colors } from "../../style/common";
import styled from "styled-components";
import { isMobile } from "react-device-detect";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";
import "./styles.css";
import Z1 from "../../assets/portfolio/1.jpg";
import Z2 from "../../assets/portfolio/2.jpg";
import Z3 from "../../assets/portfolio/3.jpg";
import Z4 from "../../assets/portfolio/4.jpg";
import Z5 from "../../assets/portfolio/5.jpg";
import Z6 from "../../assets/portfolio/6.jpg";
import Z7 from "../../assets/portfolio/7.jpg";
import Z8 from "../../assets/portfolio/8.jpg";
import Z9 from "../../assets/portfolio/9.jpg";
import Z10 from "../../assets/portfolio/10.jpg";
import Z11 from "../../assets/portfolio/11.jpg";

const Container = styled.div`
  margin: auto;
  background: ${Colors.obsidian};
`;

const Header = styled.div`
  position: relative;
  padding: 2em 0;
`;

const Text = styled(FlexCenterContainer)`
  color: ${Colors.white};
  font-size: ${(props) => (props.isMobile ? "2em" : "2em")};
  font-family: "Montaser extra-light";
  @media (max-width: 350px) {
    font-size: 4em;
  }
`;

const SecondText = styled(FlexCenterContainer)`
  color: ${Colors.white};
  font-size: ${(props) => (props.isMobile ? "3em" : "7em")};
  font-family: "Billion Miracles";

  @media (max-width: 350px) {
    font-size: 2em;
  }
`;

const MySwiperBig = styled(Swiper)`
  height: 42vw;
  width: 63vw;
  box-sizing: border-box;

  @media (min-width: 2000px) {
    height: 30vw;
    width: 45vw;
  }

  @media (min-width: 2600px) {
    height: 20vw;
    width: 30vw;
  }

  @media (max-width: 1000px) {
    height: 60vw;
    width: 90vw;
  }
`;

const MySwiperSmall = styled(Swiper)`
  width: 63vw;
  height: 12vw;
  box-sizing: border-box;
  padding: 10px 0;

  @media (min-width: 2000px) {
    height: 9vw;
    width: 45vw;
  }

  @media (min-width: 2600px) {
    height: 5vw;
    width: 30vw;
  }

  @media (max-width: 1000px) {
    height: 20vw;
    width: 90vw;
  }
`;

const SwiperGallery = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <Container id="portfolio">
      <Header>
        <Text isMobile={isMobile}>przejrzyj moje</Text>
        <SecondText isMobile={isMobile}>portfolio</SecondText>
      </Header>
      <MySwiperBig
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        spaceBetween={0}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <img src={Z2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Z1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Z5} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Z4} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Z3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Z6} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Z7} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Z8} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Z9} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Z10} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Z11} />
        </SwiperSlide>
      </MySwiperBig>
      <MySwiperSmall
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={15}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={Z2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Z1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Z5} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Z4} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Z3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Z6} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Z7} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Z8} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Z9} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Z10} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Z11} />
        </SwiperSlide>
      </MySwiperSmall>
    </Container>
  );
};

export default SwiperGallery;
