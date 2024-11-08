import React from 'react';

interface CardProps extends React.PropsWithChildren {
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div className={`bg-white w-full rounded-lg shadow-lg py-9 px-4  ${className ? className : ''}`}>{children}</div>
  );
};

export default Card;
