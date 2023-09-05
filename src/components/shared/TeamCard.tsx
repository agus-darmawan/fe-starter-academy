import Image from 'next/image';
import Link from 'next/link';
interface TeamCardProps {
  image: string;
  name: string;
  role: string;
  instagram: string;
  linkedin: string;
}

export default function TeamCard({
  image,
  name,
  role,
  instagram,
  linkedin,
}: TeamCardProps) {
  return (
    <div className='flex flex-col items-center justify-center pt-10'>
      <Image src={image} width={205} height={205} alt={name} />
      <h1 className='text-blue-backgraund pt-2 text-center text-4xl font-semibold md:pt-10'>
        {name}
      </h1>
      <h2 className='text-blue-backgraund pt-2 text-center text-2xl'>{role}</h2>
      <div className='flex flex-row items-center gap-x-2  pt-2 md:pt-9'>
        <Link href={instagram}>
          <Image
            src='/images/home/icon/ig.svg'
            width={30}
            height={30}
            alt='Instagram'
          />
        </Link>
        <Link href={linkedin}>
          <Image
            src='/images/home/icon/linkedind.svg'
            width={30}
            height={30}
            alt='Linkedin'
          />
        </Link>
      </div>
    </div>
  );
}
