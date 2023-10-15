import React, { useContext } from "react";
import { SwitchContext } from "../Contexts/SwitchContext";
import { t } from "i18next";
import { LangContext } from "../Contexts/LanguageContext";

const FormPage = () => {
  const { toggleTheme } = useContext(SwitchContext);
  const { toggleLanguage } = useContext(LangContext);

  return (
    <div>
      <button onClick={toggleTheme}>toggledarkmode</button>
      <div className="absolute top-0">
        <button
          onClick={() => toggleLanguage("tr")}
          className="lang-btn dark: dark-btn"
        >
          TR
        </button>
        <button
          onClick={() => toggleLanguage("en")}
          className="lang-btn dark: dark-btn"
        >
          EN
        </button>
      </div>
      <h1>{t("header")}</h1>
    </div>
  );
};

export default FormPage;
