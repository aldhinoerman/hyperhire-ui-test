import React from 'react';

interface BoxIconProps {
  icon: React.ReactNode;
}

const BoxIcon: React.FC<BoxIconProps> = ({ icon }) => {
  return <div className="flex justify-center items-center p-2 bg-secondary rounded-md">{icon}</div>;
};

export default BoxIcon;
