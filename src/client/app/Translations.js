
const translations = {
  "fr" : {
    resume_title: "Curriculum Vitae",
    resume_sub_title: "Un court extrait de mon CV",
    resume_download_resume: "Télécharger mon CV complet",
    resume_array_title: "Titre",
    resume_array_year: "Année",
    resume_array_location: "Where"
  },
  "en" : {
    resume_title: "Resume",
    resume_sub_title: "A draft from my CV"
    resume_download_resume: "Download my full resume",
    resume_array_title: "Title",
    resume_array_year: "Year",
    resume_array_location: "Lieu"
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