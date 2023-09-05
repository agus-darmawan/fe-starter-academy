import SaveButton from '@/components/buttons/SaveButton';
import DescriptionInputField from '@/components/shared/DescriptionInputField';
import InputField from '@/components/shared/InputField';

function CurriculumDetails() {
  return (
    <div className='overflow-auto'>
      <div className=' text-blue-starter flex h-auto w-auto flex-col items-start justify-center text-3xl font-semibold'>
        Operation Research 1
      </div>
      <InputField type='text' text='Nama Kurikulum' />
      <InputField type='email' text='Tutor' />
      <InputField type='text' text='Harga' />
      <DescriptionInputField />
      <InputField type='text' text='Materi' />
      <InputField type='text' text='Link Video' />
      <div className='pt-5'>
        <h1 className="text-blue-starter afteasdr:ml-0.5 block text-sm font-bold after:text-red-500 after:content-['']">
          Materi PDF
        </h1>

        <div className=' h-auto w-full rounded-md border border-slate-300 bg-transparent p-5 '>
          <InputField type='text' text='Nama Materi 1' customClassName='pt-0' />
          <InputField type='text' text='Link Materi 1' />
        </div>
      </div>
      <div className='flex flex-row items-end justify-end gap-4'>
        <SaveButton link='/' text='Delete' />
        <SaveButton link='/' text='Add' />
      </div>

      <SaveButton link='/' text='Save' />
    </div>
  );
}

export default CurriculumDetails;
