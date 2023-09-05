import Image from 'next/image';

import Button from '@/components/buttons/Button';
import Seo from '@/components/Seo';

export default function register() {
  return (
    <div>
      <Seo templateTitle='Register' />
      <div className='flex min-h-screen flex-row'>
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

        <div className=' mx-auto flex w-auto justify-center bg-white lg:w-1/2'>
          <div className=' flex h-full w-auto flex-col justify-center p-20'>
            <h1 className='text-blue-starter flex items-end justify-center text-4xl font-bold drop-shadow-2xl lg:justify-end lg:text-right lg:text-6xl '>
              Buat Akun
            </h1>

            <h1 className=' text-blue-starter flex items-center justify-center pl-0 text-center text-sm font-normal lg:justify-end lg:pl-5 lg:text-right lg:text-xl'>
              Masukan informasi berikut ini untuk memulai membuat akun Starter
              Academy!
            </h1>
            <div className='-mx-10 lg:-mx-0'>
              <label className=' block pt-5'>
                <span className="text-blue-starter block text-sm font-bold after:ml-0.5 after:text-red-500 after:content-['']">
                  Email
                </span>
                <input
                  type='email'
                  name='email'
                  className='focus:border-blue-starter block h-12 w-full rounded-md border border-slate-300 bg-white px-3 py-2 placeholder-slate-400 shadow-sm focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm'
                  placeholder='nama@company.com'
                />
              </label>
              <label className=' block pt-5'>
                <span className="text-blue-starter block text-sm font-bold after:ml-0.5 after:text-red-500 after:content-['']">
                  Nama
                </span>
                <input
                  type='text'
                  name='text'
                  className='focus:border-blue-starter block h-12 w-full rounded-md border border-slate-300 bg-white px-3 py-2 placeholder-slate-400 shadow-sm focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm'
                  placeholder='Nama'
                />
              </label>
              <label className=' block pt-5'>
                <span className="text-blue-starter block text-sm font-bold after:ml-0.5 after:text-red-500 after:content-['']">
                  Tanggal Lahir
                </span>
                <input
                  type='date'
                  name='date'
                  className='focus:border-blue-starter block h-12 w-full rounded-md border border-slate-300 bg-white px-3 py-2 placeholder-slate-400 shadow-sm focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm'
                  placeholder=''
                />
              </label>
              <label className=' block pt-5'>
                <span className="text-blue-starter block text-sm font-bold after:ml-0.5 after:text-red-500 after:content-['']">
                  No HP
                </span>
                <input
                  type='number'
                  name='number'
                  className='focus:border-blue-starter block h-12 w-full rounded-md border border-slate-300 bg-white px-3 py-2 placeholder-slate-400 shadow-sm focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm'
                  placeholder='No HP'
                />
              </label>
              <label className=' block pt-5'>
                <span className="text-blue-starter block text-sm font-bold after:ml-0.5 after:text-red-500 after:content-['']">
                  Status
                </span>
                <input
                  type=''
                  name='email'
                  className='focus:border-blue-starter block h-12 w-full rounded-md border border-slate-300 bg-white px-3 py-2 placeholder-slate-400 shadow-sm focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm'
                  placeholder='Status'
                />
              </label>
              <label className=' block pt-5'>
                <span className="text-blue-starter block text-sm font-bold after:ml-0.5 after:text-red-500 after:content-['']">
                  Instansi
                </span>
                <input
                  type='email'
                  name='email'
                  className='focus:border-blue-starter block h-12 w-full rounded-md border border-slate-300 bg-white px-3 py-2 placeholder-slate-400 shadow-sm focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm'
                  placeholder='Instansi'
                />
              </label>
              <label className=' block pt-5'>
                <span className="text-blue-starter block text-sm font-bold after:ml-0.5 after:text-red-500 after:content-['']">
                  Tahu Starter Academy darimana ?
                </span>
                <input
                  type='email'
                  name='email'
                  className='focus:border-blue-starter block h-12 w-full rounded-md border border-slate-300 bg-white px-3 py-2 placeholder-slate-400 shadow-sm focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm'
                  placeholder='Tahu Starter Academy darimana ?'
                />
              </label>
              <section className='flex justify-end pt-5'>
                <Button link='nextregister' text='Selanjutnya' />
              </section>
              <h1 className=' text-blue-starter -mb-16 mt-5 flex h-fit w-full justify-center text-xs lg:hidden'>
                © 2023 Starter Academy, All Rights Reserved
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
