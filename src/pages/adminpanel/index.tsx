import React from 'react';
import { useRecoilValue } from 'recoil';

import CurriculumPanel from '@/components/modal/adminpanel/CurriculumPanel';
import HomePanel from '@/components/modal/adminpanel/HomePanel';
import TutorPanel from '@/components/modal/adminpanel/TutorPanel';
import VerificationPanel from '@/components/modal/adminpanel/VerficationPanel';
import Seo from '@/components/Seo';
import AdminDashboard from '@/components/shared/adminpanel/AdminDashboard';

import { selectedComponentState } from '@/atoms/selectedComponentAtom';

function Home() {
  const selectedComponent = useRecoilValue(selectedComponentState);

  return (
    <div className=' min-h-screen bg-gradient-to-r from-white from-0% to-[#D0D5EB] to-50%'>
      <Seo templateTitle='Admin Panel' />
      <div className='  flex min-h-screen flex-row'>
        <AdminDashboard />
        <div className=' flex h-auto w-5/6 flex-col items-center justify-center'>
          {/* Conditionally render the selected component */}
          {selectedComponent === 'Home' && <HomePanel />}
          {selectedComponent === 'Kurikulum' && <CurriculumPanel />}
          {selectedComponent === 'Verification' && <VerificationPanel />}
          {selectedComponent === 'Tutor' && <TutorPanel />}
        </div>
      </div>
    </div>
  );
}

export default Home;
