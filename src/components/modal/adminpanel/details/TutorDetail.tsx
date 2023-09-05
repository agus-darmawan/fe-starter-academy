import SaveButton from '@/components/buttons/SaveButton';
import DescriptionInputField from '@/components/shared/DescriptionInputField';
import InputField from '@/components/shared/InputField';

function TutorDetails() {
  return (
    <div className=''>
      <div className=' text-blue-starter flex h-auto w-auto flex-col items-start justify-center text-3xl font-semibold'>
        I Gusti Agung Ngurah Adhi Sanjaya
      </div>
      <InputField type='text' text='Nama Tutor' />
      <InputField type='email' text='Email' />
      <InputField type='password' text='Password' />
      <DescriptionInputField text='Pengalaman' />
      <DescriptionInputField text='Pencapaian' />
      <SaveButton link='/' text='Save' />
    </div>
  );
}

export default TutorDetails;
