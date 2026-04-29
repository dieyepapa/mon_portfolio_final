import { useState, useEffect } from 'react';

const useVisitorType = () => {
  const [visitorType, setVisitorType] = useState('recruiter');

  useEffect(() => {
    const detectVisitorType = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      const referrer = document.referrer;
      
      // Détection simple basée sur le referrer
      if (referrer.includes('linkedin') || referrer.includes('job') || referrer.includes('recruteur')) {
        return 'recruiter';
      }
      
      if (referrer.includes('github') || referrer.includes('stackoverflow') || userAgent.includes('developer')) {
        return 'tech_lead';
      }
      
      if (referrer.includes('entreprise') || referrer.includes('client') || referrer.includes('freelance')) {
        return 'client';
      }
      
      // Par défaut
      return 'recruiter';
    };
    
    setVisitorType(detectVisitorType());
  }, []);

  return visitorType;
};

export default useVisitorType;