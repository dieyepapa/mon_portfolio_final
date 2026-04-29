import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPaperPlane, FaRobot, FaUser, FaTimes } from 'react-icons/fa';

// ============================================================
// 📚 BASE DE CONNAISSANCES DU CHATBOT
// ============================================================
const KNOWLEDGE_BASE = {
  // Informations générales
  identity: {
    name: "Abdoulaye DIEYE",
    title: "un Développeur Fullstack et fondateur de Dieye'sTech (digital agency)",
    location: "Dakar, Sénégal",
    email: "pvpvdieye10@gmail.com",
    availability: "Recherche un stage Master 2",
    github: "https://github.com/abdoulaye-dieye",
    linkedin: "https://www.linkedin.com/analytics/creator/top-posts/?endDate=2026-04-29&metricType=IMPRESSIONS&startDate=2026-04-23&timeRange=past_7_days', icon: <FaLinkedin size={16}/>, label: 'LinkedIn",
  },

  // Compétences
  skills: {
    backend: ["Spring Boot", "Laravel", "Python", "Django", "JEE" ],
    frontend: ["React", "Flutter", "Tailwind CSS", "TypeScript" ],
    devops: ["Docker", "Kubernetes", "CI/CD", "OpenShift"],
    database: ["PostgreSQL", "MySQL", "SQLite"],
    ai: ["Machine Learning", "NLP", "Data Processing"],
  },

  // Projets
  projects: [
    {
      name: "SUNU-LAB",
      category: "Web",
      description: "Laboratoire virtuel SVT pour les élèves de 3ème avec simulations 3D interactives, tableau de bord enseignant, notifications temps réel.",
      techs: ["Laravel", "Vue.js", "Three.js", "MySQL", "TailwindCSS"],
    },
    {
      name: "AgroSense",
      category: "Mobile",
      description: "Application mobile qui connecte investisseurs et agriculteurs via blockchain Hedera Hashgraph. Transactions sécurisées, interface intuitive.",
      techs: ["Flutter", "Hedera Hashgraph", "Dart"],
    },
    {
      name: "Prédiction Diabète IA",
      category: "IA",
      description: "Modèle Machine Learning pour prédire le diabète avec 75% de précision, exposé via API REST.",
      techs: ["Python", "Scikit-learn", "Pandas"],
    },
    {
      name: "Chatbot Médical",
      category: "IA",
      description: "Chatbot NLP pour assistance médicale générale, disponible 24h/24.",
      techs: ["Python", "NLP", "Transformers"],
    },
    {
      name: "Géolocalisation Mobile",
      category: "Mobile",
      description: "Application Flutter de cartographie interactive avec localisation temps réel.",
      techs: ["Flutter", "Google Maps", ],
    },
  ],

  // Formation
  education: [
    {
      degree: "Master 1 — Systèmes d'Information",
      school: "Université Alioune Diop de Bambey",
      period: "EN COURS",
      description: "Spécialisation en IA et systèmes d'information avancés.",
    },
    {
      degree: "Licence — Développement d'Applications",
      school: "Université Alioune Diop de Bambey",
      period: "2022 — 2025",
      description: "Formation complète en développement fullstack.",
    },
  ],
};

