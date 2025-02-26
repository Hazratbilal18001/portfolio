import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Ensure correct paths to JSON files
import en from "./locales/en.json";
import da from "./locales/da.json";

i18n
  .use(initReactI18next) 
  .init({
    resources: {
      en: { translation: en }, 
      da: { translation: da }  
    },
    lng: "en", // Default language
    fallbackLng: "en",
    interpolation: { escapeValue: false }, // Avoid escaping HTML tags
  });

export default i18n;
