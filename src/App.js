import React from "react";
import NavBar from "./components/nav/navBar";
import Content from "./components/content";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import Offers from "./components/offers/offers";
import Portfolio from "./components/portfolio/portfolio";
import SwiperGallery from "./components/portfolio/swiperGallery";
import Cookies from "./components/cookies/cookies";

function App() {

  return (
    <div>
      <Cookies />
      <NavBar />
      <Content />
      <Portfolio />
      <SwiperGallery />
      <Offers />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
