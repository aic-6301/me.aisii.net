import Image from 'next/image';
import Link from 'next/link';

export default function footer() {
  return (
    <footer>
        <div className='flex items-center justify-center text-lg font-mono font-bold gap-4 m-4 mt-6'>
            <p className='mr-2'>© {new Date().getFullYear()} AIC_6301</p>
            |
            <p className='ml-2'>Powered by {' Next.js '}</p>
        </div>
        <div className='flex flex-col items-end justify-end m-4 mr-12 mb-8 top-0 right-0 gap-2 '>
            <Link
            className='hover:bg-slate-200 duration-300 ease-linear rounded-xl p-[0.3rem]'
            href="/"
            rel="noopener noreferrer"
            shallow
            >
            About Me
            </Link>
            <Link
            className='hover:bg-slate-200 duration-300 ease-linear rounded-xl p-[0.3rem]'
            href="/photos"
            rel="noopener noreferrer"
            shallow
            >
            Photos
            </Link>
        </div>
    </footer>
  );
}