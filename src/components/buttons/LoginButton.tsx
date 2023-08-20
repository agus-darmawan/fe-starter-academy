import Link from 'next/link';

const LoginButton = () => {
  return (
    <Link href='/auth'>
      <button className=' bg-blue-starter text-blue-backgraund mx-auto w-28 rounded-xl px-5 py-1 text-lg hover:bg-blue-700 lg:w-max lg:rounded-full lg:px-7 lg:py-3 lg:text-xl'>
        Masuk/ Daftar
      </button>
    </Link>
  );
};

export default LoginButton;
