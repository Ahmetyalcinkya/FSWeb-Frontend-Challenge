import React from "react";
import Project1 from "../Assets/e-commerce.png";
import Project2 from "../Assets/pizza.png";
import Project3 from "../Assets/weather.png";
import Project4 from "../Assets/restorant.png";
import Project5 from "../Assets/portfolio html.png";
import { t } from "i18next";

const ProjectsCompound = () => {
  return (
    <div className="flex flex-col items-center gap-y-8 pt-8 pb-16">
      <div className="project-div">
        <img src={Project1} alt="projectImg" className="project-img" />
        <div className="project-description">
          <h4 className="project-h4 ">{t("project1")}</h4>
          <p className="project-p">{t("project1desc")}</p>
          <div className="flex">
            <h6 className="project-h6 dark: dark-bg-tertiary">React</h6>
            <h6 className="project-h6 dark: dark-bg-tertiary">Redux</h6>
            <h6 className="project-h6 dark: dark-bg-tertiary">Java</h6>
            {/* <h6 className="project-h6 dark: dark-bg-tertiary">Tailwind CSS</h6> */}
          </div>
          <div className="flex">
            <a
              href=""
              target="_blank"
              className="project-button dark: dark-text-primary"
            >
              {t("view")}
            </a>
            <a
              href="https://github.com/Ahmetyalcinkya/e-commerce-site"
              target="_blank"
              className="project-button dark: dark-text-primary"
            >
              Github
            </a>
          </div>
        </div>
      </div>
      <div className="project-div">
        <img src={Project2} alt="projectImg" className="project-img" />
        <div className="project-description">
          <h4 className="project-h4 text-tertiary dark: dark-text-secondary">
            {t("project2")}
          </h4>
          <p className="project-p">{t("project2desc")}</p>
          <div className="flex">
            <h6 className="project-h6 dark: dark-bg-tertiary">React</h6>
            <h6 className="project-h6 dark: dark-bg-tertiary">Cypress</h6>
            <h6 className="project-h6 dark: dark-bg-tertiary">Yup</h6>
          </div>
          <div className="flex">
            <a
              href="https://fsweb-s7-challenge-pizza-topaz.vercel.app/"
              target="_blank"
              className="project-button dark: dark-text-primary"
            >
              {t("view")}
            </a>
            <a
              href="https://github.com/Ahmetyalcinkya/fsweb-s7-challenge-pizza"
              target="_blank"
              className="project-button dark: dark-text-primary"
            >
              Github
            </a>
          </div>
        </div>
      </div>
      <div className="project-div">
        <img src={Project3} alt="projectImg" className="project-img" />
        <div className="project-description">
          <h4 className="project-h4 text-tertiary dark: dark-text-secondary">
            {t("project3")}
          </h4>
          <p className="project-p">{t("project3desc")}</p>
          <div className="flex">
            <h6 className="project-h6 dark: dark-bg-tertiary">JavaScript</h6>
            <h6 className="project-h6 dark: dark-bg-tertiary">CSS</h6>
            <h6 className="project-h6 dark: dark-bg-tertiary">HTML</h6>
          </div>
          <div className="flex">
            <a
              href="https://weather-app-js-eosin.vercel.app/"
              target="_blank"
              className="project-button dark: dark-text-primary"
            >
              {t("view")}
            </a>
            <a
              href="https://github.com/Ahmetyalcinkya/weather-app-js"
              target="_blank"
              className="project-button dark: dark-text-primary"
            >
              Github
            </a>
          </div>
        </div>
      </div>
      <div className="project-div">
        <img src={Project4} alt="projectImg" className="project-img" />
        <div className="project-description">
          <h4 className="project-h4 text-tertiary dark: dark-text-secondary">
            {t("project4")}
          </h4>
          <p className="project-p">{t("project4desc")}</p>
          <div className="flex">
            <h6 className="project-h6 dark: dark-bg-tertiary">JavaScript</h6>
            <h6 className="project-h6 dark: dark-bg-tertiary">CSS</h6>
            <h6 className="project-h6 dark: dark-bg-tertiary">HTML</h6>
          </div>
          <div className="flex">
            <a
              href="https://restaurant-project-six-iota.vercel.app/"
              target="_blank"
              className="project-button dark: dark-text-primary"
            >
              {t("view")}
            </a>
            <a
              href="https://github.com/Ahmetyalcinkya/Restaurant-Project"
              target="_blank"
              className="project-button dark: dark-text-primary"
            >
              Github
            </a>
          </div>
        </div>
      </div>
      <div className="project-div">
        <img src={Project5} alt="projectImg" className="project-img" />
        <div className="project-description">
          <h4 className="project-h4 text-tertiary dark: dark-text-secondary">
            {t("project5")}
          </h4>
          <p className="project-p">{t("project5desc")}</p>
          <div className="flex">
            <h6 className="project-h6 dark: dark-bg-tertiary">JavaScript</h6>
            <h6 className="project-h6 dark: dark-bg-tertiary">CSS</h6>
            <h6 className="project-h6 dark: dark-bg-tertiary">HTML</h6>
          </div>
          <div className="flex">
            <a
              href="https://personal-portfolio-eight-mu.vercel.app/"
              target="_blank"
              className="project-button dark: dark-text-primary"
            >
              {t("view")}
            </a>
            <a
              href="https://github.com/Ahmetyalcinkya/Personal-Portfolio"
              target="_blank"
              className="project-button dark: dark-text-primary"
            >
              Github
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCompound;
