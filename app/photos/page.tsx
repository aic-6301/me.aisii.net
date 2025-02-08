import Picture from "@/components/pictures";
import Foot from "@/components/footer";

export default function Page() {
    const pics = [
        {title: '',     description: '', added_date: new Date('2025-02-08'), url: 'https://photos.aisii.net/universal-1.png', place: 'ユニバーサルスタジオジャパン'},
        {title: '',     description: '', added_date: new Date('2025-02-08'), url: 'https://photos.aisii.net/universal-2.jpg', place: 'ユニバーサルスタジオジャパン'},
        {title: '',     description: '', added_date: new Date('2025-02-08'), url: 'https://photos.aisii.net/universal-3.jpg', place: 'ユニバーサルスタジオジャパン'},
        {title: '',     description: '', added_date: new Date('2025-02-08'), url: 'https://photos.aisii.net/universal-4.png', place: 'ユニバーサルスタジオジャパン'},
        {title: '',     description: '', added_date: new Date('2025-02-08'), url: 'https://photos.aisii.net/universal-5.jpg', place: 'ユニバーサルスタジオジャパン'},
        {title: '',     description: '', added_date: new Date('2025-02-08'), url: 'https://photos.aisii.net/20241130_084155.jpg', place: 'ユニバーサルスタジオジャパン'},
        {title: '',     description: '', added_date: new Date('2025-02-08'), url: 'https://photos.aisii.net/20241130_092233.jpg', place: 'ユニバーサルスタジオジャパン'},
        {title: '',     description: '', added_date: new Date('2025-02-08'), url: 'https://photos.aisii.net/20241130_103908.jpg', place: 'ユニバーサルスタジオジャパン'},
        {title: '',     description: '', added_date: new Date('2025-02-08'), url: 'https://photos.aisii.net/20241130_104345.jpg', place: 'ユニバーサルスタジオジャパン'},
        {title: '',     description: '', added_date: new Date('2025-02-08'), url: 'https://photos.aisii.net/21.jpg', place: 'ユニバーサルスタジオジャパン'},
        {title: '',     description: '', added_date: new Date('2025-02-08'), url: 'https://photos.aisii.net/universal-8.png', place: 'ユニバーサルスタジオジャパン'},
        {title: '',     description: '', added_date: new Date('2025-02-08'), url: 'https://photos.aisii.net/universal-12.png', place: 'ユニバーサルスタジオジャパン'},
        {title: '',     description: '', added_date: new Date('2025-02-08'), url: 'https://photos.aisii.net/universal-13.jpg', place: 'ユニバーサルスタジオジャパン'},
        {title: '',     description: '', added_date: new Date('2025-02-08'), url: 'https://photos.aisii.net/universal-14.jpg', place: 'ユニバーサルスタジオジャパン'},
        {title: '山',   description: '', added_date: new Date('2025-02-08'), url: 'https://photos.aisii.net/PXL_20220604_051340622.MP.jpg', place: '木祖村'},
        {title: '山#2', description: '', added_date: new Date('2025-02-08'), url: 'https://photos.aisii.net/PXL_20220604_070457481.MP.jpg', place: '木祖村'},
        {title: '山#3', description: '', added_date: new Date('2025-02-08'), url: 'https://photos.aisii.net/PXL_20220604_232724960.MP.jpg', place: '木祖村'},
        {title: '川っぽい何か', description: '', added_date: new Date('2025-02-08'), url: 'https://photos.aisii.net/1697962662666.jpg', place: ''},
        {title: '',     description: '', added_date: new Date('2025-02-08'), url: 'https://photos.aisii.net/1697962663360.jpg', place: ''},
        {title: '',     description: '', added_date: new Date('2025-02-08'), url: 'https://photos.aisii.net/1697962670206.jpg', place: ''},
        {title: '',     description: '', added_date: new Date('2025-02-08'), url: 'https://photos.aisii.net/1697962716708.jpg', place: ''},
        {title: '',     description: '', added_date: new Date('2025-02-08'), url: 'https://photos.aisii.net/1697962731783.jpg', place: ''},
    ]
    return (
        <>
            <div className="border-8 p-5 flex flex-wrap justify-center bg-slate-800">
                {pics.map((pic, index) => (
                <div key={index} className="aspect-w-1 aspect-h-1">
                    <Picture {...pic} />
                </div>
                ))}
            </div>
            <Foot />
        </>
    )
}