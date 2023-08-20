import * as React from 'react';

import Navbar from '@/components/shared/navbar/Navbar';

export default function Layout({ children }: { children: React.ReactNode }) {
  // Put Header or Footer Here
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
