import { Dropdown } from 'flowbite-react';
import Image from 'next/image';
import React from 'react';

const SearchStarter = () => {
  return (
    <>
      <div className='flex w-1/2 text-[36px] '>
        <div className='bg-colorMain flex basis-2/3 flex-row items-center justify-between rounded-xl px-8 py-1'>
          <div className='flex h-[0.90625em] w-[12.1875em]  flex-row items-center justify-between rounded-[0.53125em] bg-[#D0D5EB]'>
            <div className='flex items-center justify-center'>
              <Image
                src='/images/Search.png'
                className='mx-2 h-[0.508375em] w-[0.651375em] cursor-pointer'
                alt='search'
                width={21}
                height={16}
              />
              <input
                type='text'
                placeholder='Search'
                className='font-poppins bg-[#D0D5EB] text-[0.46875em] outline-none'
              />
            </div>
            <Image
              src='/images/Close.png'
              className='mx-2 h-[0.508375em] w-[0.651375em] cursor-pointer'
              alt='search'
              width={21}
              height={16}
            />
          </div>

          <div className='font-poppins text-colorMain2 flex flex-col items-center justify-between text-[0.6em] font-[700] '>
            <Dropdown
              label='Tipe'
              className='font-poppins w-[13.8541em] rounded-lg px-2 py-0.5 text-[0.83333em] font-[500] text-black'
            >
              <div className='hover:bg-colorMain2 cursor-pointer rounded-lg  px-2 py-0.5'>
                Dashboard
              </div>
              <div className='hover:bg-colorMain2 cursor-pointer rounded-lg px-2 py-0.5'>
                Settings
              </div>
              <div className='hover:bg-colorMain2 cursor-pointer rounded-lg px-2 py-0.5'>
                Earnings
              </div>
              <Dropdown.Divider className='border-[1px] border-slate-600 bg-black' />
              <div className='hover:bg-colorMain2 cursor-pointer rounded-lg px-2 py-0.5'>
                Separated link
              </div>
            </Dropdown>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchStarter;
