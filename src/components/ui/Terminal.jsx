import React from 'react';

const Terminal = ({ commands }) => {
  return (
    <div className="bg-black/50 rounded-lg p-4 font-mono text-sm">
      {commands.map((cmd, i) => (
        <div key={i} className="text-green-400">{cmd}</div>
      ))}
    </div>
  );
};

export default Terminal;