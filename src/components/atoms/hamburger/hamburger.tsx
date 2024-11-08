import React from 'react';
import { Button } from '../button';

const Hamburger = () => {
  return (
    <Button className="flex flex-col items-center justify-center w-8 h-8 space-y-1 focus:outline-none">
      <span className="block h-1 w-6 bg-white transform transition duration-300 ease-in-out" />
      <span className="block h-1 w-6 bg-white transition duration-300 ease-in-out" />
      <span className="block h-1 w-6 bg-white transform transition duration-300 ease-in-out" />
    </Button>
  );
};

export default Hamburger;
