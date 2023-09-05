import React from 'react';

import TeamCard from '@/components/shared/TeamCard';

export default function Team() {
  return (
    <div>
      <div className='flex flex-col gap-10 md:grid md:grid-cols-6 lg:grid-cols-5 lg:flex-row'>
        <div className='col-start-1 md:col-end-3 lg:col-end-2'>
          <TeamCard
            image='/images/home/team/jacob.png'
            name='Jacob'
            role='CEO'
            instagram='https://www.instagram.com/jacobmnkk/'
            linkedin='https://www.linkedin.com/in/jacobmanik/'
          />
        </div>
        <div className='md:col-start-3 md:col-end-5 lg:col-start-2 lg:col-end-3'>
          <TeamCard
            image='/images/home/team/dheta.png'
            name='Dheta'
            role='CMO'
            instagram='https://www.instagram.com/valenciadheta/'
            linkedin='https://www.linkedin.com/in/dhetavalenciasantana/'
          />
        </div>
        <div className='md:col-start-5 md:col-end-7 lg:col-start-3 lg:col-end-4'>
          <TeamCard
            image='/images/home/team/kenny.png'
            name='Kenny'
            role='CPO'
            instagram='https://www.instagram.com/ke_n_ny/'
            linkedin='https://www.linkedin.com/in/kenny-susanto/'
          />
        </div>
        <div className='md:col-start-2 md:col-end-4 lg:col-start-4 lg:col-end-5'>
          <TeamCard
            image='/images/home/team/dika.png'
            name='Dika'
            role='COO'
            instagram='https://www.instagram.com/dikadamanata/'
            linkedin='https://www.linkedin.com/in/i-made-dika-damanata-72230421a/'
          />
        </div>
        <div className='md:col-start-4 md:col-end-6  lg:col-start-5 lg:col-end-6'>
          <TeamCard
            image='/images/home/team/gung.png'
            name='Gung Adhi'
            role='CTO'
            instagram='https://www.instagram.com/gungadhisanjaya/'
            linkedin='https://www.linkedin.com/in/gungadhisanjaya/'
          />
        </div>
      </div>
    </div>
  );
}
