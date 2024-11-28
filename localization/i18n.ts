import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en.json';
import th from './th.json';
import * as Localization from 'react-native-localize';

const resources = { // list of languages
 en,
 th,
};

const fallbackLng = 'en';
const detectLanguage = () => {
    const locales = Localization.getLocales();
    return locales[0]?.languageCode || fallbackLng;
  };



i18n.use(initReactI18next) // passes i18n down to react-i18next
 .init({
  compatibilityJSON: 'v4', //To make it work for Android devices, add this line.
  resources,
  lng: detectLanguage(), // default language to use.
  // if you're using a language detector, do not define the lng option
interpolation: {
   escapeValue: false,
  },
 });
export default i18n;
