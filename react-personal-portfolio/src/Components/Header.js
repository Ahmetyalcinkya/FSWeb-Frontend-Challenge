import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { t } from "i18next";
import React from "react";
import ProfilePic from "../Assets/profile.png";

const Header = () => {
  const goToGitHub = () => {
    const gitHub = "https://github.com/Ahmetyalcinkya";

    window.open(gitHub, "_blank");
  };
  const goToLinkedIn = () => {
    const linkedIn = "https://www.linkedin.com/in/ahmet-can-yalcinkaya/";

    window.open(linkedIn, "_blank");
  };

  return (
    <div className="w-full h-[42rem] relative light-primary flex dark: dark-primary">
      <div className="absolute right-0 light-secondary w-[27rem] h-full dark: dark-secondary">
        {/* pageWidth = 100% ? w-1/3 : [27rem] */}
      </div>
      <div className=" m-auto flex justify-center">
        <div className="w-[60rem] flex flex-col justify-around ">
          <h4 className="text-bold font-inter text-3xl text-secondary text-left h-20">
            Ahmet Can Yalçınkaya
          </h4>
          <div className="w-[60rem] h-[23.5rem] flex justify-between">
            <div className="w-[33rem] h-[23.5rem] flex flex-col justify-around">
              <h3 className="font-inter font-bold text-5xl text-left text-secondary ">
                {t("header")}
              </h3>
              <p className="font-inter text-white text-2xl leading-7 text-left">
                {t("about")}
              </p>
              <div className="w-[17.5rem] h-14 flex justify-around items-center">
                <button
                  onClick={goToGitHub}
                  className="light-header-button dark: dark-header-button"
                >
                  <FontAwesomeIcon icon={faGithub} size="xl" />
                  <span>GitHub</span>
                </button>
                <button
                  onClick={goToLinkedIn}
                  className="light-header-button dark: dark-header-button"
                >
                  <FontAwesomeIcon icon={faLinkedin} size="xl" />
                  LinkedIn
                </button>
              </div>
            </div>
            <div className="w-[22rem] h-[23.5rem] z-20 flex justify-center items-center">
              <img src={ProfilePic} alt="profilePicture" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;