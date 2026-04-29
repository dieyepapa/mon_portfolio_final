import { useState } from 'react';

const useGroqAI = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const generateResponse = async (messages) => {
    setLoading(true);
    setError(null);
    
    try {
      // Simulation de réponse IA (à remplacer par l'appel API réel)
      return new Promise((resolve) => {
        setTimeout(() => {
          const responses = [
            "[VOTRE NOM] est un développeur talentueux spécialisé dans Spring Boot et React.",
            "Ses compétences en IA et en architecture cloud sont impressionnantes.",
            "Il a développé plusieurs projets avec Odoo et Docker.",
            "N'hésitez pas à le contacter pour vos projets !"
          ];
          const randomResponse = responses[Math.floor(Math.random() * responses.length)];
          resolve(randomResponse);
          setLoading(false);
        }, 1000);
      });
    } catch (err) {
      setError(err.message);
      setLoading(false);
      return "Désolé, une erreur s'est produite.";
    }
  };

  return { generateResponse, loading, error };
};

export default useGroqAI;