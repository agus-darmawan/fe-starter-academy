import Link from 'next/link';
interface ButtonProps {
  readonly link?: string;
  readonly text?: string;
}

const SaveButton = ({ link, text }: ButtonProps) => {
  return (
    <Link href={`/${link}`}>
      <button className=' bg-blue-starter text-blue-backgraund mx-auto  mt-5 rounded-full px-5 py-2 text-lg hover:bg-blue-700 '>
        {text}
      </button>
    </Link>
  );
};

export default SaveButton;
