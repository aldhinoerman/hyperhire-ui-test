import { DropdownNav } from '@/components/molecules';
import { navbarItems } from '@/utils';
import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex my-auto">
      <DropdownNav title="채용" items={navbarItems} />
    </nav>
  );
};

export default Navbar;
