import Link from 'next/link'

const Footer= () => {
    return (
    <footer className='mt-20'>

        <div className='bg-[#282828] w-full text-white p-5'>
            <div className="max-w-4xl m-auto flex flex-row flex-wrap items-center justify-center gap-[1.5rem]">
                <div className="w-[24rem] h-[10rem] flex flex-row justify-center">
                    <div className="w-[12rem] flex justify-center">
                        <img className='object-cover w-[10rem] rounded-full' src="/hibiki_image/hibiki_01.jpg" alt="blueberry"/>
                    </div>
                    <div className="w-[12rem] text-left text-white flex flex-col justify-center">
                        <div className='text-2xl font-lust flex flex-row items-center'>Hibiki
                            <a href="https://twitter.com/add_bakkers" target="_blank" rel="noopener noreferrer">
                                <img className='object-cover w-7 ml-2 cursor-pointer' src="https://img.icons8.com/color/144/null/twitter--v1.png"/>
                            </a>
                        </div>
                        <div className="text-xs">
                            「<ruby className='text-[#ebbe45]'>洞<rt>うろ</rt></ruby>」
                            というのはなんちゃらかんちゃらなんちゃらかんちゃらなんちゃらかんちゃらなんちゃらかんちゃら
                            なんちゃらかんちゃらなんちゃらかんちゃら。
                        </div>
                    </div>
                </div>
                <div className="w-[24rem] h-[4rem] flex flex-col items-center justify-between">
                    <div className="flex flex-row font-jost text-md text-center">
                        <Link href='/contact'>
                            <div className="px-3 border-x-[.01rem] hover:bg-white/50 duration-150">Contact</div>
                        </Link>
                        <Link href='/privacy_policy'>
                            <div className="px-3 border-x-[.01rem] hover:bg-white/50 duration-150">Privacy Policy</div>
                        </Link>
                        {/* last-childのborder改善 */}
                    </div>
                    
                    <div className='text-neutral-500 font-thin font-jost text-center'>
                        &copy; 2022- Uro. All Rights Reserved.
                    </div>
                </div>
            </div>
        </div>
    </footer>
    
    )
}

export default Footer