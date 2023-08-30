interface ButtonProps {
  readonly link?: string;
  readonly text?: string;
  readonly type?: string;
}

const InputField = ({ text, type }: ButtonProps) => {
  return (
    <label className=' block pt-5'>
      <span className="text-blue-starter block text-sm font-bold after:ml-0.5 after:text-red-500 after:content-['']">
        {text}
      </span>
      <input
        type={type}
        name={type}
        className='focus:border-blue-starter block h-12 w-full rounded-md border border-slate-300 bg-transparent px-3 py-2 placeholder-slate-400 shadow-sm focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm'
        placeholder={text}
      />
    </label>
  );
};

export default InputField;
