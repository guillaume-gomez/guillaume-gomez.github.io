
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
    index_about_me: "A propos",
    index_resume: "CV",
    index_work:"Mes travaux",
    index_student_project: "Projets Etudiants",
    index_personal_project: "Projets Personnels",
    index_contribution: "Contribution",
    student_project_title: "Projets Etudiants",
    personal_project_title: "Projets Personnels",
    student_project_rep_code_title: "Project étudiant de traitement d'images",
    student_project_rep_code_subtitle: "Librairie 2D de génération d'images",
    student_project_rep_code_content: "Premier project en dut traitant de traitement d'images. Le but ici était de se perfectionner sur l'apprentisage du C++(11) et de toucher des concepts du developpement 2D : la structure des données des images, les transformation de bases, réalisation d'algorithme de traitement simple. Bref un des premiers de mes travaux abouti dans mon cursus",
    student_project_rep_code_buttonText: "Voir le repo",
    student_project_rep_code_href: "",
    student_project_rep_code_githubUrl: "https://github.com/guillaume-gomez/Rep-Code",
    student_project_nf11_title: "Production d'un compilateur Logo",
    student_project_nf11_subtitle: "Travaux pratiques sur la théorie des langages",
    student_project_nf11_content: "Le but de se projet était de pratiquer fondamentaux de la théorie des langages. Ce projet contenait un squelette avec un analyseur syntaxique ainsi qu'un outil de build(un projet netbeans). Le projet m'a permis de comprendre les notions vues en cours de maniere ludique(on peut faire pleins de dessins rapidement en Logo :))",
    student_project_nf11_buttonText: "Voir le repo",
    student_project_nf11_href: "https://github.com/guillaume-gomez/NF11-project/blob/67798b057eea3d7204dd82e8abed0d95544911a6/example.png",
    student_project_nf11_githubUrl: "https://github.com/guillaume-gomez/NF11-project"
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
    index_about_me: "About me",
    index_resume: "Resume",
    index_work:"My work",
    index_student_project: "Student Projects",
    index_personal_project: "Personnal Projects",
    index_contribution: "Contribution",
    student_project_title: "Student Projects",
    personal_project_title: "Personal Projects",
    student_project_rep_code_title: "",
    student_project_rep_code_subtitle: "",
    student_project_rep_code_content: "",
    student_project_rep_code_buttonText: "",
    student_project_rep_code_href: "",
    student_project_rep_code_githubUrl: "",
    student_project_nf11_title: "",
    student_project_nf11_subtitle: "",
    student_project_nf11_content: "",
    student_project_nf11_buttonText: "",
    student_project_nf11_href: "",
    student_project_nf11_githubUrl: ""
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