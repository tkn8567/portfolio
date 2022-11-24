import Link from 'next/link'
import LoginModal from './loginmodal'
import SearchModal from './searchmodal'
const Header= () => {
    return (
    <header className=''>
        <div className=''>
            <div className="flex flex-row justify-between pt-4 max-w-4xl m-auto">
                <div className="h-24 p-4 border-r-[.1rem] border-[#282828]
                                flex justify-end items-end">
                    <Link className='flex flex-row ' href='/'>
                        <div className="font-lust text-[#c09b37ce] text-2xl">hibiki</div>
                        <div className='font-lust text-2xl top-12 left-40'>.blog</div>
                    </Link>
                </div>
                <div className="flex flex-row">
                    <div className="p-5 flex justify-center items-end">
                        <LoginModal />
                    </div>
                    <div className="p-1 flex justify-center items-end">
                        <SearchModal　/>
                    </div>
                </div>
            </div>
        </div>
        
    </header>
    
    )
}

export default Header