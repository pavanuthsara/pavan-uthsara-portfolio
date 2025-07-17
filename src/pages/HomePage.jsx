import React from "react";

import NavBar from "../components/NavBar";
import Hero from "../components/Hero";

const HomePage = () => {
  return (
    <>
      <div className="container mx-auto px-4 font-ubuntu">
        <NavBar />
        <Hero />
      </div>
    </>
  );
};

export default HomePage;
