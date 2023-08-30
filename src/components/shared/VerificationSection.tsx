// VerificationSection.js

import React, { useState } from 'react';
import Image from 'next/image';
import DetailsButton from '@/components/buttons/DetailsButton';
import VerifyButton from '@/components/buttons/VerifyButton';

function VerificationSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className='bg-blue-starter m-3 flex flex-col rounded-3xl'>
      <div className=' flex w-full flex-row justify-between p-3'>
        <div className=' flex w-full flex-row'>
          <Image
            src='/images/profile-testing.png'
            alt='Picture of the author'
            width='60'
            height='60'
            className=''
          />
          <div className=' flex w-full flex-col items-start justify-center'>
            <h1 className='mx-3 flex items-center text-xl font-normal text-white'>
              Operasional Riset
            </h1>
            <h1 className=' mx-3 flex w-full items-center text-sm font-normal text-white'>
              Email :
              <span className=' ml-2 text-xs text-red-500'>
                starteracademy23@gmail.com
              </span>
            </h1>
          </div>
        </div>
        <div className=' flex items-center justify-center pl-10'>
          <DetailsButton onClick={toggleExpansion} isExpanded={isExpanded} />
        </div>
      </div>

      {isExpanded && (
        <div className=' p-5 text-white'>
          <h1>
            Payment Method : <span className='text-red-500'>BNI</span>
          </h1>
          <h1>
            Date : <span className='text-red-500'>2022-22-2</span>
          </h1>
          <div className='flex items-end justify-end pl-10'>
            <VerifyButton />
          </div>
        </div>
      )}
    </div>
  );
}

export default VerificationSection;
