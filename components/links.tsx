import Image from 'next/image';
import { ConfirmLink } from './confirmlink';

export const Links = () => {
    return (
        <>
            <div className="flex flex-wrap items-center justify-center gap-4 py-2 mx-12 md:mx-4">
                <ConfirmLink href='https://github.com/aic-6301'>
                    <div className='flex bg-none hover:bg-slate-500 outline outline-2 outline-slate-500 px-5 py-2 rounded-xl duration-200 hover:ease-out'>
                        <button className='flex gap-4 justify-center items-center '>
                            <Image src='github.svg' alt='Github' width={32} height={32} className='items-start' />
                            <span className='flex text-2xl'>Github</span>
                        </button>
                    </div>
                </ConfirmLink>
                <ConfirmLink href='https://discord.com/user/964887498436276305'>
                    <div className='flex outline outline-2 outline-blue-400 px-5 py-2 rounded-xl hover:bg-blue-400 hover:text-white duration-200 hover:ease-out'>
                        <button className='flex justify-center items-center gap-4'>
                            <Image src='discord.svg' alt='Discord' width={32} height={32} className='items-start' />
                            <span className='flex text-2xl'>Discord</span>
                        </button>
                    </div>
                </ConfirmLink>
                <ConfirmLink href='https://幼女.art/@aicy'  >
                    <div className='flex outline outline-2 outline-pink-600 px-5 py-2 rounded-xl hover:bg-pink-600 hover:text-white duration-200 hover:ease-out'>
                        <button className='flex justify-center items-center gap-4'>
                            <Image src='ActivityPub.svg' alt='ActivityPub' width={32} height={32} className='flex items-center justify-center' />
                            <span className='flex text-2xl'>ActivityPub</span>
                        </button>
                    </div>
                </ConfirmLink>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 py-2 mx-12 md:mx-4">
                <ConfirmLink href='https://vrchat.com/home/user/usr_66be067b-6613-4ee4-aa6f-b38351ba6f4b'  >
                    <div className='flex bg-none hover:bg-slate-500 outline outline-2 outline-slate-500 px-5 py-2 rounded-xl duration-200 hover:ease-out'>
                        <button className='flex gap-4 justify-center items-center '>
                            <Image src='vrchat.svg' alt='VRChat' width={32} height={32} className='items-start' />
                            <span className='flex text-2xl'>VRChat</span>
                        </button>
                    </div>
                </ConfirmLink>
                <ConfirmLink href='https://discord.com/user/964887498436276305'>
                    <div className='flex outline outline-2 outline-blue-400 px-5 py-2 rounded-xl hover:bg-blue-400 hover:text-white duration-200 hover:ease-out' >
                        <button className='flex justify-center items-center gap-4'>
                            <Image src='twitter.svg' alt='Twitter' width={32} height={32} className='items-start' />
                            <span className='flex text-2xl'>Twitter</span>
                        </button>
                    </div>
                </ConfirmLink>
                <ConfirmLink href='https://幼女.art/@aicy'>
                    <div className='flex outline outline-2 outline-red-600 px-5 py-2 rounded-xl hover:bg-red-600 hover:text-white duration-200 hover:ease-out'>
                        <button className='flex justify-center items-center gap-4'>
                            <Image src='youtube.svg' alt='Youtube' width={32} height={32} className='flex items-center justify-center' />
                            <span className='flex text-2xl'>Youtube</span>
                        </button>
                    </div>
                </ConfirmLink>
            </div>
        </>
    );
}   