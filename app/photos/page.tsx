"use client";

import Picture from "@/components/pictures";
import Foot from "@/components/footer";
import pics from "@/components/images";

export default function Page() {
    
    return (
        <>
            <div className=" p-5 justify-center border-8 bg-slate-800">
                <p className="flex font-bold font-mono text-4xl text-white items-center justify-center p-5">Pictures</p>
                <div className="flex justify-center items-center mb-5">
                    <button 
                        onClick={() => {
                            const newestIndex = pics.findIndex(pic => 
                                pic.added_date.getTime() === Math.max(...pics.map(p => p.added_date.getTime()))
                            );
                            document.getElementById(`pic-${newestIndex}`)?.scrollIntoView({ behavior: 'smooth', block: 'center'});
                        }}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-lg"
                    >
                        最新の画像へ
                    </button>
                </div>
                <div className="flex flex-wrap justify-center">
                    {pics.map((pic, index) => (
                        <div key={index} className="aspect-w-1 aspect-h-1 relative" id ={`pic-${index}`}>
                            {pic.added_date.getTime() === Math.max(...pics.map(p => p.added_date.getTime())) && (
                                <span className="absolute top-0 left-0 bg-red-500 text-white text-xs font-bold px-2 py-1">NEW</span>
                            )}
                            <Picture {...pic} />
                        </div>
                    ))}
                </div>
            </div>
            <Foot />
        </>
    )
}