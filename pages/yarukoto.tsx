import Link from 'next/link'
const Yarukoto= () => {
    return (
    <>
    <div className='flex justify-center'>
        <ul className="list-disc">
            <li>contact_pageフォーム</li>
            <li>policy_pageフロント</li>
            <li>search_modalマスク</li>
            <li>search_modalショートカット</li>
            <li>owner_page管理ページmui</li>
            <li>owner_pageマークアップmui</li>
            <li>redux</li>
            <li>json</li>
            <li>認証</li>
            

        </ul>
        <Link href='/'>
            <div className="bg-[#282828] p-3 text-white">back</div>
        </Link>
    </div>
    
    </>
    
    )
}

export default Yarukoto