// ============================================================
// 🤖 LOGIQUE DE RÉPONSE INTELLIGENTE
// ============================================================
function getResponse(userMessage) {
  const msg = userMessage.toLowerCase();

  // === SALUTATIONS ===
  if (msg.match(/bonjour|salut|coucou|hello|hi/)) {
    return "Bonjour ! 👋 Je suis l'assistant IA de Abdoulaye DIEYE. Je peux vous parler de ses compétences, projets, parcours ou disponibilité. Posez-moi votre question !";
  }

  // === QUI EST-IL ? ===
  if (msg.match(/qui es-tu|qui est|présente|presente|parle de toi/)) {
    return `Abdoulaye DIEYE est ${KNOWLEDGE_BASE.identity.title}, basé à ${KNOWLEDGE_BASE.identity.location}. Passionné par les technologies innovantes, il transforme des idées en solutions robustes. ${KNOWLEDGE_BASE.identity.availability}`;
  }

  // === COMPÉTENCES ===
  if (msg.match(/comp[eé]tences|sais-tu faire|technologies|stack|ma[îi]trise|expertise/)) {
    const allSkills = [
      ...KNOWLEDGE_BASE.skills.backend.map(s => `**${s}**`),
      ...KNOWLEDGE_BASE.skills.frontend.map(s => `**${s}**`),
      ...KNOWLEDGE_BASE.skills.devops.map(s => `**${s}**`),
      ...KNOWLEDGE_BASE.skills.database.map(s => `**${s}**`),
      ...KNOWLEDGE_BASE.skills.ai.map(s => `**${s}**`),
    ];
    return `Abdoulaye maîtrise de nombreuses technologies :\n\n• Backend : ${KNOWLEDGE_BASE.skills.backend.join(", ")}\n• Frontend/Mobile : ${KNOWLEDGE_BASE.skills.frontend.join(", ")}\n• DevOps/Cloud : ${KNOWLEDGE_BASE.skills.devops.join(", ")}\n• Bases de données : ${KNOWLEDGE_BASE.skills.database.join(", ")}\n• IA/ML : ${KNOWLEDGE_BASE.skills.ai.join(", ")}`;
  }

  // === PROJETS ===
  if (msg.match(/projets|r[eé]alisations|créations|portfolio|travaux/)) {
    let response = "Voici ses principaux projets :\n\n";
    KNOWLEDGE_BASE.projects.forEach(p => {
      response += `📌 ${p.name} (${p.category})\n   ${p.description}\n   🔧 ${p.techs.join(", ")}\n\n`;
    });
    response += `👉 Pour plus de détails, n'hésitez pas à demander : "Parle-moi de ${KNOWLEDGE_BASE.projects[0].name}"`;
    return response;
  }

  // Projet spécifique (SUNU-LAB)
  if (msg.match(/sunu|lab|virtuel|svt/)) {
    const p = KNOWLEDGE_BASE.projects.find(p => p.name === "SUNU-LAB");
    return `${p.name} (${p.category})\n${p.description}\n\nTechnologies : ${p.techs.join(", ")}`;
  }

  // Projet spécifique (AgroSense)
  if (msg.match(/agrosense|agro|investisseurs|agriculteurs|blockchain/)) {
    const p = KNOWLEDGE_BASE.projects.find(p => p.name === "AgroSense");
    return `${p.name} (${p.category})\n${p.description}\n\nTechnologies : ${p.techs.join(", ")}`;
  }

  // Projet IA (diabète)
  if (msg.match(/diab[eè]te|prediction|ml|machine learning/)) {
    const p = KNOWLEDGE_BASE.projects.find(p => p.name === "Prédiction Diabète IA");
    return `${p.name}\n${p.description}\n\nTechnologies : ${p.techs.join(", ")}`;
  }

  // === FORMATION / PARCOURS ===
  if (msg.match(/formation|études|diplôme|parcours|université|uadb/)) {
    let response = "🎓 Parcours académique :\n\n";
    KNOWLEDGE_BASE.education.forEach(e => {
      response += `📌 ${e.degree}\n   ${e.school} (${e.period})\n   ${e.description}\n\n`;
    });
    return response;
  }

  // === STAGE / DISPONIBILITÉ ===
  if (msg.match(/stage|alternance|disponible|opportunité|poste|embauche|recrute/)) {
    return `📢 Disponibilité : ${KNOWLEDGE_BASE.identity.availability}\n\nIl est ouvert à toute proposition. N'hésitez pas à le contacter par email : ${KNOWLEDGE_BASE.identity.email}`;
  }

  // === CONTACT ===
  if (msg.match(/contact|joindre|email|mail|téléphone|appeler|écrire/)) {
    return `📧 Email : ${KNOWLEDGE_BASE.identity.email}\n💻 GitHub : ${KNOWLEDGE_BASE.identity.github}\n🔗 **LinkedIn** : ${KNOWLEDGE_BASE.identity.linkedin}\n\nN'hésitez pas à l'envoyer un message, il répond rapidement !`;
  }

  // === MERCI / FIN ===
  if (msg.match(/merci|thanks|bravo|super|génial/)) {
    return "Avec plaisir ! 😊 Si vous avez d'autres questions, je suis là. Bonne journée !";
  }

  // === RÉPONSE PAR DÉFAUT ===
  return `Je n'ai pas bien compris votre question. Voici ce que je peux vous dire sur Abdoulaye DIEYE :

• Qui est-il ? (demandez "qui est Abdoulaye")
• Ses compétences (demandez "quelles sont ses compétences")
• Ses projets (demandez "parle-moi de ses projets")
• Sa formation (demandez "quel est son parcours")
• Sa disponibilité (demandez "recherche-t-il un stage")
• Comment le contacter (demandez "comment le joindre")

Posez-moi une question précise ! 💬`;
}

