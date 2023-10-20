import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { t } from "i18next";
import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { SwitchContext } from "../Contexts/SwitchContext";

const Footer = () => {
  const history = useHistory();
  const { theme } = useContext(SwitchContext);

  const redirectDelay = () => {
    setTimeout(() => {
      history.push("/contact-me");
    }, 2000);
  };

  const showNotification = () => {
    if (theme === "light") {
      toast.success(`${t("toast2")}`, {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      toast.success(`${t("toast2")}`, {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  const multipleFunc = () => {
    redirectDelay();
    showNotification();
  };

  return (
    <div className="w-full h-[28.5rem] flex justify-center items-center bg-white dark:bg-[#252128]">
      <div className="w-[30rem] h-72 flex flex-col justify-between">
        <button
          data-cy="form-button"
          onClick={multipleFunc}
          className="font-inter font-bold text-4xl text-primary dark: dark-text-secondary"
        >
          {t("sendMessage")}
        </button>
        <p className="font-inter font-normal text-2xl text-black dark:text-white">
          {t("question")}
        </p>
        <a
          href="mailto:ahmetcan.yalcinkaya55@gmail.com"
          className="font-inter font-medium text-xl text-tertiary underline hover:scale-110 duration-500"
        >
          ahmetcan.yalcinkaya55@gmail.com
        </a>
        <div className="flex justify-center items-center">
          <a
            href="https://www.instagram.com/ahmet.yalcinkayaa/"
            target="_blank"
            className="p-4"
          >
            <FontAwesomeIcon icon={faInstagram} size="2xl" color="#8F88FF" />
          </a>
          <a
            href="https://www.linkedin.com/in/ahmet-can-yalcinkaya/"
            target="_blank"
            className="p-4"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2xl" color="#8F88FF" />
          </a>
          <a
            href="https://github.com/Ahmetyalcinkya"
            target="_blank"
            className="p-4"
          >
            <FontAwesomeIcon icon={faGithub} size="2xl" color="#8F88FF" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
