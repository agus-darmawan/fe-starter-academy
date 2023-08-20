import React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function index() {
  return (
    <Layout>
      <Seo templateTitle='Home' />
      <div className='bg-blue-backgraund min-h-screen'>index</div>
      <div className='bg-blue-backgraund min-h-screen'>indexw</div>
    </Layout>
  );
}
