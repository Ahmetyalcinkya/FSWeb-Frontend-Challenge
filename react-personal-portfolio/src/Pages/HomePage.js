import React, { useContext } from "react";
import Header from "../Components/Header";
import Skills from "../Components/Skills";
import Profile from "../Components/Profile";
import Projects from "../Components/Projects";
import Footer from "../Components/Footer";
import { LangContext } from "../Contexts/LanguageContext";

const HomePage = () => {
  const { toggleLanguage } = useContext(LangContext);

  // const specialBtnList = document.querySelectorAll(".btn");
  // specialBtnList.forEach((speacialBtn) => {
  //   speacialBtn.addEventListener("click", () => {
  //     document.querySelector(".special-btn")?.classList.remove("speacial-btn");
  //     speacialBtn.classList.add("speacial-btn");
  //   });
  // });

  return (
    <div className="relative">
      <Header />
      <div className="absolute top-5 right-[24.1rem]">
        <button
          onClick={() => toggleLanguage("tr")}
          className="lang-btn dark: dark-btn hover:bg-[#CBF281]"
        >
          TR
        </button>
        <button
          onClick={() => toggleLanguage("en")}
          className="lang-btn dark: dark-btn hover:bg-[#3730A3] active:bg-[#3730A3]"
        >
          EN
        </button>
      </div>
      <Skills />
      <Profile />
      <Projects />
      <Footer />
    </div>
  );
};

export default HomePage;
