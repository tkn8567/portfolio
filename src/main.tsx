const Main= () => {
    const contents = [
        {
            topic: 'コーヒーミル',
            title: 'ニトリのコーヒーミルの評価「意外と使える」ニトリのコーヒーミルの評価「意外と使える」',
            text: 'お値段以上ニトリお値段以上ニトリお値段以上ニトリお値段以上ニトリお値段以上ニトリお値段以上ニトリお値段以上ニトリお値段以上ニトリお値段以上ニトリお値段以上ニトリお値段以上ニトリ',
            date: '1999.4.12'
        },
        {
            topic: 'コーヒードリッパー',
            title: 'ニトリのコーヒーミルの評価「意外と使える」ニトリのコーヒーミルの評価「意外と使える」',
            text: 'お値段以上ニトリお値段以上ニトリお値段以上ニトリお値段以上ニトリお値段以上ニトリお値段以上ニトリお値段以上ニトリお値段以上ニトリお値段以上ニトリお値段以上ニトリお値段以上ニトリ',
            date: '1999.4.12'
        },
        {topic: 'コーヒーメーカー', title: '', text: '', date: ''},
        {topic: 'コーヒーカップ', title: '', text: '', date: ''},
        {topic: 'コーヒーをいれよう', title: '', text: '', date: ''},
        {topic: 'コーヒー通販', title: '', text: '', date: ''}
    ];
    return (
    <>
    <div className="flex flex-col items-center w-screen">
        <div className="">
            <div className='w-[24rem] h-[14rem] grayscale hover:grayscale-0 duration-700'>
                <img src='./coffee_image/img_04.jpg' alt='main_visual' />
            </div>
            <div className='flex flex-row gap-1'>
                <div className='w-14 h-0 mt-4 border border-[#282828]'></div>
                <div className='font-lust text-[#282828] text-2xl left-[1rem] top-[7rem]'>"Be Voracious before U think"</div>
            </div>
        </div>
        
        <div className="flex flex-col items-center m-5">
            <div className="relative h-12 w-64">
                <div className="absolute z-10 font-jost text-5xl">NEW POSTS</div>
                <div className='absolute bg-[#CCAE61] w-64 h-4 top-4'></div>
            </div>
            <div className='mt-3 mb-2 w-12 border-[.01rem] border-[#282828]'></div>
            <div className="font-jost text-sm">Coffee, DailyBlog, Books, etc...</div>
        </div>

        <div className='max-w-4xl'>
            <div className="flex flex-wrap justify-around bg-teal-100">
                {contents.map((content,_) => {
                    return(
                        <div className="w-[24rem] h-[36rem] bg-indigo-400 mt-5">
                            <div className='flex flex-col items-center'>
                                <img className='object-cover w-[24rem] h-[18rem]' src="./coffee_image/img_03.jpg" alt=""/>
                                <div className="h-[18rem]">
                                    <div className="m-4 w-[24rem]">
                                        <div className="font-jost text-sm">DailyBlog</div>
                                    </div>
                                    <div className="m-6 mt-0">
                                        <div className="text-lg leading-6 font-bold tracking-wider">{content.title}</div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        
                    );
                })}
            </div>
        </div>

        <div className='max-w-4xl m-auto'>
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
    </div>
    </>
    
    )
}

export default Main