"use client";
import { useState } from 'react';

export const AboutMe = () => {
    return (
        <>
            <div className="flex gap-4 mx-12 md:mx-4 outline outline-2 outline-white rounded-xl duration-300 ease-linear">
                <div className="flex flex-col gap-2 p-4 rounded-xl">
                    <h1 className="text-2xl font-bold">About Me</h1>
                    <p className="text-lg">何かしてる人。</p>
                    <p className="text-lg">自己満足ですべてを終わらせます。</p>
                </div>
            </div>
        </>
    );
}
