import React from 'react';

import MainLayout from '@/components/layout/MainLayout';
import Seo from '@/components/Seo';
import CardTutor from '@/components/shared/tutor/CardTutor';

export default function tutor() {
  return (
    <MainLayout>
      <Seo templateTitle='Tutor' />
      <div className='bg-gradient-starter relative min-h-screen w-full px-16 py-16'>
        <div className='top-20 mx-auto flex w-full flex-col'>
          <div className='my-8 w-full pt-12 text-[36px]'>
            <span className='font-poppins text-colorMain px-8 text-[1em] font-[700]'>
              Yuk belajar bareng tutor-tutor keren!
            </span>
          </div>

          <div className='grid w-full grid-cols-3 gap-4 text-[36px] '>
            <CardTutor />
            <CardTutor />
            <CardTutor />
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
