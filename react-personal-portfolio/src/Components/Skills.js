import { t } from "i18next";
import React from "react";
import Pic1 from "../Assets/js-logo 1.png";
import Pic2 from "../Assets/react.png";
import Pic3 from "../Assets/redux.jpg";
import Pic4 from "../Assets/java.png";
import Pic5 from "../Assets/vscode.jpg";
import Pic6 from "../Assets/figma.jpg";

const Skills = () => {
  return (
    <div className="w-full bg-white dark:bg-[#252128]">
      <div className="lg:w-[60rem] py-20 m-auto flex flex-col gap-y-8 lg:gap-y-0 lg:flex-row justify-center items-center lg:items-start lg:justify-between">
        <h3 className="pb-10 lg:pb-0 font-inter font-bold text-5xl leading-[3.75rem] text-primary dark: dark-text-primary">
          {t("skills")}
        </h3>
        <div className="w-72 h-[27rem] flex flex-col justify-between">
          <div className="icon-div">
            <img src={Pic1} alt="" className="program-icon" />
            <h4 className="program-name">JAVASCRIPT</h4>
          </div>
          <div className="icon-div">
            <img src={Pic2} alt="" className="program-icon" />
            <h4 className="program-name">REACT</h4>
          </div>
          <div className="icon-div">
            <img src={Pic3} alt="" className="program-icon" />
            <h4 className="program-name">REDUX</h4>
          </div>
        </div>
        <div className="w-72 h-[27rem] flex flex-col justify-between">
          <div className="icon-div">
            <img src={Pic4} alt="" className="program-icon" />
            <h4 className="program-name">JAVA</h4>
          </div>
          <div className="icon-div">
            <img src={Pic5} alt="" className="program-icon" />
            <h4 className="program-name">VS CODE</h4>
          </div>
          <div className="icon-div">
            <img src={Pic6} alt="" className="program-icon" />
            <h4 className="program-name">FIGMA</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
