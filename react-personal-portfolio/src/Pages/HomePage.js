import React from "react";
import Header from "../Components/Header";
import Skills from "../Components/Skills";
import Profile from "../Components/Profile";
import Projects from "../Components/Projects";
import Footer from "../Components/Footer";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Skills />
      <Profile />
      <Projects />
      <Footer />
    </div>
  );
};

export default HomePage;
