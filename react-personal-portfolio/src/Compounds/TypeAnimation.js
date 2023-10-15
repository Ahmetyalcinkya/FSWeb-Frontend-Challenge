import { t } from "i18next";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const Animation = () => {
  return (
    <TypeAnimation
      sequence={[
        `${t("header")}`,
        1000,
        `${t("header2")}`,
        1000,
        `${t("header3")}`,
        1000,
      ]}
      wrapper="span"
      speed={5}
      className="font-inter font-bold text-5xl text-left text-secondary"
      repeat={Infinity}
    />
  );
};

export default Animation;
