import React from 'react';

const Tag: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <div className="px-3 py-1 border-light-dark border rounded-md text-light-dark">{children}</div>;
};

export default Tag;
