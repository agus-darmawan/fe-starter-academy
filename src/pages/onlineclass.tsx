import React from 'react';

import MainLayout from '@/components/layout/MainLayout';
import Seo from '@/components/Seo';
import CardStarter from '@/components/shared/dashboard/Card';
import Card2 from '@/components/shared/dashboard/Card2';
import SearchStarter from '@/components/shared/dashboard/Search';

function onlineclass() {
  return (
    <MainLayout>
      <Seo title='Online Class' />
      <div className='bg-gradient-starter relative min-h-screen w-full px-16 py-16'>
        <div className='top-20 mx-auto flex w-full flex-col pt-[50px]'>
          <SearchStarter />
          <div className=' my-8 w-1/2 text-[36px]'>
            <span className='font-poppins text-colorMain px-8 text-[1em] font-[700]'>
              Lanjutin lagi yuk !
            </span>
          </div>

          <div className='mx-auto flex w-full flex-row gap-[54px] text-[36px]'>
            <Card2 title='Otomasi Industri' percentage='45%' />
            <Card2 title='Otomasi Industri' percentage='45%' />
            <Card2 title='Otomasi Industri' percentage='45%' />
            <Card2 title='Otomasi Industri' percentage='45%' />
          </div>

          <div className=' my-8 w-1/2 text-[36px]'>
            <span className='font-poppins text-colorMain px-8 text-[1em] font-[700]'>
              Ayo mulai belajar hal baru!
            </span>
          </div>

          <div className='mx-auto grid w-[90%] grid-cols-3 content-center justify-items-center gap-6   p-8 text-[36px]'>
            {/* card  */}

            <CardStarter
              image='/images/operasional.png'
              title='Operasional'
              name='Operasional'
              desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit nunc, aliquam, aliquam.'
              price='Rp. 1.000.000'
            />

            <CardStarter
              image='/images/operasional.png'
              title='Operasional'
              name='Operasional'
              desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit nunc, aliquam, aliquam.'
              price='Rp. 1.000.000'
            />

            <CardStarter
              image='/images/operasional.png'
              title='Operasional'
              name='Operasional'
              desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit nunc, aliquam, aliquam.'
              price='Rp. 1.000.000'
            />

            {/* card 2 */}

            <CardStarter
              image='/images/operasional.png'
              title='Operasional'
              name='Operasional'
              desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit nunc, aliquam, aliquam.'
              price='Rp. 1.000.000'
            />

            <CardStarter
              image='/images/operasional.png'
              title='Operasional'
              name='Operasional'
              desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit nunc, aliquam, aliquam.'
              price='Rp. 1.000.000'
            />

            <CardStarter
              image='/images/operasional.png'
              title='Operasional'
              name='Operasional'
              desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit nunc, aliquam, aliquam.'
              price='Rp. 1.000.000'
            />
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default onlineclass;
