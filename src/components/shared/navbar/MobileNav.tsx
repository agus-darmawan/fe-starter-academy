import { IconChevronDown } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import Hamburger from 'hamburger-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useState } from 'react';

import LoginButton from '@/components/buttons/LoginButton';
import { navlinks, productlinks } from '@/components/shared/navbar/NavLink';

export default function MobileNav() {
  const [isMobileOpen, setMobileOpen] = useState(false);
  const [isDropDownProduct, setDropDownProduct] = useState(false);
  const sidebar = {
    open: (height = 1000) => ({
      opacity: 1,
      height,
      transition: {
        type: 'easeInOut',
        duration: 0.2,
      },
    }),
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        type: 'easeInOut',
        duration: 0.2,
      },
    },
  };
  return (
    <div className='w-full '>
      <div className='absolute left-0 right-0 top-0 z-50 grid w-full grid-cols-3 items-center justify-center rounded-b-[18px] bg-white px-7 py-2'>
        <div className='col-start-1 col-end-2'>
          <Hamburger
            onToggle={() => {
              setMobileOpen(!isMobileOpen);
            }}
          />
        </div>
        <div className='col-start-2 col-end-3'>
          <Image
            alt='Logo Starter Academy'
            width={60}
            height={60}
            priority={true}
            src='/images/logo.svg'
            className='mx-auto h-16'
          />
        </div>
        <div className='col-start-3 col-end-4 ml-auto'>
          <LoginButton />
        </div>
      </div>
      <div>
        <motion.div
          initial={false}
          animate={isMobileOpen ? 'open' : 'closed'}
          className='flex cursor-pointer lg:hidden'
        >
          <motion.div
            className='bg-blue-starter absolute left-0 top-0 z-40 min-h-max w-full pt-28 backdrop-blur-sm'
            style={{ pointerEvents: isMobileOpen ? 'auto' : 'none' }}
            variants={sidebar}
          >
            <ul className=' text-gold-starter flex flex-col justify-start gap-6'>
              <li
                className='flex px-8'
                onClick={() => {
                  setDropDownProduct(!isDropDownProduct);
                }}
              >
                <h1 className='text-xl font-semibold'>Produk</h1>
                {isDropDownProduct ? (
                  <IconChevronDown className='inline-block w-10 rotate-180 ' />
                ) : (
                  <IconChevronDown className='inline-block w-10 transform duration-75' />
                )}
              </li>
              <ul
                className={`text-blue-backgraund flex flex-col gap-5 pl-6 text-base font-medium 
                  ${
                    isDropDownProduct
                      ? 'animate-fade-in-down block'
                      : 'animate-fade-out-up hidden'
                  }`}
              >
                {productlinks.map(({ href, label }) => (
                  <div key={href}>
                    <Link href={href}>
                      <div className='flex flex-row px-10 text-lg'>{label}</div>
                    </Link>
                  </div>
                ))}
              </ul>
              {navlinks.map(({ href, label, key }) => (
                <li key={key}>
                  <Link href={href}>
                    <h1 className='flex flex-row gap-2 px-8 text-xl font-semibold'>
                      {label}
                    </h1>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
