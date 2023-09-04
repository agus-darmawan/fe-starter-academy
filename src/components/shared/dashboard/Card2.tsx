import Image from 'next/image';
import React from 'react';

interface Card2Props {
  title: string;
  percentage: string;
}

const Card2: React.FC<Card2Props> = ({ title, percentage }) => {
  return (
    <>
      <div className='bg-colorMain mx-auto flex h-[7.305em] w-[11.25em] flex-col overflow-hidden rounded-xl'>
        <div className='w-full '>
          <Image src='/images/online.png' alt='fef' width={405} height={180} />
        </div>
        <div className='flex flex-col items-start justify-start p-2'>
          <h1 className='font-poppins text-[0.7em] font-[700] text-[#FCCE47]'>
            {title}
          </h1>
          <div className='flex w-full items-center justify-center'>
            <div className='bg-colorMain2 mr-5 h-[0.2em] w-full rounded-lg'>
              <div
                className={`w-[${percentage}] h-full rounded-lg bg-[#FF0000]`}
              ></div>
            </div>
            <p className='font-poppins text-[0.4em] font-[700] text-white '>
              {percentage}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card2;
