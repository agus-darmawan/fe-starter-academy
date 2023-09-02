import React from 'react';

import CashFlow from '@/components/shared/adminpanel/CashFlow';

function HomePanel() {
  return (
    <div className=' flex h-full w-full flex-col'>
      <div className='text-blue-starter flex items-center justify-center pt-28 text-3xl font-semibold'>
        Wassup, Gung!
      </div>
      <div className=' flex h-full w-full items-center justify-center'>
        <CashFlow />
      </div>
    </div>
  );
}

export default HomePanel;
