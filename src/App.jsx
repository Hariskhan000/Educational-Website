import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Hero from "./Components/Hero/Hero.jsx";
import Programe from "./Components/Programes/Programe.jsx";
import Title from "./Components/Title/Title.jsx";
import About from "./Components/About/About.jsx";
import Campus from "./Components/Campus/Campus.jsx";
import Testimonials from "./Components/Testimonials/Testimonials.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import VedioPlayer from "./Components/VedioPlayer/VedioPlayer.jsx";
const App = () => {
  const [playState, setPlayState] = useState(false);

  return (
    <>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle="OUR PROGRAME" Title="WHAT WE OFFER" />
        <Programe />
        <About setPlayState={setPlayState} />
        <Title subTitle="Gallery" Title="Gallery Photos" />
        <Campus />
        <Title subTitle="Testimonials" Title="What Students Says" />
        <Testimonials />
        <Title subTitle="Contact Us" Title="Get In Touch" />
        <Contact />
        <Footer />
      </div>
      <VedioPlayer playState={playState} setPlayState={setPlayState} />
    </>
  );
};

export default App;