// ============================================================
// 🧩 COMPOSANT CHATBOT
// ============================================================
const Chatbot = ({ onClose }) => {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Bonjour ! 👋 Je suis l\'assistant IA de Abdoulaye DIEYE. Je peux vous renseigner sur ses compétences, projets, parcours ou disponibilité. Que souhaitez-vous savoir ?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    // Simulation de délai (réaliste)
    setTimeout(() => {
      const response = getResponse(userMessage.content);
      setMessages(prev => [...prev, { role: 'assistant', content: response }]);
      setIsLoading(false);
    }, 500);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const suggestions = [
    "Qui est Abdoulaye DIEYE ?",
    "Quelles sont ses compétences ?",
    "Parle-moi de ses projets",
    "Quel est son parcours ?",
    "Recherche-t-il un stage ?",
    "Comment le contacter ?"
  ];

  return (
    <div className="fixed bottom-24 right-6 z-50 w-96 h-[500px] bg-gray-900 rounded-2xl shadow-2xl overflow-hidden border border-gray-700 flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <FaRobot className="text-white text-xl" />
          <h3 className="text-white font-semibold">Assistant IA</h3>
        </div>
        <button onClick={onClose} className="text-white hover:text-gray-200 transition-colors">
          <FaTimes />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((msg, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`flex gap-2 max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
              <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 ${msg.role === 'user' ? 'bg-blue-500' : 'bg-purple-500'}`}>
                {msg.role === 'user' ? <FaUser className="text-white text-xs" /> : <FaRobot className="text-white text-xs" />}
              </div>
              <div className={`p-3 rounded-lg ${msg.role === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-800 text-gray-200'}`}>
                <p className="text-sm whitespace-pre-wrap">{msg.content}</p>
              </div>
            </div>
          </motion.div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-gray-800 p-3 rounded-lg">
              <div className="flex gap-1">
                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Suggestions (affiche uniquement au début) */}
      {messages.length <= 2 && (
        <div className="px-4 pb-2">
          <p className="text-gray-500 text-xs mb-2">Suggestions :</p>
          <div className="flex flex-wrap gap-2">
            {suggestions.map((suggestion, idx) => (
              <button
                key={idx}
                onClick={() => setInput(suggestion)}
                className="px-3 py-1 bg-gray-800 rounded-full text-gray-300 text-xs hover:bg-gray-700 transition-colors"
              >
                {suggestion}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Input */}
      <div className="p-4 border-t border-gray-800">
        <div className="flex gap-2">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Posez votre question..."
            className="flex-1 px-4 py-2 bg-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            rows="1"
          />
          <button
            onClick={sendMessage}
            disabled={isLoading || !input.trim()}
            className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:scale-105"
          >
            <FaPaperPlane />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;