import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { t } from "i18next";
import React, { useContext, useEffect } from "react";
import ProfilePic from "../Assets/profile.png";
import Animation from "../Compounds/TypeAnimation";
import CustomizedSwitches from "../Compounds/SwitchCompound";
import { toast } from "react-toastify";
import { SwitchContext } from "../Contexts/SwitchContext";
import resume from "../Assets/AHMET-CAN-YALÇINKAYA-CV.pdf";

const Header = () => {
  const goToGitHub = () => {
    const gitHub = "https://github.com/Ahmetyalcinkya";

    window.open(gitHub, "_blank");
  };
  const goToLinkedIn = () => {
    const linkedIn = "https://www.linkedin.com/in/ahmet-can-yalcinkaya/";

    window.open(linkedIn, "_blank");
  };

  const { theme } = useContext(SwitchContext);

  useEffect(() => {
    if (theme === "light") {
      toast(`${t("toast1")}`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      toast(`${t("toast1")}`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }, []);

  return (
    <div className="w-full lg:h-[42rem] relative light-primary flex dark: dark-primary">
      <div
        data-cy="switch-btn"
        className="absolute top-16 lg:top-4 right-0 lg:right-72 z-20"
      >
        <CustomizedSwitches checked={theme} />
      </div>
      <div className="absolute right-0 light-secondary w-full h-[7rem] lg:w-[27rem] lg:h-full dark: dark-secondary">
        {/* pageWidth = 100% ? w-1/3 : [27rem] */}
      </div>
      <div className="pt-32 px-2 lg:px-0 lg:pt-0 m-auto flex justify-center">
        <div className="w-full lg:w-[60rem] flex flex-col justify-around ">
          <h4 className="text-bold font-inter text-3xl text-secondary text-left h-20">
            Ahmet Can Yalçınkaya
          </h4>
          <div className="w-full lg:w-[60rem] lg:h-[23.5rem] flex flex-col lg:flex-row items-center justify-between">
            <div className="w-full flex flex-col justify-around gap-y-16 items-center z-20 lg:z-0 lg:gap-y-0 lg:items-stretch lg:w-[33rem] lg:h-[23.5rem]">
              <h3 className="text-left h-16">
                <Animation />
              </h3>
              <p className="font-inter text-white text-2xl leading-7 text-left">
                {t("about")}
              </p>
              <div className="sm:w-[27rem] h-14 flex justify-around items-center">
                <button
                  data-cy="git-btn"
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
                <a
                  href={resume}
                  download="Resume"
                  className="light-header-button dark: dark-header-button text-sm"
                >
                  <FontAwesomeIcon icon={faDownload} size="xl" />
                  {t("cv")}
                </a>
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
