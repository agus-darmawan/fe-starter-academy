import Image from 'next/image';

import Button from '@/components/buttons/Button';
import PrevButton from '@/components/buttons/PrevButton';
import Seo from '@/components/Seo';

export default function nextRegister() {
  return (
    <div>
      <Seo templateTitle='Register' />

      <div className='flex min-h-screen flex-row'>
        <section className='hidden h-fit p-10 lg:block'>
          <PrevButton link='register' />
        </section>
        <div className=' mx-auto flex w-auto justify-center bg-white lg:w-1/2'>
          <div className=' flex h-full w-auto flex-col justify-center p-20'>
            <h1 className='text-blue-starter flex items-end justify-center text-4xl font-bold drop-shadow-2xl lg:justify-start lg:text-left lg:text-6xl '>
              Buat Akun
            </h1>

            <h1 className='text-blue-starter flex items-center justify-center pl-0 text-center text-sm font-normal lg:justify-start lg:pr-5 lg:text-left lg:text-xl'>
              Masukan informasi berikut ini untuk memulai membuat akun Starter
              Academy!
            </h1>
            <div className='-mx-10 lg:-mx-0'>
              <label className=' block pt-5'>
                <span className="text-blue-starter block text-sm font-bold after:ml-0.5 after:text-red-500 after:content-['']">
                  Username
                </span>
                <input
                  type='text'
                  name='username'
                  className='focus:border-blue-starter block h-12 w-full rounded-md border border-slate-300 bg-white px-3 py-2 placeholder-slate-400 shadow-sm focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm'
                  placeholder='Username'
                />
                <span className="block text-xs font-light text-slate-400 after:ml-0.5 after:text-red-500 after:content-['*']">
                  Minimal 5 karakter tanpa spasi
                </span>
              </label>
              <label className=' block pt-5'>
                <span className="text-blue-starter block text-sm font-bold after:ml-0.5 after:text-red-500 after:content-['']">
                  Password
                </span>
                <input
                  type='password'
                  name='password'
                  className='focus:border-blue-starter block h-12 w-full rounded-md border border-slate-300 bg-white px-3 py-2 placeholder-slate-400 shadow-sm focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm'
                  placeholder='Password'
                />
                <span className="block text-xs font-light text-slate-400 after:ml-0.5 after:text-red-500 after:content-['*']">
                  Minimal terdiri dari 8 karakter, kombinasi huruf dan angka
                </span>
              </label>
              <label className=' block pt-5'>
                <span className="text-blue-starter block text-sm font-bold after:ml-0.5 after:text-red-500 after:content-['']">
                  Konfirmasi Password
                </span>
                <input
                  type='password'
                  name='password'
                  className='focus:border-blue-starter block h-12 w-full rounded-md border border-slate-300 bg-white px-3 py-2 placeholder-slate-400 shadow-sm focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm'
                  placeholder='Konfirmasi Password'
                />
                <span className="block text-xs font-light text-slate-400 after:ml-0.5 after:text-red-500 after:content-['*']">
                  Password harus sama
                </span>
              </label>

              <section className='flex justify-start pt-5'>
                <Button link='/' text='Daftar' />
              </section>
              <h1 className=' text-blue-starter -mb-16 mt-5 flex h-fit w-full justify-center text-xs lg:hidden'>
                © 2023 Starter Academy, All Rights Reserved
              </h1>
            </div>
          </div>
        </div>
        <div className='bg-blue-starter mx-auto  hidden flex-col items-center justify-center p-10 lg:flex lg:w-1/2'>
          <Image
            src='/images/starterlogo-white.png'
            width={500}
            height={500}
            alt='Starter Logo'
          />

          <div className='pt-5 text-xl font-bold text-slate-300'>
            #SemuaBisaBelajar
          </div>
        </div>
      </div>
    </div>
  );
}
