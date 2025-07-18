import React from "react";

import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import ContactMe from "../components/ContactMe";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <>
      <div className="container mx-auto px-4 font-ubuntu">
        <NavBar />
        <Hero />
        <Projects />
        <ContactMe />
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
