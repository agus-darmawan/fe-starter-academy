import { useState } from 'react';
import Select from '@/components/shared/Select';
import { Option } from '@/components/shared/Option';
import VerificationSection from '@/components/shared/VerificationSection';

const options: Option[] = [
  { label: 'Unverified', value: 'unverified' },
  { label: 'Verified', value: 'verified' },
];

function VerificationPanel() {
  const [selectedItem, setSelectedItem] = useState(options[0]);

  return (
    <div className='border-blue-starter flex h-[50rem] w-[50rem] flex-col rounded-xl border-2 bg-white p-10 shadow-xl'>
      <div className='flex h-auto w-auto flex-col items-center justify-center text-2xl font-medium'>
        Payment Verification Request
      </div>
      <div className='mx-auto mt-2 flex w-52'>
        <Select
          placeholder='Select an option'
          selected={selectedItem}
          options={options}
          onChange={(selection: Option) => setSelectedItem(selection)}
        />
      </div>
      <div className='bg-blue-backgraund mt-10 overflow-auto rounded-xl'>
        <div className='flex-grow'>
          <VerificationSection />
          <VerificationSection />
          <VerificationSection />
          <VerificationSection />
          <VerificationSection />
          <VerificationSection />
          <VerificationSection />
          <VerificationSection />
          <VerificationSection />
          <VerificationSection />
        </div>
      </div>
    </div>
  );
}

export default VerificationPanel;
