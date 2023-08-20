import Link from 'next/link';
interface ButtonProps {
  readonly link?: string;
  readonly text?: string;
}

const Button = ({ link, text }: ButtonProps) => {
  return (
    <Link href={`/${link}`}>
      <button className=' bg-blue-starter text-blue-backgraund mx-auto  rounded-full px-5 py-2 text-lg hover:bg-blue-700 lg:w-max lg:px-7 lg:py-3 lg:text-xl'>
        {text}
      </button>
    </Link>
  );
};

export default Button;
