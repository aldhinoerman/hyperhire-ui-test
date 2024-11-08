import { CheckIcon } from '@heroicons/react/24/solid';
import React from 'react';

interface ServiceBoxProps {
  icon?: React.ReactNode;
  title: string;
}

const ServiceBox: React.FC<ServiceBoxProps> = ({ icon, title }) => {
  return (
    <>
      {/* Mobile View */}
      <div className="flex gap-1 items-center md:hidden">
        <div className="bg-light-secondary rounded-md p-1">
          <CheckIcon className="w-4 h-4 text-dark-blue" />
        </div>
        <p className="font-bold">{title}</p>
      </div>

      {/* Desktop View */}
      <div className="hidden md:flex animate-fadeIn items-center gap-6 md: w-[200px] lg:w-[275] xl:w-[330px] bg-white bg-opacity-20 p-4 rounded-md">
        <div className="bg-white bg-opacity-40 rounded-md p-2">{icon}</div>
        <div>
          <p className="font-bold">{title}</p>
        </div>
      </div>
    </>
  );
};

export default ServiceBox;
