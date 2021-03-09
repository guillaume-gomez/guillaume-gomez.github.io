import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";

import translationFR from './locales/fr/translation.json';
import translationEN from './locales/en/translation.json';

const resources = {
  en: {
    translation: translationEN
  },
  fr: {
    translation: translationFR
  }
};


i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "fr",
    fallbackLng: "fr", // use en if detected lng is not available
    keySeparator: false, // we do not use keys in form messages.welcome
    interpolation: {
      escapeValue: false // react already safes from xss
    }
});

export default i18n;