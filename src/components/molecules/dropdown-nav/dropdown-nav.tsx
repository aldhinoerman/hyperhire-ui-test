'use client';
import { INavbar } from '@/utils';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

interface DropdownProps {
  title: string;
  items: Array<INavbar>;
}

const DropdownNav: React.FC<DropdownProps> = ({ title, items }) => {
  const pathname = usePathname();
  return (
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn-link flex align-middle gap-2 text-white">
        {title}
        <div className="w-4">
          <ChevronDownIcon />
        </div>
      </div>
      <ul tabIndex={0} className="dropdown-content menu bg-white rounded-box z-[1] w-52 p-2 shadow text-dark">
        {items?.length > 0 &&
          items.map((obj: INavbar, idx: number) => (
            <li key={idx}>
              <Link href={obj.key} className={pathname === obj.key ? 'font-bold' : 'font-normal'}>
                {obj.label}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default DropdownNav;
