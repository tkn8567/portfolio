import Link from 'next/link'
import LoginModal from './loginmodal'
import SearchModal from './searchmodal'
const Header= () => {
    return (
    <header className='fixed w-full z-50'>
        <div className='backdrop-blur-lg flex flex-row items-center h-16'>
            <Link href='/'><div className='font-dance text-white font-bold underline text-lg m-3 ml-7'>#coffee</div></Link>
            
            <LoginModal />

            <SearchModal　/>
            
            <div className="border rounded w-3/12 h-8 m-3 items-center flex flex-row">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 m-1 ml-2 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
                <div className="text-white font-thin ml-2">search</div>
            </div>

        </div>
    </header>
    
    )
}

export default Header