"use client";
import { useState } from 'react';
import ConfirmLink from './confirmlink';


export const Works = () => {
    const [works] = useState([
        { title: 'LightCity', description: 'FiveMサーバー', link: 'https://lightcity.notion.site' },
        { title: 'OceanCity', description: 'FiveMサーバー', link: 'https://oceancity.notion.site' },
    ]);

    return (
        <div className="flex flex-col items-center justify-center gap-2 mx-12 md:mx-4">
            <h1 className="text-3xl font-mono font-bold py-2">My Works</h1>
            <div className="flex flex-row flex-wrap justify-center">
            {works.map((work, index) => (
                <ConfirmLink key={index} href={work.link} >
                <div className='flex flex-col bg-none hover:bg-slate-500 outline outline-2 outline-slate-500 px-5 py-2 rounded-xl duration-200 hover:ease-out m-2' >
                    <button className='flex flex-col gap-2 justify-center items-center my-2 mx-2'>
                    <h2 className='text-2xl font-bold font-sans'>{work.title}</h2>
                    <span className='flex text-xl'>{work.description}</span>
                    </button>
                </div>
                </ConfirmLink>
            ))}
            </div>
        </div>
    );
}