import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Footer() {
  return (
    <footer className='bg-blue-starter'>
      <div className='2 bg-blue-backgraund flex flex-col gap-10 rounded-t-[20px] py-12 lg:grid lg:grid-cols-2 lg:gap-12 lg:px-12'>
        <div className=' col-start-1 col-end-2 '>
          <div className='flex flex-col gap-10 md:grid md:grid-cols-3 md:gap-7'>
            <div className='2 col-start-1 col-end-3 '>
              <div className='flex flex-col text-center md:text-left'>
                <Image
                  alt='Logo Starter Academy'
                  width={164}
                  height={67}
                  priority={true}
                  src='/images/logo-with-text.svg'
                  className='h-16'
                />
                <p className='px-4 text-justify text-lg font-light text-[#7E7E7E]'>
                  Kami menawarkan pengalaman belajar online yang komprehensif,
                  termasuk akses video kuliah, kelas online, dan jadwal dan
                  silabus yang terstruktur dan terintegrasi untuk setiap mata
                  kuliah yang ditawarkan oleh universitas di Indonesia.
                </p>
              </div>
            </div>
            <div className='2 col-start-3 col-end-4 '>
              <div className='flex flex-col text-center md:text-left'>
                <h2 className='text-blue-starter mb-1 md:text-lg md:font-bold lg:mb-2'>
                  MENU
                </h2>
                <ul className='text-lg font-light text-[#7E7E7E]'>
                  <li>
                    <Link href='/product/class' className='hover:underline'>
                      Kelas Online
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/product/questionbank'
                      className='hover:underline'
                    >
                      Bank Soal
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/product/findmentor'
                      className='hover:underline'
                    >
                      Cari Mentor
                    </Link>
                  </li>
                  <li>
                    <Link href='/product/blog' className='hover:underline'>
                      Blog
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className=' col-start-2 col-end-3 '>
          <div className='flex flex-col gap-10 md:grid md:grid-cols-3'>
            <div className='2 col-start-1 col-end-2 '>
              <div className='flex flex-col text-center md:px-5 md:text-left'>
                <h2 className='text-blue-starter mb-1 md:text-lg md:font-bold lg:mb-2'>
                  ABOUT
                </h2>
                <ul className='text-lg font-light text-[#7E7E7E]'>
                  <li>
                    <Link href='/#' className='hover:underline'>
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href='/#' className='hover:underline'>
                      Meet Our Team
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className='2 col-start-2 col-end-3 '>
              <div className='flex flex-col text-center md:text-left'>
                <h2 className='text-blue-starter mb-1 md:text-lg md:font-bold lg:mb-2'>
                  PLATFORM
                </h2>
                <ul className='text-lg font-light text-[#7E7E7E]'>
                  <li>
                    <Link href='/faq' className='hover:underline'>
                      FAQ
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className='2 col-start-3 col-end-4 '>
              <div className='flex flex-col text-center md:text-left'>
                <h2 className='text-blue-starter mb-1 md:text-lg md:font-bold lg:mb-2'>
                  CONTACT
                </h2>
                <ul className='text-lg font-light text-[#7E7E7E]'>
                  <li>
                    <Link href='/#' className='hover:underline'>
                      Email
                    </Link>
                  </li>
                  <li>
                    <Link href='/#' className='hover:underline'>
                      Instagram
                    </Link>
                  </li>
                  <li>
                    <Link href='/#' className='hover:underline'>
                      Whatsapp
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-blue-starter flex h-20 flex-col items-center justify-center'>
        <h1 className='text-blue-backgraund mx-auto text-sm md:text-lg lg:text-xl'>
          © 2023 Starter Academy, All Rights Reserved
        </h1>
      </div>
    </footer>
  );
}
