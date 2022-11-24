const Main= () => {
    const contents = [
        {
            topic: 'コーヒーミル',
            title: 'ニトリのコーヒーミルの評価「意外と使える」ニトリのコーヒーミルの評価「意外と使える」',
            text: 'お値段以上ニトリお値段以上ニトリお値段以上ニトリお値段以上ニトリお値段以上ニトリお値段以上ニトリお値段以上ニトリお値段以上ニトリお値段以上ニトリお値段以上ニトリお値段以上ニトリ',
            date: '1999年4月12日'
        },
        {topic: 'コーヒードリッパー', title: '', text: '', date: ''},
        {topic: 'コーヒーメーカー', title: '', text: '', date: ''},
        {topic: 'コーヒーカップ', title: '', text: '', date: ''},
        {topic: 'コーヒーをいれよう', title: '', text: '', date: ''},
        {topic: 'コーヒー通販', title: '', text: '', date: ''}
    ];
    return (
    <>
    <div className="flex flex-col min-w-full bg-green-500 items-center m-auto">
        <div className="h-12 w-44 bg-green-100"></div>
        <div className="h-12 w-16 bg-green-200"></div>
        <div className="h-12 w-56 bg-green-300"></div>
    </div>
    {/* <div className="flex flex-col justify-items-center">
        <div className="max-w-4xl">
            <div className=" bg-green-100">
                <div className="absolute">
                    <img className='' src='./coffee_image/img_04.jpg' alt='main_visual'/>
                </div>
                <div className="absolute">
                    <div className="">asd</div>
                </div>
            </div>
        </div>
    </div> */}
    <div className="text-4xl">洞</div>
    <div className='max-w-4xl m-auto'>
        <div className='font-def'>className='font-def' for japanese<br/>
            ABCDEFGHIJKLMNOPQRSTUVWXYZ<br/>
            abcdefghijklmnopqrstuvwxyz<br/>
            1234567890<br/>
            あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん<br/>
        </div>
        <div className='font-jost mt-4'>className='font-jost'<br/>
            ABCDEFGHIJKLMNOPQRSTUVWXYZ<br/>
            abcdefghijklmnopqrstuvwxyz<br/>
            1234567890<br/>
            あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん<br/>
        </div>
        <div className='font-dance mt-4'>className='font-dance'<br/>
            ABCDEFGHIJKLMNOPQRSTUVWXYZ<br/>
            abcdefghijklmnopqrstuvwxyz<br/>
            1234567890<br/>
            あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん<br/>
        </div>
    </div>
    
    <div className='max-w-4xl m-auto'>
        <div className='font-thin border-b-2 w-16 sticky top-20 z-40'>Recent</div>
        <div className="flex flex-wrap justify-around">
            {contents.map((content,_) => {
                return(
                    <div className='relative bg-white w-72 h-96 mt-2 border'>
                        <div className="absolute bg-yellow-400 text-sm right-0 flex flex-row items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 00-1.883 2.542l.857 6a2.25 2.25 0 002.227 1.932H19.05a2.25 2.25 0 002.227-1.932l.857-6a2.25 2.25 0 00-1.883-2.542m-16.5 0V6A2.25 2.25 0 016 3.75h3.879a1.5 1.5 0 011.06.44l2.122 2.12a1.5 1.5 0 001.06.44H18A2.25 2.25 0 0120.25 9v.776" />
                            </svg>
                            {content.topic}
                        </div>
                        <img className='object-cover w-full h-40' src="./coffee.jpg" alt="blueberry"/>
                        <div className='my-3 font-semibold'>{content.title}</div>
                        <div className='my-2 leading-5 tracking-wide text-[12px] '>{content.text}</div>
                        <div className='flex flex-row items-center text-[#5C5C5C]'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <div className='text-xs'>{content.date}</div>
                        </div>
                    </div>
                );
            })}
        </div>
    </div>
    <div className="mt-7"></div>
    <div className='max-w-4xl m-auto'>
        <div className='font-thin border-b-2 w-16 sticky top-20 z-40'>Cafe</div>
        <div className="flex flex-wrap justify-around">
            {contents.map((content,_) => {
                return(
                    <div className='relative bg-white w-72 h-96 mt-2 border'>
                        <div className="absolute bg-yellow-400 text-sm right-0 flex flex-row items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 00-1.883 2.542l.857 6a2.25 2.25 0 002.227 1.932H19.05a2.25 2.25 0 002.227-1.932l.857-6a2.25 2.25 0 00-1.883-2.542m-16.5 0V6A2.25 2.25 0 016 3.75h3.879a1.5 1.5 0 011.06.44l2.122 2.12a1.5 1.5 0 001.06.44H18A2.25 2.25 0 0120.25 9v.776" />
                            </svg>
                            {content.topic}
                        </div>
                        <img className='object-cover w-full h-40' src="./coffee.jpg" alt="blueberry"/>
                    </div>
                );
            })}
        </div>
    </div>
    <div className="mt-7"></div>
    <div className='max-w-4xl m-auto'>
        <div className='font-thin border-b-2 w-16 sticky top-20 z-40'>Tools</div>
        <div className="flex flex-wrap justify-around">
            {contents.map((content,_) => {
                return(
                    <div className='relative bg-white w-72 h-96 mt-2 border'>
                        <div className="absolute bg-yellow-400 text-sm right-0 flex flex-row items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 00-1.883 2.542l.857 6a2.25 2.25 0 002.227 1.932H19.05a2.25 2.25 0 002.227-1.932l.857-6a2.25 2.25 0 00-1.883-2.542m-16.5 0V6A2.25 2.25 0 016 3.75h3.879a1.5 1.5 0 011.06.44l2.122 2.12a1.5 1.5 0 001.06.44H18A2.25 2.25 0 0120.25 9v.776" />
                            </svg>
                            {content.topic}
                        </div>
                        <img className='object-cover w-full h-40' src="./coffee.jpg" alt="blueberry"/>
                    </div>
                );
            })}
        </div>
    </div>
    </>
    
    )
}

export default Main