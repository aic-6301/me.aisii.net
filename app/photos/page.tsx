"use client";

import Picture from "@/components/pictures";
import Foot from "@/components/footer";

export default function Page() {
    const pics = [
        { title: '勝山の4月の姿', description: '', added_date: new Date('2025-04-03'), url: 'https://photos.aisii.net/2025-4-2/20250402_093748.jpg', place: '勝山市' },
        { title: '', description: '', added_date: new Date('2025-04-03'), url: 'https://photos.aisii.net/2025-4-2/20250402_094930.jpg', place: '福井県立恐竜博物館' },
        { title: '', description: '', added_date: new Date('2025-04-03'), url: 'https://photos.aisii.net/2025-4-2/20250402_100239.jpg', place: '福井県立恐竜博物館' },
        { title: '', description: '', added_date: new Date('2025-04-03'), url: 'https://photos.aisii.net/2025-4-2/20250402_101754.jpg', place: '福井県立恐竜博物館' },
        { title: '', description: '', added_date: new Date('2025-04-03'), url: 'https://photos.aisii.net/2025-4-2/20250402_101937.jpg', place: '福井県立恐竜博物館' },
        { title: '', description: '', added_date: new Date('2025-04-03'), url: 'https://photos.aisii.net/2025-4-2/20250402_102056.jpg', place: '福井県立恐竜博物館' },
        { title: '', description: '', added_date: new Date('2025-04-03'), url: 'https://photos.aisii.net/2025-4-2/20250402_103033.jpg', place: '福井県立恐竜博物館' },
        { title: '', description: '', added_date: new Date('2025-04-03'), url: 'https://photos.aisii.net/2025-4-2/20250402_105557.jpg', place: '福井県立恐竜博物館' },
        { title: '', description: '', added_date: new Date('2025-04-03'), url: 'https://photos.aisii.net/2025-4-2/20250402_112335.jpg', place: '福井県立恐竜博物館' },
        { title: '', description: '', added_date: new Date('2025-04-03'), url: 'https://photos.aisii.net/2025-4-2/20250402_120124.jpg', place: '福井県立恐竜博物館' },
        { title: '', description: '', added_date: new Date('2025-04-03'), url: 'https://photos.aisii.net/2025-4-2/20250402_120631.jpg', place: '福井県立恐竜博物館' },
        { title: '', description: '', added_date: new Date('2025-04-03'), url: 'https://photos.aisii.net/2025-4-2/20250402_120713.jpg', place: '福井県立恐竜博物館' },
        { title: 'ホワイトザウルス', description: '', added_date: new Date('2025-04-03'), url: 'https://photos.aisii.net/2025-4-2/20250402_122551.jpg', place: '勝山市' },
        { title: '', description: '', added_date: new Date('2025-04-03'), url: 'https://photos.aisii.net/2025-4-2/20250402_131220.jpg', place: '清大寺' },
        { title: '', description: '', added_date: new Date('2025-04-03'), url: 'https://photos.aisii.net/2025-4-2/20250402_131248.jpg', place: '清大寺' },
        { title: '', description: '', added_date: new Date('2025-04-03'), url: 'https://photos.aisii.net/2025-4-2/20250402_131449.jpg', place: '清大寺' },
        { title: '', description: '', added_date: new Date('2025-04-03'), url: 'https://photos.aisii.net/2025-4-2/20250402_131504.jpg', place: '清大寺' },
        { title: '', description: '', added_date: new Date('2025-04-03'), url: 'https://photos.aisii.net/2025-4-2/20250402_131529.jpg', place: '清大寺' },
        { title: '', description: '', added_date: new Date('2025-04-03'), url: 'https://photos.aisii.net/2025-4-2/20250402_131557.jpg', place: '清大寺' },
        { title: '', description: '', added_date: new Date('2025-04-03'), url: 'https://photos.aisii.net/2025-4-2/20250402_131754.jpg', place: '清大寺' },
        { title: '', description: '', added_date: new Date('2025-04-03'), url: 'https://photos.aisii.net/2025-4-2/20250402_131833.jpg', place: '清大寺' },
        { title: '', description: '', added_date: new Date('2025-04-03'), url: 'https://photos.aisii.net/2025-4-2/20250402_131925.jpg', place: '清大寺' },
        { title: '', description: '', added_date: new Date('2025-04-03'), url: 'https://photos.aisii.net/2025-4-2/20250402_132131.jpg', place: '清大寺' },
        { title: '', description: '', added_date: new Date('2025-04-03'), url: 'https://photos.aisii.net/2025-4-2/20250402_132137.jpg', place: '清大寺' },
        { title: '', description: '', added_date: new Date('2025-04-03'), url: 'https://photos.aisii.net/2025-4-2/20250402_132235.jpg', place: '清大寺' },
        { title: '', description: '', added_date: new Date('2025-04-03'), url: 'https://photos.aisii.net/2025-4-2/20250402_132459.png', place: '清大寺' },
        { title: '', description: '', added_date: new Date('2025-04-03'), url: 'https://photos.aisii.net/2025-4-2/20250402_133415.jpg', place: '清大寺' },
        { title: '', description: '', added_date: new Date('2025-04-03'), url: 'https://photos.aisii.net/2025-4-2/20250402_133712.jpg', place: '清大寺' },
        { title: 'クレープ', description: 'おいしかった', added_date: new Date('2025-04-03'), url: 'https://photos.aisii.net/2025-4-2/20250402_150326.jpg', place: '大野市' },

        { title: '', description: '', added_date: new Date('2025-02-08'), url: 'https://photos.aisii.net/universal-1.png', place: 'ユニバーサルスタジオジャパン' },
        { title: '', description: '', added_date: new Date('2025-02-08'), url: 'https://photos.aisii.net/universal-2.jpg', place: 'ユニバーサルスタジオジャパン' },
        { title: '', description: '', added_date: new Date('2025-02-08'), url: 'https://photos.aisii.net/universal-3.jpg', place: 'ユニバーサルスタジオジャパン' },
        { title: '', description: '', added_date: new Date('2025-02-08'), url: 'https://photos.aisii.net/universal-4.png', place: 'ユニバーサルスタジオジャパン' },
        { title: '', description: '', added_date: new Date('2025-02-08'), url: 'https://photos.aisii.net/universal-5.jpg', place: 'ユニバーサルスタジオジャパン' },
        { title: '', description: '', added_date: new Date('2025-02-08'), url: 'https://photos.aisii.net/20241130_084155.jpg', place: 'ユニバーサルスタジオジャパン' },
        { title: '', description: '', added_date: new Date('2025-02-08'), url: 'https://photos.aisii.net/20241130_092233.jpg', place: 'ユニバーサルスタジオジャパン' },
        { title: '', description: '', added_date: new Date('2025-02-08'), url: 'https://photos.aisii.net/20241130_103908.jpg', place: 'ユニバーサルスタジオジャパン' },
        { title: '', description: '', added_date: new Date('2025-02-08'), url: 'https://photos.aisii.net/20241130_104345.jpg', place: 'ユニバーサルスタジオジャパン' },
        { title: '', description: '', added_date: new Date('2025-02-08'), url: 'https://photos.aisii.net/21.jpg', place: 'ユニバーサルスタジオジャパン' },
        { title: '', description: '', added_date: new Date('2025-02-08'), url: 'https://photos.aisii.net/universal-8.png', place: 'ユニバーサルスタジオジャパン' },
        { title: '', description: '', added_date: new Date('2025-02-08'), url: 'https://photos.aisii.net/universal-12.png', place: 'ユニバーサルスタジオジャパン' },
        { title: '', description: '', added_date: new Date('2025-02-08'), url: 'https://photos.aisii.net/universal-13.jpg', place: 'ユニバーサルスタジオジャパン' },
        { title: '', description: '', added_date: new Date('2025-02-08'), url: 'https://photos.aisii.net/universal-14.jpg', place: 'ユニバーサルスタジオジャパン' },
        { title: '山', description: '', added_date: new Date('2025-02-08'), url: 'https://photos.aisii.net/PXL_20220604_051340622.MP.jpg', place: '木祖村' },
        { title: '山#2', description: '', added_date: new Date('2025-02-08'), url: 'https://photos.aisii.net/PXL_20220604_070457481.MP.jpg', place: '木祖村' },
        { title: '山#3', description: '', added_date: new Date('2025-02-08'), url: 'https://photos.aisii.net/PXL_20220604_232724960.MP.jpg', place: '木祖村' },
        { title: '川っぽい何か', description: '', added_date: new Date('2025-02-08'), url: 'https://photos.aisii.net/1697962662666.jpg', place: '' },
        { title: '', description: '', added_date: new Date('2025-02-08'), url: 'https://photos.aisii.net/1697962663360.jpg', place: '' },
        { title: '', description: '', added_date: new Date('2025-02-08'), url: 'https://photos.aisii.net/1697962670206.jpg', place: '' },
        { title: '', description: '', added_date: new Date('2025-02-08'), url: 'https://photos.aisii.net/1697962716708.jpg', place: '' },
        { title: '', description: '', added_date: new Date('2025-02-08'), url: 'https://photos.aisii.net/1697962731783.jpg', place: '' },
    ]
    return (
        <>
            <div className=" p-5 justify-center border-8 bg-slate-800">
                <p className="flex font-bold font-mono text-4xl text-white items-center justify-center p-5">Pictures</p>
                <div className="flex flex-wrap justify-center">
                    {pics.map((pic, index) => (
                        <div key={index} className="aspect-w-1 aspect-h-1 relative">
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