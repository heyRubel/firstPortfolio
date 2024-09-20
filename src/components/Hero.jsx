import React from "react";
import data from "./Data/hero.json";
import Typed from "typed.js";
import { useEffect, useRef } from "react";
const Hero = () => {
  const el = useRef();

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Hello, It's me Badsha!", "This is my portfolio website!"],
      typeSpeed: 100,
      backSpeed: 100,
      loop: true,
    });
    // Cleanup function to destroy the Typed instance on unmount
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div id="home" className="hero_section">
      <div className="left">
        <span>
          <span ref={el}></span>
        </span>

        <button>Download Resume</button>
      </div>
      <div className="right">
        <img src={`./images/${data.imgSrc}`} />
      </div>
    </div>
  );
};

export default Hero;
