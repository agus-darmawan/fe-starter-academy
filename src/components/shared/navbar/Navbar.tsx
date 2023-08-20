import { IconChevronDown } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useEffect, useState } from 'react';

import useScroll from '@/hooks/useScroll';

import LoginButton from '@/components/buttons/LoginButton';
import MobileNav from '@/components/shared/navbar/MobileNav';
import { navlinks, productlinks } from '@/components/shared/navbar/NavLink';

export default function Navbar() {
  const scrollPos = useScroll();
  const [isBlur, setBlur] = useState(false);
  const [isDropDownProduct, setDropDownProduct] = useState(false);

  useEffect(() => {
    if (scrollPos > 0) {
      setBlur(true);
    } else {
      setBlur(false);
    }
  }, [scrollPos]);

  const productDropdown = {
    enter: {
      opacity: 1,
      height: 'auto',
      transition: {
        duration: 0.2,
      },
      display: 'block',
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.2,
      },
      transitionEnd: {
        display: 'none',
      },
    },
  };

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50  flex h-20 rounded-b-[18px] lg:h-28 lg:px-10 ${
        isBlur
          ? 'bg-white/60 backdrop-blur-sm duration-500'
          : 'bg-white duration-500'
      }`}
    >
      <div className='hidden w-full flex-row justify-center lg:flex'>
        <section className='flex flex-row items-center justify-start lg:w-10/12'>
          <Image
            alt='Logo Starter Academy'
            width={60}
            height={60}
            priority={true}
            src='/images/logo.svg'
            className='h-16'
          />
          <ul className='text-blue-starter hidden flex-row text-xl font-semibold lg:flex'>
            <li
              className={`ml-12 flex flex-row `}
              onMouseEnter={() => {
                setDropDownProduct(true);
              }}
              onMouseLeave={() => {
                setDropDownProduct(false);
              }}
            >
              Produk
              {isDropDownProduct ? (
                <IconChevronDown className='inline-block w-10 rotate-180 duration-100' />
              ) : (
                <IconChevronDown className='duration 100 inline-block w-10 rotate-0 transform duration-75' />
              )}
              <motion.div
                className='absolute top-[4.3rem]'
                variants={productDropdown}
                animate={isDropDownProduct ? 'enter' : 'exit'}
              >
                <div
                  className='flex w-max flex-col gap-3 rounded-xl  border-s bg-black/5 px-3 py-4 backdrop-blur-sm'
                  onMouseEnter={() => {
                    setDropDownProduct(true);
                  }}
                  onMouseLeave={() => {
                    setDropDownProduct(false);
                  }}
                >
                  {productlinks.map(({ href, label, key }) => (
                    <ul key={key}>
                      <Link href={href}>
                        <li className='w-full cursor-pointer rounded-lg px-3 py-2 hover:bg-slate-50/50'>
                          <h1 className='text-base font-semibold'>{label}</h1>
                        </li>
                      </Link>
                    </ul>
                  ))}
                </div>
              </motion.div>
            </li>
            {navlinks.map(({ href, label }) => (
              <li key={`${href}${label}`} className='w-max lg:px-7'>
                <Link href={href}>{label}</Link>
              </li>
            ))}
          </ul>
        </section>
        <section className='flex flex-col items-end justify-center lg:w-2/12'>
          <LoginButton />
        </section>
      </div>
      <div className='flex w-full flex-col items-center justify-center lg:hidden'>
        <MobileNav />
      </div>
    </nav>
  );
}
