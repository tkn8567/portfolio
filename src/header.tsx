import Link from 'next/link'
import LoginModal from './login_modal'
import SearchModal from './search_modal'
const Header= () => {
    return (
    <header className='flex flex-row justify-between pt-4 max-w-4xl m-auto'>
        <div className="h-24 p-4 pb-3 border-r-[.1rem] border-[#282828]
                        flex justify-end items-end">
            <Link href='/yarukoto'>
                <div className="font-uro text-[#c09b37ce] text-4xl px-4">洞</div>
            </Link>
        </div>
        <div className="flex flex-row">
            <div className="p-5 flex justify-center items-end">
                <LoginModal />
            </div>
            <div className="p-4 flex justify-center items-end">
                <SearchModal　/>
            </div>
        </div>
    </header>
    
    )
}

export default Header