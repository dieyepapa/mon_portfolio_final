import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaUserTie, FaLaptopCode, FaChartLine } from 'react-icons/fa';
import GlassCard from '../ui/GlassCard';
import { personalInfo } from '../../utils/constants';

const DynamicCV = () => {
  const [visitorType, setVisitorType] = useState('recruiter');
  const [generatedCV, setGeneratedCV] = useState('');

  useEffect(() => {
    // Détection du type de visiteur (simulation)
    const detectVisitor = () => {
      // Vous pouvez personnaliser cette logique
      const types = ['recruiter', 'client', 'tech_lead'];
      return types[Math.floor(Math.random() * types.length)];
    };
    setVisitorType(detectVisitor());
  }, []);

  useEffect(() => {
    generateCVContent();
  }, [visitorType]);

  const generateCVContent = () => {
    const contents = {
      recruiter: {
        title: "Profil Recruteur",
        summary: `Développeur Fullstack passionné avec ${personalInfo.name} maîtrise les technologies les plus demandées du marché : Spring Boot, React, Docker et l'IA. Rigoureux et autonome, je recherche un stage de Master 2 pour mettre mes compétences au service de votre entreprise.`,
        skills: "Spring Boot, React, Docker, AWS, Python, Machine Learning",
        availability: "Disponible pour un stage à partir de Mars 2026"
      },
      client: {
        title: "Profil Client",
        summary: `Expert en développement d'applications sur mesure, je peux vous accompagner dans vos projets : ERP (Odoo), applications web (Spring Boot/React), applications mobiles (Flutter) et solutions IA.`,
        skills: "Développement sur mesure, Intégration IA, Architecture Cloud, ERP Odoo",
        availability: "Disponible pour des missions freelance"
      },
      tech_lead: {
        title: "Profil Technique",
        summary: `Architecte logiciel en devenir, ${personalInfo.name} maîtrise les design patterns, l'architecture microservices, la conteneurisation Docker et les bonnes pratiques DevOps.`,
        skills: "Clean Architecture, Microservices, CI/CD, Tests Unitaires, Documentation",
        availability: "Open to technical discussions and code reviews"
      }
    };

    const content = contents[visitorType];
    setGeneratedCV(content);
  };

  const visitorIcons = {
    recruiter: <FaUserTie className="text-blue-400 text-2xl" />,
    client: <FaLaptopCode className="text-green-400 text-2xl" />,
    tech_lead: <FaChartLine className="text-purple-400 text-2xl" />
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-4">
            CV Dynamique par IA
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Une présentation adaptée à votre profil
          </p>
        </motion.div>

        <GlassCard>
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-700">
            {visitorIcons[visitorType]}
            <div>
              <h3 className="text-xl font-bold text-white">{generatedCV?.title}</h3>
              <p className="text-gray-400 text-sm">Version adaptée pour vous</p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h4 className="text-gray-300 font-semibold mb-2">📝 Résumé</h4>
              <p className="text-gray-400 leading-relaxed">{generatedCV?.summary}</p>
            </div>

            <div>
              <h4 className="text-gray-300 font-semibold mb-2">⚡ Compétences clés</h4>
              <div className="flex flex-wrap gap-2">
                {generatedCV?.skills?.split(', ').map((skill, i) => (
                  <span key={i} className="px-3 py-1 bg-blue-500/20 rounded-full text-blue-400 text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-4 bg-green-500/10 rounded-lg">
              <p className="text-green-400 text-sm">📅 {generatedCV?.availability}</p>
            </div>

            <div className="text-center pt-4">
              <motion.a
                href="/cv.pdf"
                download
                className="inline-block px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white"
                whileHover={{ scale: 1.05 }}
              >
                Télécharger le CV complet
              </motion.a>
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
};

export default DynamicCV;