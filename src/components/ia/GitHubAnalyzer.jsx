import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaSpinner, FaChartLine, FaCode, FaStar } from 'react-icons/fa';
import GlassCard from '../ui/GlassCard';
import { personalInfo } from '../../utils/constants';

const GitHubAnalyzer = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedRepo, setSelectedRepo] = useState(null);
  const [analysis, setAnalysis] = useState(null);

  useEffect(() => {
    fetchGitHubRepos();
  }, []);

  const fetchGitHubRepos = async () => {
    try {
      // Simulation de données (remplacez par l'appel API réel)
      setTimeout(() => {
        const mockRepos = [
          //{ id: 1, name: "odoo-ai-module", stars: 12, language: "Python", description: "Module Odoo avec IA prédictive" },
          { id: 2, name: "gestion hospitaliere", stars: 8, language: "HTML/CSS - MySQL", description: "Gestion d'un système hospitalier" },
          { id: 3, name: "flutter-ml-app", stars: 15, language: "Dart", description: "App mobile ML" },
          { id: 4, name: "Chatbot-Sante", stars: 5, language: "Python", description: "Tu lui poses des questions sur la santé" }
        ];
        setRepos(mockRepos);
        setLoading(false);
      }, 1000);
    } catch (error) {
      console.error("Erreur GitHub:", error);
      setLoading(false);
    }
  };

  const analyzeRepo = (repo) => {
    setSelectedRepo(repo);
    setLoading(true);
    
    // Simulation d'analyse IA
    setTimeout(() => {
      const mockAnalysis = {
        quality: 8.5,
        strengths: [
          "Code bien structuré et documenté",
          "Bonne utilisation des patterns de conception",
          "Tests unitaires présents"
        ],
        improvements: [
          "Ajouter plus de commentaires",
          "Optimiser certaines requêtes",
          "Mettre à jour les dépendances"
        ],
        summary: "Projet de qualité professionnelle. Démonstration d'excellentes compétences en architecture logicielle."
      };
      setAnalysis(mockAnalysis);
      setLoading(false);
    }, 1500);
  };

  return (
    <section className="py-20 bg-black/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-4">
            Analyse GitHub par IA
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Découvrez l'analyse intelligente de mes projets open source
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Liste des repos */}
          <GlassCard>
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <FaGithub className="text-blue-400" /> Projets GitHub
            </h3>
            {loading && !selectedRepo ? (
              <div className="flex justify-center py-8">
                <FaSpinner className="animate-spin text-blue-400 text-3xl" />
              </div>
            ) : (
              <div className="space-y-3">
                {repos.map((repo) => (
                  <motion.button
                    key={repo.id}
                    onClick={() => analyzeRepo(repo)}
                    className="w-full text-left p-4 rounded-lg bg-gray-800/50 hover:bg-gray-800 transition-all"
                    whileHover={{ x: 5 }}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-white font-semibold">{repo.name}</h4>
                      <div className="flex items-center gap-1 text-yellow-500">
                        <FaStar /> {repo.stars}
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm mb-2">{repo.description}</p>
                    <div className="flex items-center gap-2">
                      <FaCode className="text-blue-400 text-xs" />
                      <span className="text-gray-500 text-xs">{repo.language}</span>
                    </div>
                  </motion.button>
                ))}
              </div>
            )}
          </GlassCard>

          {/* Analyse du repo sélectionné */}
          <GlassCard>
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <FaChartLine className="text-purple-400" /> Analyse IA
            </h3>
            {!selectedRepo ? (
              <div className="text-center py-12 text-gray-500">
                <FaGithub className="text-6xl mx-auto mb-4 opacity-30" />
                <p>Sélectionnez un projet pour voir l'analyse</p>
              </div>
            ) : loading ? (
              <div className="flex justify-center py-8">
                <FaSpinner className="animate-spin text-purple-400 text-3xl" />
              </div>
            ) : analysis ? (
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text">{analysis.quality}/10</div>
                  <p className="text-gray-400 text-sm">Score de qualité</p>
                </div>
                
                <div>
                  <h4 className="text-green-400 font-semibold mb-2">✓ Points forts</h4>
                  <ul className="space-y-1">
                    {analysis.strengths.map((s, i) => (
                      <li key={i} className="text-gray-300 text-sm">• {s}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-yellow-400 font-semibold mb-2">⚠ Améliorations</h4>
                  <ul className="space-y-1">
                    {analysis.improvements.map((s, i) => (
                      <li key={i} className="text-gray-300 text-sm">• {s}</li>
                    ))}
                  </ul>
                </div>

                <div className="p-3 bg-purple-500/10 rounded-lg">
                  <p className="text-gray-300 text-sm italic">{analysis.summary}</p>
                </div>
              </div>
            ) : null}
          </GlassCard>
        </div>
      </div>
    </section>
  );
};

export default GitHubAnalyzer;