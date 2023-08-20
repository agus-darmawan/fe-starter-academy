import React from 'react';

import MainLayout from '@/components/layout/MainLayout';
import Seo from '@/components/Seo';

export default function index() {
  return (
    <MainLayout>
      <Seo templateTitle='Home' />
      <div className='bg-blue-backgraund min-h-screen'>index</div>
      <div className='bg-blue-backgraund min-h-screen'>indexw</div>
    </MainLayout>
  );
}
