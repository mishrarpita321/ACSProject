// Tooltip.jsx
import React from 'react';

export const Tooltip = ({ face }) => {
  if (!face) return null;

  return (
    <div className="tooltip">
      <img src={face.image} alt="Face" />
      {/* Other face details */}
    </div>
  );
};
