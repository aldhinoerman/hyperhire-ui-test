import React from 'react';

interface BenefitItemProps {
  title: string;
  description: string;
  delay: number;
}

const BenefitItem: React.FC<BenefitItemProps> = ({ title, description, delay }) => {
  return (
    <div className={`border-t border-t-white pt-2 animate-fadeInUp delay-${String(delay)}`}>
      <p className="font-bold">{title}</p>
      <p className="text-white text-opacity-80 mt-2">{description}</p>
    </div>
  );
};

export default BenefitItem;
