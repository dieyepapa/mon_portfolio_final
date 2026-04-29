import React from 'react';
import { motion } from 'framer-motion';

const GlassCard = ({ children, className = '', hover = true }) => {
  return (
    <motion.div
      className={`bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 ${hover ? 'transition-all duration-300 hover:translate-y-[-8px] hover:shadow-2xl' : ''} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;