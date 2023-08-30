import { useState } from 'react';
import Select from '@/components/shared/Select';
import { Option } from '@/components/shared/Option';
import VerificationSection from '@/components/shared/VerificationSection';
import CurriculumList from '@/components/shared/CurriculumList';
import InputField from '@/components/shared/InputField';
import Button from '@/components/buttons/Button';
import SaveButton from '@/components/buttons/SaveButton';

function CurriculumDetails() {
  return (
    <div className='debug2 border-blue-starter flex h-[50rem] w-[60rem] flex-col rounded-xl border-2 bg-white p-10 shadow-xl'>
      <div className='debug3'>
        <div className='debug2 text-blue-starter flex h-auto w-auto flex-col items-start justify-center text-3xl font-semibold'>
          I Gusti Agung Ngurah Adhi Sanjaya
        </div>
        <InputField type='text' text='Nama Tutor' />
        <InputField type='email' text='Email' />
        <InputField type='text' text='Pengalaman' />
        <InputField type='text' text='Pencapaian' />
        <SaveButton link='/' text='Save' />
      </div>
    </div>
  );
}

export default CurriculumDetails;
