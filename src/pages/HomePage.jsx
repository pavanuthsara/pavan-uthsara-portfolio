import React from "react";

import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Projects from "../components/Projects";

const HomePage = () => {
  return (
    <>
      <div className="container mx-auto px-4 font-ubuntu">
        <NavBar />
        <Hero />
        <Projects />
      </div>
    </>
  );
};

export default HomePage;
