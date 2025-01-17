import { createContext, useEffect, useState } from "react";

export const SwitchContext = createContext();

const SwitchContextProvider = ({ children }) => {
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
    localStorage.setItem("darkMode", theme);
  };

  // useEffect(() => {
  //   const darkModeSelection = localStorage.getItem("darkMode") === "dark";

  //   if (darkModeSelection) {
  //     document.documentElement.classList.remove("dark");
  //   } else {
  //     document.documentElement.classList.add("dark");
  //   }
  // }, []);

  return (
    <SwitchContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </SwitchContext.Provider>
  );
};

export default SwitchContextProvider;
