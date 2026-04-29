import { useState, useEffect } from 'react';

const useGitHubStats = (username) => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!username) return;
    
    const fetchRepos = async () => {
      setLoading(true);
      try {
        // Simulation de données GitHub
        const mockRepos = [
          { id: 1, name: "odoo-ai-module", stars: 12, language: "Python", description: "Module Odoo avec IA prédictive" },
          { id: 2, name: "cloud-ecommerce", stars: 8, language: "Java", description: "E-commerce avec Spring Boot" },
          { id: 3, name: "flutter-ml-app", stars: 15, language: "Dart", description: "App mobile ML" },
          { id: 4, name: "data-pipeline", stars: 5, language: "Python", description: "Pipeline ETL avec Spark" }
        ];
        
        setTimeout(() => {
          setRepos(mockRepos);
          setLoading(false);
        }, 1000);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchRepos();
  }, [username]);

  return { repos, loading, error };
};

export default useGitHubStats;