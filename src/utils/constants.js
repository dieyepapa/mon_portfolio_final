export const personalInfo = {
  name: "[VOTRE NOM]",
  title: "Étudiant M1 Systèmes d'Information | Développeur Fullstack & IA",
  email: "votre.email@uadb.edu.sn",
  phone: "+221 XX XXX XX XX",
  location: "Bambey, Sénégal",
  github: "https://github.com/[VOTRE_USERNAME]",
  linkedin: "https://linkedin.com/in/[VOTRE_USERNAME]",
  twitter: "https://twitter.com/[VOTRE_USERNAME]",
};

export const SOCIAL_LINKS = [
  { name: "GitHub", url: personalInfo.github, icon: "FaGithub" },
  { name: "LinkedIn", url: personalInfo.linkedin, icon: "FaLinkedin" },
  { name: "Twitter", url: personalInfo.twitter, icon: "FaTwitter" },
  { name: "Email", url: `mailto:${personalInfo.email}`, icon: "FaEnvelope" }
];