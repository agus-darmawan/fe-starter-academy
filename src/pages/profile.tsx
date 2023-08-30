import Seo from '@/components/Seo';
import MainLayout from '@/components/layout/MainLayout';
import Button from '@/components/buttons/Button';
import PrevButton from '@/components/buttons/PrevButton';
import Image from 'next/image';

export default function profile() {
  return (
    <MainLayout>
      <div>
        <Seo templateTitle='Profile' />
        <div className='flex min-h-screen flex-col justify-center bg-gradient-to-b from-[#D0D5EB] to-white pt-24 lg:pt-36'>
          <div className=' flex flex-col justify-center lg:flex-row '>
            {/* starting point component */}
            <section className='mr-28 hidden pl-20 lg:block'>
              <PrevButton link='/' />
            </section>

            <div className='hidden items-center justify-center lg:mx-28 lg:flex'>
              <Image
                src='/images/profile-testing.png'
                alt='Picture of the author'
                width='395'
                height='395'
              ></Image>
            </div>

            <div className=' flex h-full w-auto flex-col justify-center p-20 lg:w-[50rem]'>
              <h1 className=' text-blue-starter -mt-10 mb-5 flex items-end justify-center text-4xl font-bold drop-shadow-2xl md:text-6xl lg:-mt-0 lg:mb-0 lg:mb-5 lg:justify-end lg:text-right lg:text-6xl '>
                My Profile
              </h1>
              <div className='flex items-center justify-center lg:mx-28 lg:hidden'>
                <Image
                  src='/images/profile-testing.png'
                  alt='Picture of the author'
                  width='395'
                  height='395'
                ></Image>
              </div>
              <div className='-mx-10 lg:-mx-0'>
                <label className=' block pt-5'>
                  <span className="text-blue-starter block text-sm font-bold after:ml-0.5 after:text-red-500 after:content-['']">
                    Email
                  </span>
                  <input
                    type='email'
                    name='email'
                    className='focus:border-blue-starter block h-12 w-full rounded-md border border-slate-300 bg-transparent px-3 py-2 placeholder-slate-400 shadow-sm focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm'
                    placeholder='<email-user>'
                  />
                </label>
                <label className=' block pt-5'>
                  <span className="text-blue-starter block text-sm font-bold after:ml-0.5 after:text-red-500 after:content-['']">
                    Username
                  </span>
                  <input
                    type='text'
                    name='name'
                    className='focus:border-blue-starter block h-12 w-full rounded-md border border-slate-300 bg-transparent px-3 py-2 placeholder-slate-400 shadow-sm focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm'
                    placeholder='Password'
                  />
                </label>
                <label className=' block pt-5'>
                  <span className="text-blue-starter block text-sm font-bold after:ml-0.5 after:text-red-500 after:content-['']">
                    Nama
                  </span>
                  <input
                    type='password'
                    name='password'
                    className='focus:border-blue-starter block h-12 w-full rounded-md border border-slate-300 bg-transparent px-3 py-2 placeholder-slate-400 shadow-sm focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm'
                    placeholder='Konfirmasi Password'
                  />
                </label>
                <label className='block pt-5'>
                  <div className='flex gap-5'>
                    <div className='block'>
                      <span className="text-blue-starter block text-sm font-bold after:ml-0.5 after:text-red-500 after:content-['']">
                        Tanggal Lahir
                      </span>
                      <input
                        type='date'
                        name='password'
                        className='focus:border-blue-starter block h-12 w-36 rounded-md border border-slate-300 bg-transparent px-3 py-2 placeholder-slate-400 shadow-sm focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm'
                        placeholder='Konfirmasi Password'
                      />
                    </div>
                    <div className='block w-full'>
                      <span className="text-blue-starter block text-sm font-bold after:ml-0.5 after:text-red-500 after:content-['']">
                        No HP
                      </span>
                      <input
                        type='number'
                        name='number'
                        className='focus:border-blue-starter block h-12 w-full rounded-md border border-slate-300 bg-transparent px-3 py-2 placeholder-slate-400 shadow-sm focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm'
                        placeholder='No HP'
                      />
                    </div>
                  </div>
                </label>
                <label className=' block pt-5'>
                  <span className="text-blue-starter block text-sm font-bold after:ml-0.5 after:text-red-500 after:content-['']">
                    Status
                  </span>
                  <input
                    type='password'
                    name='password'
                    className='focus:border-blue-starter block h-12 w-full rounded-md border border-slate-300 bg-transparent px-3 py-2 placeholder-slate-400 shadow-sm focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm'
                    placeholder='Konfirmasi Password'
                  />
                </label>
                <label className=' block pt-5'>
                  <span className="text-blue-starter block text-sm font-bold after:ml-0.5 after:text-red-500 after:content-['']">
                    Instansi
                  </span>
                  <input
                    type='password'
                    name='password'
                    className='focus:border-blue-starter block h-12 w-full rounded-md border border-slate-300 bg-transparent px-3 py-2 placeholder-slate-400 shadow-sm focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm'
                    placeholder='Instansi'
                  />
                </label>

                <section className='flex justify-end pt-5'>
                  <Button link='/' text='Edit Profile' />
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
