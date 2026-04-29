import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMagic, FaSpinner } from 'react-icons/fa';

const ProjectAIDemo = ({ type, description }) => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!input.trim()) return;
    
    setLoading(true);
    
    // Simulation de génération IA
    setTimeout(() => {
      let result = '';
      switch (type) {
        case 'odoo-generator':
          result = `Module Odoo généré pour : "${input}"
          
Modèles Python:
- models/${input.toLowerCase().replace(/\s/g, '_')}.py

Vues XML:
- views/${input.toLowerCase().replace(/\s/g, '_')}_view.xml

Sécurité:
- security/ir.model.access.csv

✅ Structure prête à être implémentée !`;
          break;
        case 'architecture-generator':
          result = `Architecture microservices pour : "${input}"

┌─────────┐     ┌─────────┐     ┌─────────┐
│ Gateway │────▶│ Service │────▶│   DB    │
└─────────┘     │    API  │     └─────────┘
                └─────────┘
                      │
                ┌─────────┐
                │  Redis  │
                └─────────┘

Docker Compose prêt à déployer.`;
          break;
        case 'image-classifier':
          result = `🧠 Analyse d'image (simulation)

Catégorie prédite: ${['chat', 'chien', 'voiture', 'paysage'][Math.floor(Math.random() * 4)]}
Confiance: ${Math.floor(Math.random() * 30 + 70)}%

(Vous pourrez bientôt tester avec vos propres images !)`;
          break;
        default:
          result = `Analyse IA pour : "${input}"

Recommandations générées avec succès !
Cette démo montre comment l'IA peut assister dans le développement.`;
      }
      setOutput(result);
      setLoading(false);
    }, 2000);
  };

  const getPlaceholder = () => {
    switch (type) {
      case 'odoo-generator':
        return "Ex: 'Gestion des commandes fournisseurs'";
      case 'architecture-generator':
        return "Ex: 'Application de réservation en ligne'";
      default:
        return "Décrivez votre besoin...";
    }
  };

  return (
    <div className="space-y-3">
      <p className="text-gray-400 text-xs">{description}</p>
      
      <div className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={getPlaceholder()}
          className="flex-1 px-3 py-2 bg-gray-800 rounded-lg text-white text-sm focus:outline-none focus:ring-1 focus:ring-purple-500"
        />
        <motion.button
          onClick={handleGenerate}
          disabled={loading || !input.trim()}
          className="px-3 py-2 bg-purple-500 rounded-lg text-white text-sm disabled:opacity-50"
          whileHover={{ scale: 1.05 }}
        >
          {loading ? <FaSpinner className="animate-spin" /> : <FaMagic />}
        </motion.button>
      </div>

      {output && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="p-3 bg-gray-800 rounded-lg"
        >
          <pre className="text-gray-300 text-xs whitespace-pre-wrap font-mono">{output}</pre>
        </motion.div>
      )}
    </div>
  );
};

export default ProjectAIDemo;