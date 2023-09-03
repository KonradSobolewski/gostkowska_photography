import React, { useState } from "react";
import { FlexCenterContainer, Colors } from "../../style/common";
import styled from "styled-components";
import { isMobile } from "react-device-detect";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
// import required modules
import { Navigation, Thumbs, Pagination, Lazy } from "swiper";
import "./styles.css";
import Z1 from "../../assets/portfolio/portfolio1.jpg";
import Z2 from "../../assets/portfolio/portfolio2.jpg";
import Z3 from "../../assets/portfolio/portfolio3.jpg";
import Z4 from "../../assets/portfolio/portfolio4.jpg";
import Z5 from "../../assets/portfolio/portfolio5.jpg";
import Z6 from "../../assets/portfolio/portfolio6.jpg";
import Z7 from "../../assets/portfolio/portfolio7.jpg";
import Z9 from "../../assets/portfolio/portfolio9.jpg";
import Z10 from "../../assets/portfolio/portfolio10.jpg";
import Z11 from "../../assets/portfolio/portfolio11.jpg";

const Container = styled.div`
  background: ${Colors.lightCream};
  padding: 0 0 4em 0;
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

const MySwiperSmall = styled(Swiper)`
  width: 80vw;
`;

const SwiperGallery = () => {
  return (
    <Container id="portfolio">
      <Header>
        <Text isMobile={isMobile}>przejrzyj moje</Text>
        <SecondText isMobile={isMobile}>PORTFOLIO</SecondText>
      </Header>
      <MySwiperSmall
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#000",
        }}
       
        loop={true}
        spaceBetween={5}
        slidesPerView={"auto"}
        modules={[Navigation, Thumbs, Pagination]}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        isMobile={isMobile}
      >
        <SwiperSlide>
          <img src={Z1} loading="lazy" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Z2} loading="lazy" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Z3} loading="lazy" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Z4} loading="lazy" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Z5} loading="lazy" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Z6} loading="lazy" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Z7} loading="lazy" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Z9} loading="lazy" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Z10} loading="lazy" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Z11} loading="lazy" />
        </SwiperSlide>
      </MySwiperSmall>
    </Container>
  );
};

export default SwiperGallery;
