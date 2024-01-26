import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import englishTranslation from "./languages/english.json";
import frenchTranslation from "./languages/french.json";
import hindiTranslation from "./languages/hindi.json";

i18n.use(initReactI18next).init({
  resources: {
    english: {
      translation: englishTranslation,
    },
    french: {
      translation: frenchTranslation,
    },
    hindi: {
      translation: hindiTranslation,
    },
  },
  lng: "english",
  fallbackLng: "english",
  debug: true,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
