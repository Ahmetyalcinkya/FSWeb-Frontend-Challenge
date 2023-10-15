import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { t } from "i18next";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full h-[28.5rem] flex justify-center items-center bg-white dark:bg-[#252128]">
      <div className="w-[30rem] h-72 flex flex-col justify-between">
        <Link
          to="/contact-me"
          className="font-inter font-bold text-4xl text-primary dark: dark-text-secondary"
        >
          {t("sendMessage")}
        </Link>
        <p className="font-inter font-normal text-2xl text-black dark:text-white">
          {t("question")}
        </p>
        <a
          href="mailto:ahmetcan.yalcinkaya55@gmail.com"
          className="font-inter font-medium text-xl text-tertiary underline"
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
