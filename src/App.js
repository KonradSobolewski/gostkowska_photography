import React from "react";
import NavBar from './components/nav/navBar';
import Content from './components/content';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';
import Offers from './components/offers/offers';
import Portfolio from './components/portfolio/portfolio';

function App() {

  return (
    <div>
      <NavBar />
      <Content />
      <Portfolio/>
      <Offers/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
