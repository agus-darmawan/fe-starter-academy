import { useState } from 'react';
import Select from '@/components/shared/Select';
import { Option } from '@/components/shared/Option';
import VerificationSection from '@/components/shared/VerificationSection';
import CurriculumList from '@/components/shared/CurriculumList';
import CurriculumDetails from '@/components/layout/adminpanel/CurriculumDetails';

function CurriculumPanel() {
  const [showOtherComponent, setShowOtherComponent] = useState(false);

  return (
    <div className='debug flex flex-row space-x-9'>
      <div className='border-blue-starter flex h-[50rem] w-[30rem] flex-col rounded-xl border-2 bg-white p-10 shadow-xl'>
        <div className='flex h-auto w-auto flex-col items-center justify-center text-2xl font-medium'>
          List Kurikulum
        </div>

        <div className='bg-blue-backgraund mt-10 overflow-auto rounded-xl'>
          <div className='flex-grow'>
            <CurriculumList />
          </div>
        </div>
      </div>
      <CurriculumDetails />
    </div>
  );
}

export default CurriculumPanel;
