import Seo from '@/components/Seo';
import Image from 'next/image';
import { Option } from '@/components/shared/Option';
import { useState } from 'react';
import VerificationPanel from '@/components/layout/adminpanel/VerficationPanel';
import Button from '@/components/buttons/Button';
import Link from 'next/link';
import { adminLinks } from '@/components/shared/adminpanel/AdminLink';
import CurriculumPanel from '@/components/layout/adminpanel/CurriculumPanel';
import CurriculumDetails from '@/components/layout/adminpanel/CurriculumDetails';

const options: Option[] = [
  { label: 'Unverified', value: 'unverified' },
  { label: 'Verified', value: 'verified' },
];

export default function adminpanel() {
  const [selectedItem, setSelectedItem] = useState(options[0]);
  return (
    <div className='min-h-screen bg-gradient-to-r from-white from-0% to-[#D0D5EB] to-50%'>
      <Seo templateTitle='Admin Panel' />
      <div className=' debug2 flex min-h-screen flex-row'>
        <div className=' h-auto w-1/6'>
          <div className='debug flex h-full flex-col items-center justify-start space-y-10'>
            <div className='mt-20'>
              <Image
                src='/images/starterlogo-black.png'
                width={100}
                height={100}
                alt='Starter Logo'
              />
            </div>
            {adminLinks.map(({ href, label }) => (
              <li
                key={`${href}${label}`}
                className=' flex w-max flex-col text-xl font-medium text-black lg:px-7'
              >
                <Link href={href}>{label}</Link>
              </li>
            ))}
            <section className='flex justify-end pt-5'>
              <Button link='/' text='Log Out' />
            </section>
          </div>
        </div>
        <div className='debug3 flex h-auto w-5/6 flex-col items-center justify-center'>
          {/* <VerificationPanel /> */}
          <CurriculumPanel />
        </div>
      </div>
    </div>
  );
}
