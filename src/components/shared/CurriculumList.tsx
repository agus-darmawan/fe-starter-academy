import React, { useState } from 'react';
import Image from 'next/image';
import DetailsButton from '@/components/buttons/DetailsButton';
import VerifyButton from '@/components/buttons/VerifyButton';

function CurriculumList() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className='debug bg-blue-starter m-3 flex flex-col rounded-3xl'>
      <div className=' flex w-full flex-row justify-between p-3'>
        <div className=' flex w-full flex-row'>
          <div className=' flex w-full flex-col items-start justify-center'>
            <h1 className=' mr-3 flex items-center text-xl font-normal text-white'>
              Operation Research 1
            </h1>
          </div>
        </div>
        <div className=' flex items-center justify-center'>
          <DetailsButton onClick={toggleExpansion} isExpanded={isExpanded} />
        </div>
      </div>
    </div>
  );
}

export default CurriculumList;
