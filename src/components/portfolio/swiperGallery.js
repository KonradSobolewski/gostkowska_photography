import React from "react";
import { FlexCenterContainer, Colors } from "../../style/common";
import styled from "styled-components";
import { isMobile } from "react-device-detect";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import { Navigation, Thumbs, Pagination, Autoplay } from "swiper";
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
`;

const Text = styled(FlexCenterContainer)`
  padding: 0.5em;
  color: ${Colors.lightBlack};
  font-size: ${(props) => (props.isMobile ? "3em" : "5em")};
  font-family: "Walterose";
  @media (max-width: 350px) {
    font-size: 2em;
  }
`;

const MySwiperSmall = styled(Swiper)`
  width: 80vw;
  @media (max-width: 500px) {
    width: 90vw
  }
`;

const SwiperGallery = () => {
  return (
    <Container id="portfolio">
      <Text isMobile={isMobile}>portfolio</Text>
      <MySwiperSmall
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#000",
        }}
        loop={true}
        spaceBetween={5}
        slidesPerView={"auto"}
        modules={[Navigation, Thumbs, Pagination, Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        pagination={{
          clickable: true,
        }}
      >
        <SwiperSlide>
          <img src={Z1} loading="lazy" alt="zdjecie portfolio 1"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Z2} loading="lazy" alt="zdjecie portfolio 2"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Z3} loading="lazy" alt="zdjecie portfolio 3"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Z4} loading="lazy" alt="zdjecie portfolio 4"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Z5} loading="lazy" alt="zdjecie portfolio 5"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Z6} loading="lazy" alt="zdjecie portfolio 6"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Z7} loading="lazy" alt="zdjecie portfolio 7"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Z9} loading="lazy" alt="zdjecie portfolio 8"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Z10} loading="lazy" alt="zdjecie portfolio 9"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Z11} loading="lazy" alt="zdjecie portfolio 10"/>
        </SwiperSlide>
      </MySwiperSmall>
    </Container>
  );
};

export default SwiperGallery;
