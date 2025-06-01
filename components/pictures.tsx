import Image from "next/image";
import { MapPin, X } from 'lucide-react';
import ConfirmLink from "./confirmlink";
import { useState } from 'react';

export interface Picutres {
    title?: string;
    description?: string;
    added_date: Date;
    url: string;
    place?: string;
}


export default function Pictures(picture: Picutres) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (        <>
        <style jsx>{`
            .protected-image {
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
                -webkit-user-drag: none;
                -khtml-user-drag: none;
                -moz-user-drag: none;
                -o-user-drag: none;
                user-drag: none;
                pointer-events: auto;
            }
            .protected-image::after {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: transparent;
                pointer-events: none;
            }
        `}</style>        <div className="flex flex-col m-12 bg-slate-900 text-white outline outline-white">
            <div className="flex flex-col items-center justify-center m-4 gap-4">
            <div className="relative">
            <Image
                src={picture.url}
                alt={picture.title ? picture.title : 'No Title'}
                width={250}
                height={250}
                className="object-cover w-[250px] h-[250px] cursor-pointer hover:opacity-80 transition-opacity select-none protected-image"
                unoptimized
                onClick={openModal}
                onContextMenu={(e) => e.preventDefault()}
                onDragStart={(e) => e.preventDefault()}
                draggable={false}
            />
            </div>
            <div className="text-2xl font-mono font-bold gap-4 text-center">{picture.title ? picture.title : 'No Title'}</div>
            <div className="text-lg font-mono font-medium gap-4 w-[250px] break-words text-center">{picture.description ? picture.description : 'No Description Added.'}</div>
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

        {/* フルサイズ画像モーダル */}
        {isModalOpen && (
            <div 
                className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
                onClick={closeModal}
            >
                <div className="relative max-w-full max-h-full">                    <button
                        onClick={closeModal}
                        className="absolute top-4 right-4 text-white hover:text-gray-300 z-10 bg-black bg-opacity-50 rounded-full p-2 transition-colors"
                    >
                        <X size={24} />
                    </button>
                    <div className="relative">
                    <Image
                        src={picture.url}
                        alt={picture.title ? picture.title : 'No Title'}
                        width={800}
                        height={800}
                        className="max-w-full max-h-[90vh] object-contain select-none protected-image"
                        unoptimized
                        onClick={(e) => e.stopPropagation()}
                        onContextMenu={(e) => e.preventDefault()}
                        onDragStart={(e) => e.preventDefault()}
                        draggable={false}
                    />
                    </div>
                </div>
            </div>
        )}
        </>
    );
}