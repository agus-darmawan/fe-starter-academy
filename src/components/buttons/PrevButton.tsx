import Link from 'next/link';
import React from 'react';

interface ButtonProps {
  readonly link?: string;
}

const PrevButton = ({ link }: ButtonProps) => {
  return (
    <Link href={`/${link}`}>
      <div className='bg-blue-starter hover:text-blue-starter flex h-10 items-center justify-center rounded-lg border border-gray-300 px-4 text-base font-medium text-white transition hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'>
        <svg
          className='mr-2 h-3.5 w-3.5'
          aria-hidden='true'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 14 10'
        >
          <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M13 5H1m0 0 4 4M1 5l4-4'
          />
        </svg>
      </div>
    </Link>
  );
};

export default PrevButton;
