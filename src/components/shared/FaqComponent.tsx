import { IconChevronDown } from '@tabler/icons-react';
import React, { useState } from 'react';

interface FaqComponentProps {
  readonly answer: string;
  readonly question: string;
}

export default function FaqComponent({ answer, question }: FaqComponentProps) {
  const [active, setActive] = useState(true);
  return (
    <div className='min-h-16 mx-auto mt-4 w-[90vw] md:w-full'>
      <div
        className={`bg-blue-backgraund flex flex-row ${
          active ? 'rounded-2xl' : 'rounded-t-2xl'
        }  px-4 py-3`}
      >
        <div className=''>
          <h4 className='text-blue-starter ml-4 text-lg md:text-xl'>
            {question}
          </h4>
        </div>
        <div className='text-blue-backgraund ml-auto'>
          <IconChevronDown
            className={` bg-blue-starter rounded-full ${
              active ? 'rotate-0 duration-100' : 'rotate-180 duration-100 '
            }`}
            onClick={() => setActive(!active)}
          />
        </div>
      </div>
      <div
        className={` flex items-center rounded-b-2xl border-t-2 bg-white px-4 py-3 text-left ${
          active ? 'hidden' : 'block '
        }`}
      >
        <p className=' text-blue-starter pl-4 text-sm md:text-lg'>{answer}</p>
      </div>
    </div>
  );
}
