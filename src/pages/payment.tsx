import React from 'react';

import MainLayout from '@/components/layout/MainLayout';
import Seo from '@/components/Seo';

export default function payment() {
  return (
    <>
      <MainLayout>
        <Seo templateTitle='Payment' />
        <div className='bg-blue-starter flex min-h-screen pt-[103px]'>
          <div className='flex basis-2/3 flex-col pl-[73px] pt-[43px]'>
            <h1 className='font-poppins mb-[34px] text-4xl font-bold text-white'>
              Pilih Metode Pembayaran
            </h1>
            <div className='debug flex items-center gap-6'>
              <input
                id='default-radio-1'
                type='radio'
                value=''
                name='default-radio'
                className='w-22 h-22 border-2 border-white bg-transparent'
              />
              <label
                htmlFor='default-radio-1'
                className='font-poppins text-xl font-bold text-white'
              >
                Transfer Bank
              </label>
              <div>BNI</div>
            </div>
          </div>
          <div className='flex flex-col justify-center border-2 border-white pt-[106px]'></div>
        </div>
      </MainLayout>
    </>
  );
}
