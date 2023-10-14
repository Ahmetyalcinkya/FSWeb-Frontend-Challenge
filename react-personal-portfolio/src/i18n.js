import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
// import LanguageDetector from 'i18next-browser-languagedetector';

// const resources = {
//   tr: {
//     translation: {
//       header: "Ben bir Frontend Geliştiricisiyim...",
//     },
//   },
//   en: {
//     translation: {
//       header: "I am a Frontend Developer...",
//     },
//   },
// };

i18n
  .use(initReactI18next)
  .use(Backend)
  // .use(LanguageDetector)
  .init({
    lng: "en",
    //   resources,
  });

export default i18n;
