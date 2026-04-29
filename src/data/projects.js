export const projects = [
  {
    id: 1,
    title: "Laboratoir virtuel SVT pour les eleves de 3eme",
    description: "Cette application permet aux eleves de 3eme de realiser des simulations chez eux et meme en classe.",
    longDescription: ".",
    technologies: ["HTML/CSS", "Vue.js", "JavaScript", "Three.js", "Laravel", "MySQL"],
    image: "/assets/projects/odoo-ai.jpg",
    github: "https://github.com/[VOTRE_USERNAME]/odoo-ai-module",
    demo: "https://demo-odoo-ai.com",
    metrics: {
      efficacite: "+45%",
      precision: "92%",
      temps: "-60%"
    },
    aiDemo: {
      type: "odoo-generator",
      description: "Décrivez votre besoin métier, l'IA génère une structure de module Odoo"
    }
  },
  {
    id: 2,
    title: "Cloud Native E-commerce",
    description: "Plateforme e-commerce scalable avec architecture microservices.",
    technologies: ["Spring Boot", "React", "Docker", "Kubernetes", "AWS"],
    github: "https://github.com/[VOTRE_USERNAME]/ecommerce-cloud",
    demo: "https://ecommerce-demo.com",
    metrics: {
      disponibilite: "99.9%",
      scalabilite: "10K+",
      latence: "<200ms"
    },
    aiDemo: {
      type: "architecture-generator",
      description: "Générez un diagramme d'architecture pour votre projet cloud"
    }
  },
  {
    id: 3,
    title: "Mobile App Flutter + ML",
    description: "Application mobile de reconnaissance d'images avec TensorFlow Lite.",
    technologies: ["Flutter", "Spring Boot", "TensorFlow Lite", "Python"],
    github: "https://github.com/[VOTRE_USERNAME]/flutter-ml-app",
    demo: "https://flutter-ml-demo.com",
    metrics: {
      precision: "94%",
      inference: "50ms",
      utilisateurs: "5K+"
    },
    aiDemo: {
      type: "image-classifier",
      description: "Testez le modèle de classification d'images en temps réel"
    }
  },
  {
    id: 4,
    title: "Pipeline de Données IA",
    description: "Pipeline ETL avec traitement de données et analyse prédictive.",
    technologies: ["Python", "Apache Spark", "AWS S3", "Scikit-learn"],
    github: "https://github.com/[VOTRE_USERNAME]/data-pipeline",
    demo: "https://pipeline-demo.com",
    metrics: {
      debit: "1M records/min",
      precision: "89%",
      reduction: "-35%"
    },
    aiDemo: {
      type: "data-analyzer",
      description: "Analysez vos données avec notre IA"
    }
  }
];