import { useState, useEffect } from 'react';

const useTypingEffect = (texts, typingSpeed = 100, deletingSpeed = 50, pauseTime = 2000) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const currentText = texts[currentIndex % texts.length];
    
    const timeout = setTimeout(() => {
      if (isPaused) {
        setIsPaused(false);
        setIsDeleting(true);
        return;
      }
      
      if (!isDeleting && displayText === currentText) {
        setIsPaused(true);
        return;
      }
      
      if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setCurrentIndex((prev) => prev + 1);
        return;
      }
      
      if (isDeleting) {
        setDisplayText(currentText.substring(0, displayText.length - 1));
      } else {
        setDisplayText(currentText.substring(0, displayText.length + 1));
      }
    }, isPaused ? pauseTime : (isDeleting ? deletingSpeed : typingSpeed));
    
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, isPaused, currentIndex, texts, typingSpeed, deletingSpeed, pauseTime]);

  return displayText;
};

export default useTypingEffect;