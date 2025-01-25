"use client";
import { useState } from 'react';
import Image from 'next/image';

export const Icon = () => {
    const [hover, setHover] = useState(false);
    return (
        <>
            <div className="flex items-center justify-center duration-300 ease-in-out" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                { hover ? (
                    <Image 
                        src='/icon2.png' 
                        alt='Aicy' 
                        width={128} height={128} 
                        className='justify-center items-center rounded-2xl' 
                    /> ) : (
                    <Image 
                        src='/icon.png' 
                        alt='Aicy' 
                        width={128} height={128} 
                        className='justify-center items-center rounded-2xl' 
                    /> 
                )}
            </div>
            <span className='flex items-center justify-center text-3xl font-mono font-bold my-2'>あいしぃー</span>
        </>
    );
}