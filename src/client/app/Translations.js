
const translations = {
  "fr" : {
    resume_title: "Curriculum Vitae",
    resume_download_resume: "Télécharger mon CV complet"
  },
  "en" : {
    resume_title: "Resume",
    resume_download_resume: "Download my full resume"
  }
}




export function t(locale, key) {
  if(!locale || !Object.keys(translations).includes(locale)) {
    return `Error : the locale ${locale} does not exist yet`;
  }
  const translation = translations[locale][key];
  if(!translation) {
    return `Error : the key ${key} does not exist`;
  }

  return translation;
}