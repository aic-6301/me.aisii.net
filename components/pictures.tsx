import Image from "next/image";
import { MapPin } from 'lucide-react';
import ConfirmLink from "./confirmlink";

export interface Picutres {
    title?: string;
    description?: string;
    added_date: Date;
    url: string;
    place?: string;
}


export default function Pictures(picture: Picutres) {
    return (
        <div className="flex flex-col m-12 bg-slate-900 text-white outline outline-white">
            <div className="flex flex-col items-center justify-center m-4 gap-4">
            <Image
                src={picture.url}
                alt={picture.title ? picture.title : 'No Title'}
                width={250}
                height={250}
                className="object-cover w-[250px] h-[250px]"
                unoptimized
            />
            <div className="text-2xl font-mono font-bold gap-4">{picture.title ? picture.title : 'No Title'}</div>
            <div className="text-lg font-mono font-medium gap-4">{picture.description ? picture.description : 'No Description Added.'}</div>
            {picture.place ? 
            <div className="flex justify-center items-center text-lg font-mono font-semibold gap-4 mb-2">
                <ConfirmLink href={`https://www.google.com/maps/search/?api=1&query=${picture.place}`} >
                <div className="flex items-center font-thin text-sm"><MapPin size={20} />撮影場所(クリックで開く)</div>
                    {picture.place}
                </ConfirmLink>
            </div> : <div className="m-8"></div>}
            </div>
            <p className="flex font-sans text-xs items-end justify-end text-gray-400">追加日時:{picture.added_date.toLocaleDateString()}</p>
        </div>
    );
}