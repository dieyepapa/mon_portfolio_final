// API Keys (à remplacer par vos vraies clés)
const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY || '';
const HUGGINGFACE_API_KEY = import.meta.env.VITE_HUGGINGFACE_API_KEY || '';
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN || '';

// Configuration de base pour les appels API
const API_CONFIG = {
  groq: {
    url: 'https://api.groq.com/openai/v1/chat/completions',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${GROQ_API_KEY}`
    }
  },
  huggingface: {
    url: 'https://api-inference.huggingface.co/models/',
    headers: {
      'Authorization': `Bearer ${HUGGINGFACE_API_KEY}`
    }
  },
  github: {
    url: 'https://api.github.com',
    headers: {
      'Authorization': `token ${GITHUB_TOKEN}`,
      'Accept': 'application/vnd.github.v3+json'
    }
  }
};

// Appel à l'API Groq pour le chatbot
export const callGroqAPI = async (messages) => {
  try {
    const response = await fetch(API_CONFIG.groq.url, {
      method: 'POST',
      headers: API_CONFIG.groq.headers,
      body: JSON.stringify({
        model: 'llama3-8b-8192',
        messages: messages,
        temperature: 0.7,
        max_tokens: 500
      })
    });
    
    const data = await response.json();
    return data.choices[0].message.content;
  } catch (error) {
    console.error('Erreur Groq API:', error);
    // Fallback en mode simulation
    return getSimulatedResponse(messages);
  }
};

// Simulation de réponse (quand pas de clé API)
const getSimulatedResponse = (messages) => {
  const responses = [
    "Merci pour votre question ! [VOTRE NOM] est un développeur passionné avec une solide expérience en Spring Boot, React, Docker et l'IA.",
    "Excellent choix ! [VOTRE NOM] maîtrise parfaitement l'architecture cloud et les conteneurs Docker.",
    "Oui, [VOTRE NOM] a développé plusieurs modules Odoo personnalisés avec intégration IA.",
    "N'hésitez pas à consulter ses projets GitHub pour voir des exemples concrets de son travail.",
    "Pour toute collaboration ou opportunité, vous pouvez le contacter directement via le formulaire de contact."
  ];
  return responses[Math.floor(Math.random() * responses.length)];
};

// Appel à l'API Hugging Face pour les modèles ML
export const callHuggingFaceAPI = async (model, inputs) => {
  try {
    const response = await fetch(`${API_CONFIG.huggingface.url}${model}`, {
      method: 'POST',
      headers: API_CONFIG.huggingface.headers,
      body: JSON.stringify({ inputs })
    });
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erreur Hugging Face API:', error);
    return null;
  }
};

// Récupération des repos GitHub
export const fetchGitHubRepos = async (username) => {
  try {
    const response = await fetch(`${API_CONFIG.github.url}/users/${username}/repos?sort=updated&per_page=10`, {
      headers: API_CONFIG.github.headers
    });
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erreur GitHub API:', error);
    return [];
  }
};

// Récupération des détails d'un repo spécifique
export const fetchGitHubRepoDetails = async (username, repoName) => {
  try {
    const response = await fetch(`${API_CONFIG.github.url}/repos/${username}/${repoName}`, {
      headers: API_CONFIG.github.headers
    });
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erreur GitHub API:', error);
    return null;
  }
};

// Analyse de code via IA (simulation)
export const analyzeCodeWithAI = async (code) => {
  // Simulation d'analyse
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        quality: Math.floor(Math.random() * 30) + 70,
        suggestions: [
          "Bonne structure de code",
          "Pensez à ajouter plus de commentaires",
          "Les tests unitaires sont bien présents"
        ],
        summary: "Code de bonne qualité, prêt pour la production."
      });
    }, 1500);
  });
};

// Génération de structure Odoo via IA
export const generateOdooModule = async (description) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        model: description.toLowerCase().replace(/\s/g, '_'),
        fields: ['name', 'description', 'active', 'create_date'],
        views: ['tree', 'form', 'search'],
        security: ['base.group_user']
      });
    }, 2000);
  });
};

// Génération d'architecture cloud
export const generateCloudArchitecture = async (requirements) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        services: ['API Gateway', 'Load Balancer', 'Web Server', 'Database', 'Cache'],
        containers: ['frontend', 'backend', 'database', 'redis'],
        recommendations: 'Utilisez Kubernetes pour l\'orchestration et Terraform pour l\'infrastructure as code.'
      });
    }, 2000);
  });
};

// Vérification si les clés API sont configurées
export const isAPIConfigured = () => {
  return {
    groq: !!GROQ_API_KEY && GROQ_API_KEY !== '',
    huggingface: !!HUGGINGFACE_API_KEY && HUGGINGFACE_API_KEY !== '',
    github: !!GITHUB_TOKEN && GITHUB_TOKEN !== ''
  };
};

// Export par défaut
const api = {
  callGroqAPI,
  callHuggingFaceAPI,
  fetchGitHubRepos,
  fetchGitHubRepoDetails,
  analyzeCodeWithAI,
  generateOdooModule,
  generateCloudArchitecture,
  isAPIConfigured
};

export default api;