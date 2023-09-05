import Image from 'next/image';
import React, { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil'; // Import useRecoilState

import Button from '@/components/buttons/Button';

import { adminLinksState } from '@/atoms/adminLinksAtom';
import { selectedComponentState } from '@/atoms/selectedComponentAtom';

function AdminDashboard() {
  const adminLinks = useRecoilValue(adminLinksState);
  const [selectedComponent, setSelectedComponent] = useRecoilState(
    selectedComponentState
  );

  // Handle link clicks
  const handleLinkClick = (label) => {
    setSelectedComponent(label); // Set the selected component based on the label
  };

  useEffect(() => {
    // Default to the first link if no component is selected
    if (!adminLinks.find((link) => link.label === selectedComponent)) {
      setSelectedComponent(adminLinks[0].label);
    }
  }, [adminLinks, selectedComponent, setSelectedComponent]);

  return (
    <div className='h-auto w-1/6'>
      <div className=' flex h-full flex-col items-center justify-start space-y-10'>
        <div className='mt-20'>
          <Image
            src='/images/starterlogo-black.png'
            width={100}
            height={100}
            alt='Starter Logo'
          />
        </div>

        {adminLinks.map(({ label }) => (
          <li
            key={label}
            className={`flex w-max cursor-pointer flex-col text-xl font-medium ${
              selectedComponent === label ? 'text-black' : 'text-gray-400'
            } `}
          >
            <a onClick={() => handleLinkClick(label)}>{label}</a>
          </li>
        ))}

        <section className='flex justify-end pt-5'>
          <Button link='/' text='Log Out' />
        </section>
      </div>
    </div>
  );
}

export default AdminDashboard;
