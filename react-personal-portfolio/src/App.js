import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import FormPage from "./Pages/FormPage";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import "./App.css";
import { ToastContainer } from "react-toastify";

function App() {
  // THEME
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  // LANGUAGE

  const { t, i18n } = useTranslation();

  const toggleLanguage = async (lang) => {
    await i18n.changeLanguage(lang);
  };

  return (
    <div className="App total-width">
      <div>
        <button onClick={() => toggleLanguage("tr")}>TR</button>
        <button onClick={() => toggleLanguage("en")}>EN</button>
        <button onClick={toggleTheme}>toggledarkmode</button>
        <h3>{t("header")}</h3>
      </div>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/contact-me">
          <FormPage />
        </Route>
      </Switch>
      <ToastContainer />
    </div>
  );
}

export default App;
