import { Logo } from '@/components/molecules';
import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <>
      <header>
        <div className="max-w-[1024px] mx-auto flex justify-between align-middle p-5">
          {/* Brand Logo */}
          <Link href="#">
            <Logo />
          </Link>

          {/* Navbar */}
          <div className="flex align-middle justify-center gap-14">
            <p className="hidden md:flex cursor-default">해외 개발자 활용 서비스</p>
          </div>

          {/* Contact */}
          <div className="hidden md:flex">test</div>
        </div>
      </header>
    </>
  );
};

export default Header;
