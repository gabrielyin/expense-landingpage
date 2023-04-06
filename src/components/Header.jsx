import React, { useEffect, useState } from 'react';
import { HiMenuAlt4, HiOutlineX } from 'react-icons/hi';

import { header } from '../data';

import MobileNav from '../components/MobileNav';
import Nav from '../components/Nav';

export default function Header() {
  const [mobileNav, setMobileNav] = useState(false);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    })
  })

  const { logo, btnText } = header;
  return (
    <header
      className={`${isActive ? 'lg:top-0 bg-white shadow-2xl' : 'lg:top-[60px]'} py-6 lg:py-4 fixed w-full transition-all z-10`}
    >
      <div className='container mx-auto flex justify-between items-center'>
        <a href="#">
          <img src={logo} alt="" />
        </a>
        <div className='hidden lg:flex'>
          <Nav />
        </div>
        <button className='btn btn-sm btn-outline hidden lg:flex'>
          {btnText}
        </button>
        <button className='lg:hidden' onClick={() => setMobileNav(!mobileNav)}>
          {mobileNav ? (
            <HiOutlineX className='text-3xl text-accent' />
          ) : (
            <HiMenuAlt4 className='text-3xl text-accent' />
          )}
        </button>
        <div
          className={`${mobileNav ? 'left-0' : '-left-full'} fixed top-0 bottom-0 w-[60vw] lg:hidden transition-all bg-pink-400`}
        >
          <MobileNav />
        </div>
      </div>
    </header>
  );
};