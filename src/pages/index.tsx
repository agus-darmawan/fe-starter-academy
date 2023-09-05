import { IconChevronDown } from '@tabler/icons-react';
import React from 'react';

import Button from '@/components/buttons/Button';
import MainLayout from '@/components/layout/MainLayout';
import Seo from '@/components/Seo';
import Team from '@/components/shared/Team';
export default function HomePage() {
  return (
    <MainLayout>
      <Seo templateTitle='Home' />
      <div className='flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-white to-[#D0D5EB]'>
        <h1 className='text-blue-starter text-3xl font-bold drop-shadow-2xl md:text-5xl lg:text-6xl '>
          #SemuaBisaBelajar
        </h1>
        <p className='text-blue-starter max-w-2xl px-10 pt-2  text-justify text-lg md:text-center md:text-xl'>
          Kami menawarkan pengalaman belajar online yang komprehensif, termasuk
          akses video kuliah, kelas online, dan jadwal dan silabus yang
          terstruktur dan terintegrasi untuk setiap mata kuliah yang ditawarkan
          oleh universitas di Indonesia.
        </p>
        <div className='ml-auto pr-10 pt-3 md:mx-auto md:pr-0 md:pt-10'>
          <Button text='Mulai Sekarang' link='#' />
        </div>
        <div className=' pt-28 md:block '>
          <div className='border-blue-starter animate-bounce rounded-full border-2'>
            <IconChevronDown className='mx-auto h-12 w-12  p-2 text-8xl font-bold' />
          </div>
        </div>
      </div>
      <div className=' min-h-screen bg-[#D0D5EB]'></div>
      <div className='bg-blue-starter min-h-screen'></div>
      <div className='bg-blue-backgraund flex min-h-screen flex-col items-center justify-center'>
        <h2 className='text-blue-starter pb-2 text-xl md:text-2xl lg:text-3xl '>
          #SemuaBisaBelajar
        </h2>
        <h1 className='text-blue-starter text-3xl font-bold drop-shadow-2xl md:text-5xl lg:text-6xl '>
          Starter Academy
        </h1>
        <p className='text-blue-starter max-w-3xl px-10 pt-2  text-justify text-lg md:text-center md:text-xl lg:text-center'>
          Starter Academy merupakan platform pembelajaran yang relevan dan
          bekualitas tinggi serta mudah di akses oleh siapapun. Starter Academy
          hadir untuk mencipatakan pendidikan yang mendukung potensi setiap
          individu agar memiliki pendidikan yang berkualitas.
        </p>
        <div className=' pt-28 md:block '>
          <div className='border-blue-starter animate-bounce rounded-full border-2'>
            <IconChevronDown className='mx-auto h-12 w-12  p-2 text-8xl font-bold' />
          </div>
        </div>
      </div>
      <div className='from-blue-backgraund bg-gradient-to-b to-white pb-20 lg:pb-32 '>
        <div className='container mx-auto flex grid-cols-2 flex-col gap-12 md:grid md:gap-16 lg:gap-28'>
          <div className='cold-end-2 col-start-1'>
            <h1 className='text-blue-starter text-center text-3xl md:text-4xl lg:text-5xl'>
              Visi
            </h1>
            <p className='text-blue-starter max-w-3xl px-10 pt-2  text-center text-lg md:text-center md:text-xl'>
              Menyediakan materi pembelajaran yang relevan dan berkualitas
              tinggi, serta mendukung pengembangan diri secara holistik melalui
              pendekatan yang inklusif dan berorientasi pada kebutuhan
              mahasiswa.
            </p>
          </div>
          <div className='cold-end-3 col-start-2 '>
            <h1 className='text-blue-starter text-center text-3xl md:text-4xl lg:text-5xl'>
              Misi
            </h1>
            <p className='text-blue-starter max-w-3xl px-10 pt-2  text-center text-lg md:text-center md:text-xl'>
              Untuk menciptakan dunia di mana pendidikan tidak terikat oleh
              batasan-batasan, dan setiap individu memiliki kesempatan untuk
              menggali potensi penuh mereka melalui pengetahuan akademik.
            </p>
          </div>
        </div>
      </div>
      <div className='bg-blue-starter min-h-screen'>
        <div className='container mx-auto flex-col items-center justify-center'>
          <h1 className='text-blue-backgraund pb-4 pt-16 text-center text-4xl font-bold md:pb-8 md:pt-28 md:text-5xl lg:text-6xl'>
            Meet Our Team
          </h1>
          <Team />
          <h1 className='text-blue-backgraund py-10 text-center  text-2xl drop-shadow-2xl md:py-32 md:text-3xl lg:text-4xl'>
            #SemuaBisaBelajar
          </h1>
        </div>
      </div>
    </MainLayout>
  );
}
