import { useState } from 'react';

import Button from '@/components/buttons/Button';
import DetailsButton from '@/components/buttons/DetailsButton';
import CurriculumDetails from '@/components/modal/adminpanel/details/CurriculumDetails';

function CurriculumPanel() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div className=' flex flex-row space-x-9'>
      <div className=' border-blue-starter flex h-[50rem] w-[30rem] flex-col rounded-xl border-2 bg-white p-10 shadow-xl'>
        <div className='flex h-auto w-auto flex-col items-center justify-center text-2xl font-medium'>
          List Kurikulum
        </div>
        <div className=' border-blue-starter mt-10 h-full overflow-auto rounded-xl border-2'>
          <div className='flex-grow'>
            <div className=' bg-blue-starter m-3 flex flex-col rounded-3xl'>
              <div className=' flex w-full flex-row justify-between p-3'>
                <div className=' flex w-full flex-row'>
                  <div className=' flex w-full flex-col items-start justify-center'>
                    <h1 className=' mr-3 flex items-center text-xl font-normal text-white'>
                      Operation Research 1
                    </h1>
                  </div>
                </div>
                <div className=' flex items-center justify-center'>
                  <DetailsButton
                    onClick={toggleExpansion}
                    isExpanded={isExpanded}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <h1 className='flex w-full  items-end justify-center pt-2'>
          <Button link='/' text='Add' />
        </h1>
      </div>
      <div className=' border-blue-starter flex h-[50rem] w-[60rem] flex-col rounded-xl border-2 bg-white p-10 shadow-xl'>
        {isExpanded && <CurriculumDetails />}
      </div>
    </div>
  );
}

export default CurriculumPanel;
