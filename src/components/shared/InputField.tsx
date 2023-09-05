interface ButtonProps {
  readonly link?: string;
  readonly text?: string;
  readonly type?: string;
  readonly customClassName?: string;
}

const InputField = ({ text, type, customClassName }: ButtonProps) => {
  const defaultClassName = 'block pt-5';
  const onlyTop = 'block';

  const combinedClassName = customClassName ? `${onlyTop}` : defaultClassName;

  return (
    <label className={combinedClassName}>
      <span className="text-blue-starter afteasdr:ml-0.5 block text-sm font-bold after:text-red-500 after:content-['']">
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
