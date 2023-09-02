import React from 'react';
interface DescriptionProps {
  readonly text?: string;
}

const DescriptionInputField = ({ text }: DescriptionProps) => {
  return (
    <div className='pt-5'>
      <label
        htmlFor='description'
        className="text-blue-starter block text-sm font-bold after:ml-0.5 after:text-red-500 after:content-['']"
      >
        {text}
      </label>
      <textarea
        id='description'
        name='description'
        rows={4}
        placeholder='Enter your description here...'
        className='focus:border-blue-starter w-full resize-none rounded-md border border-slate-300 bg-transparent px-3 py-2 text-sm leading-normal placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-sky-500'
      ></textarea>
    </div>
  );
};

export default DescriptionInputField;
