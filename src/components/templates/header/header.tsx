import { Button, Hamburger } from '@/components/atoms';
import { Logo } from '@/components/molecules';
import { Navbar } from '@/components/organisms';
import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <>
      <header>
        <div className="max-w-[1280px] mx-auto flex justify-between align-middle p-5">
          {/* Brand Logo */}
          <Link href="#" className="flex">
            <Logo />
          </Link>

          {/* Navbar */}
          <div className="hidden md:flex  align-middle justify-center gap-12">
            <Navbar />
            <div className="flex cursor-default">
              <p className="my-auto">해외 개발자 활용 서비스</p>
            </div>
          </div>

          {/* Contact */}
          <div className="hidden md:flex">
            <Button variant="primary">문의하기</Button>
          </div>

          <div className="md:hidden">
            <Hamburger />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
