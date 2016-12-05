
const translations = {
  "fr" : {
    at: "à",
    resume_title: "Curriculum Vitae",
    resume_sub_title: "Un court extrait de mon CV",
    resume_download_resume: "Télécharger mon CV complet",
    resume_array_title: "Titre",
    resume_array_year: "Année",
    resume_array_location: "Where",
    resume_applidget: "Ingénieur Back-end",
    resume_masa: "Stagiare programmeur 3D ",
    resume_multiposting: "Stagiare developpeur Back-end ",
    resume_utc: "Diplôme d'Ingénieur en informatique",
    resume_iut: "Diplome D'iut en informatique",
    resume_bac: "Baccalauréat scientifique",
    resume_programming: "Programmation",
    about_me_title: "Quelques mots",
    about_me_content: "Lorem ipusm sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.",

  },
  "en" : {
    a: "at",
    resume_title: "Resume",
    resume_sub_title: "A draft from my CV",
    resume_download_resume: "Download my full resume",
    resume_array_title: "Title",
    resume_array_year: "Year",
    resume_array_location: "Lieu",
    resume_applidget: "Back-end engineer",
    resume_masa: "3D software programmer internship",
    resume_multiposting: "Software programmer internship ",
    resume_utc: "Master's Degree in Computer Engineering",
    resume_iut: "2-year engineering diploma in Computer Science",
    resume_bac: "French baccalauréat",
    resume_programming: "Programming",
    about_me_title: "About me",
    about_me_content: "Lorem ipusm sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.",

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