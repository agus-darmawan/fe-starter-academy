import Image from 'next/image';
import React from 'react';

const CardTutor = () => {
  return (
    <>
      <div className='flex flex-col  px-14'>
        <div className='flex flex-col items-center justify-center'>
          <div className='h-[7.63888em] w-[6.777em] overflow-hidden'>
            <Image
              src='/images/tutor.png'
              alt='tutor'
              className='w-full object-contain'
              width={244}
              height={275}
            />
          </div>
          <h1 className='font-poppins text-colorMain text-[0.83333em] font-[700]'>
            Bagus Indrasoecipto
          </h1>
          <p className='font-poppins text-colorMain text-[0.6666em] font-[500]'>
            Tutor OR 1
          </p>
        </div>

        <div className='mt-5'>
          <p className='font-poppins text-colorMain text-[0.5555em] font-[700]'>
            Pengalaman
          </p>
          <ul className='font-poppins  text-colorMain   list-disc px-10 text-[0.5555em] font-[500]'>
            <li>Menjadi pemateri pada Webinar A</li>
            <li>Japan Student Ex 2019</li>
            <li>CEO Starter Academy</li>
            <li>IISMA New Zealand</li>
          </ul>
        </div>

        <div className='mt-5'>
          <p className='font-poppins text-colorMain text-[0.5555em] font-[700]'>
            Pencapaian
          </p>
          <ul className='font-poppins  text-colorMain   list-disc px-10 text-[0.5555em] font-[500]'>
            <li>Menjadi pemateri pada Webinar A</li>
            <li>Japan Student Ex 2019</li>
            <li>CEO Starter Academy</li>
            <li>IISMA New Zealand</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default CardTutor;
