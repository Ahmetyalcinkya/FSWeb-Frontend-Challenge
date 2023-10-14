import { t } from "i18next";
import React from "react";

const Profile = () => {
  return (
    <div className="w-full h-[34.5rem] light-primary flex justify-center items-center dark: dark-primary">
      <div className="flex flex-col justify-around w-[60rem] h-96">
        <h4 className="text-secondary font-bold text-5xl leading-[3rem] font-inter text-left">
          {t("profile")}
        </h4>
        <div className="flex justify-between">
          <div className="info-div">
            <h5 className="font-inter font-medium text-3xl text-white">
              {t("basicInformation")}
            </h5>
            <div className="flex flex-col w-full h-56 justify-between text-left text-secondary font-inter font-normal text-base leading-6">
              <div className="flex justify-between items-center">
                <p className="w-24">{t("date")}</p>
                <p className="w-48 text-white">10.01.1999</p>
              </div>
              <div className="flex justify-between items-center">
                <p className="w-24">{t("city")}</p>
                <p className="w-48 text-white">Samsun</p>
              </div>
              <div className="flex justify-between items-center">
                <p className="w-24">{t("education")}</p>
                <p className="w-48 text-white">{t("educationalStatus")}</p>
              </div>
              <div className="flex justify-between items-center">
                <p className="w-24">{t("preferred")}</p>
                <p className="w-48 text-white">Frontend Developer, UI</p>
              </div>
            </div>
          </div>
          {/* <img src="" alt="" className="info-div" /> */}
          <div className="info-div font-inter font-normal text-lg leading-7 text-white">
            <h5 className="font-inter font-medium text-3xl">{t("aboutMe")}</h5>
            <p className="pt-4 overflow-y-scroll font-inter ">
              {t("description")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
