import { IconChevronDown } from '@tabler/icons-react';
import React from 'react';

import Button from '@/components/buttons/Button';
import MainLayout from '@/components/layout/MainLayout';
import Seo from '@/components/Seo';

export default function HomePage() {
  return (
    <MainLayout>
      <Seo templateTitle='Home' />
      <div className='flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-white to-[D0D5EB]'>
        <h1 className='text-blue-starter text-3xl font-bold drop-shadow-2xl md:text-5xl lg:text-6xl '>
          #SemuaBisaBelajar
        </h1>
        <p className='text-blue-starter max-w-2xl px-10 pt-2  text-justify text-lg md:text-center md:text-xl'>
          Kami menawarkan pengalaman belajar online yang komprehensif, termasuk
          akses video kuliah, kelas online, dan jadwal dan silabus yang
          terstruktur dan terintegrasi untuk setiap mata kuliah yang ditawarkan
          oleh universitas di Indonesia.
        </p>
        <div className='ml-auto pr-10 pt-3 md:mx-auto md:pr-0 md:pt-10'>
          <Button text='Mulai Sekarang' link='#' />
        </div>
        <div className=' pt-28 md:block '>
          <div className='border-blue-starter animate-bounce rounded-full border-2'>
            <IconChevronDown className='mx-auto h-12 w-12  p-2 text-8xl font-bold' />
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
