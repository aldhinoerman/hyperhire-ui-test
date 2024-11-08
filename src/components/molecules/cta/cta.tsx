import { Button } from '@/components/atoms';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import React from 'react';

interface CtaProps {
  label: string;
  link?: string;
}

const Cta: React.FC<CtaProps> = ({ label, link }) => {
  return (
    <Button variant="link" link={link}>
      {label}{' '}
      <span className="border border-light-dark rounded-md">
        <ArrowRightIcon className="w-5 h-5" />
      </span>
    </Button>
  );
};

export default Cta;
