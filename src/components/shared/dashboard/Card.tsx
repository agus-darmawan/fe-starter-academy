import Image from 'next/image';
import React from 'react';

interface CardStarterProps {
  image: string;
  title: string;
  name: string;
  desc: string;
  price: string;
}

const CardStarter: React.FC<CardStarterProps> = ({
  image,
  title,
  name,
  desc,
  price,
}) => {
  return (
    <>
      <div className='bg-colorMain flex h-[13.02777em] w-[8.9722222em] flex-col rounded-[0.5277777em]'>
        <div className='w-full'>
          <Image
            src={image}
            className='object-contain'
            alt='operasional'
            width={323}
            height={186}
          />
        </div>
        <div className='flex w-full flex-col content-start px-4'>
          <h1 className='font-poppins text-[0.8333em] font-[700] text-[#FCCE47]'>
            {title}
          </h1>
          <p className='font-poppins text-[0.4444444em] font-[500] text-[#D0D5EB]'>
            {name}
          </p>
          <p className='font-poppins mt-4 text-[0.361111em] font-[500] text-[#9A9A9A]'>
            {desc}
            <span className='cursor-pointer underline'>details</span>
          </p>
          <p className='font-poppins my-2 text-[0.5555em] font-[700] text-[#FCCE47]'>
            {price}
          </p>
          <div className='flex w-full items-center justify-center'>
            <div className=' font-poppins bg-colorMain2 mt-4 flex h-[0.8333em] w-[7.472222em] items-center  justify-center rounded-[0.2em] font-[500] text-[#4A4A4A]'>
              <input type='button' value='Beli' className='text-[0.444em]' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardStarter;
