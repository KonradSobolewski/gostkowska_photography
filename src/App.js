import React from "react";
import NavBar from "./components/nav/navBar";
import Content from "./components/content";
import Footer from "./components/footer/footer";
import Offers from "./components/offers/offers";
import Portfolio from "./components/portfolio/portfolio";
import SwiperGallery from "./components/portfolio/swiperGallery";
import { Helmet } from "react-helmet";

function App() {
  return (
    <div>
      <Helmet htmlAttributes={{ lang: "pl-PL" }}>
        <meta charSet="utf-8" />
        <title>Sobolewska Photography</title>
        <meta name="description" content="Martyna Sobolewska jest Warszawską fotografką okolicznościową. Specjalizuje się w fotografii ślubnej, miłosnej i indywidualnej."/>
      </Helmet>
      <NavBar />
      <Content />
      <Portfolio />
      <SwiperGallery />
      <Offers />
      <Footer />
    </div>
  );
}

export default App;
