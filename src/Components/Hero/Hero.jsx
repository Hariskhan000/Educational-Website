import React from "react";
import "./Hero.css";
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>We Ensure better education for a better world.</h1>
        <p>Educatio Is Too Necessary For Better Future.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
        <button className="btn">Explore  More <img src={dark_arrow} alt="" /></button>
      </div>
    </div>
  );
};

export default Hero;
