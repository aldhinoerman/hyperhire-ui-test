import React from 'react';

const Card: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <div className="bg-white rounded-lg shadow-lg p-9">{children}</div>;
};

export default Card;
