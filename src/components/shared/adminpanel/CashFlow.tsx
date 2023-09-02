import React from 'react';
import { useState } from 'react';

import { Option } from '@/components/shared/Option';
import Select from '@/components/shared/Select';

function CashFlow() {
  const options: Option[] = [
    { label: 'Hari Ini', value: 'unverified' },
    { label: '1 Minggu', value: 'week' },
    { label: '1 Bulan', value: 'months' },
  ];
  const [selectedItem, setSelectedItem] = useState(options[0]);
  return (
    <div className='flex flex-col space-y-10 rounded-3xl bg-gradient-to-t from-white to-[#A1B2F3] p-10 shadow-lg transition hover:shadow-xl'>
      <div className=' flex flex-row items-center gap-20'>
        <h1 className='text-3xl font-semibold'>Cash Flow</h1>

        <div className='mx-auto mt-2 flex w-52'>
          <Select
            placeholder='Select an option'
            selected={selectedItem}
            options={options}
            onChange={(selection: Option) => setSelectedItem(selection)}
          />
        </div>
      </div>
      <div className=' space-y-4'>
        <div className=''>
          <h1 className='text-2xl'>Total Transaksi :</h1>
          <h1 className='text-xl'>26 Transaksi</h1>
        </div>
        <div className=''>
          <h1 className='text-2xl'>Total Pemasukan</h1>
          <h1 className='text-xl'>Rp.1.500.000</h1>
        </div>
      </div>
    </div>
  );
}

export default CashFlow;
