import React from 'react';

const SkillBadge = ({ name, icon: Icon }) => {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-800 rounded-full text-gray-300 text-sm hover:bg-gray-700 transition-colors">
      {Icon && <Icon className="text-blue-400" />}
      <span>{name}</span>
    </div>
  );
};

export default SkillBadge;