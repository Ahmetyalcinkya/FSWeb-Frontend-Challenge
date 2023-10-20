import { t } from "i18next";
import React from "react";
import ProjectsCompound from "../Compounds/ProjectsCompound";

const Projects = () => {
  return (
    <div className="w-full light-secondary dark: dark-secondary flex flex-col justify-center items-center">
      <div className="w-full lg:w-[60rem] gap-y-4 flex flex-col pt-16">
        <div className="sm:w-52 sm:h-12">
          <h4 className="font-inter font-bold text-5xl leading-10 text-primary dark: dark-text-primary">
            {t("projects")}
          </h4>
        </div>
        <ProjectsCompound />
      </div>
    </div>
  );
};

export default Projects;
