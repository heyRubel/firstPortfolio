import React from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Experience from "./components/experience/Experience";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";

const App = () => {
  return (
    <>
      <Nav />
      <Hero />
      <Experience />
      <Skills />
      <Projects />
      <Contact/>
    </>
  );
};

export default App;
