const Main= () => {
    const contents = [
        {
            image: './hibiki_image/hibiki_01.jpg',
            topic: 'コーヒーミル',
            title: 'ニトリのコーヒーミルの評価「意外と使える」ニトリのコーヒーミルの評価「意外と使える」',
            text: 'お値段以上ニトリお値段以上ニトリお値段以上ニトリお値段以上ニトリお値段以上ニトリお値段以上ニトリお値段以上ニトリお値段以上ニトリお値段以上ニトリお値段以上ニトリお値段以上ニトリ',
            date: '1999.4.12'
        },
        {
            image: './hibiki_image/hibiki_02.jpg',
            topic: 'コーヒードリッパー',
            title: 'ニトリのコーヒーミルの評価「意外と使える」ニトリのコーヒーミルの評価「意外と使える」',
            text: 'お値段以上ニトリお値段以上ニトリお値段以上ニトリお値段以上ニトリお値段以上ニトリお値段以上ニトリお値段以上ニトリお値段以上ニトリお値段以上ニトリお値段以上ニトリお値段以上ニトリ',
            date: '1999.4.12'
        },
        {image: './hibiki_image/hibiki_03.jpg', topic: 'コーヒーメーカー', title: '', text: '', date: ''},
        {image: './hibiki_image/hibiki_04.jpg', topic: 'コーヒーカップ', title: '', text: '', date: ''},
        {image: './hibiki_image/hibiki_05.jpg', topic: 'コーヒーをいれよう', title: '', text: '', date: ''},
        {image: './hibiki_image/hibiki_06.jpg', topic: 'コーヒー通販', title: '', text: '', date: ''}
    ];
    return (
    <>
    <div className="flex flex-col items-center w-screen">
        <div className="m-8">
            <div className='w-[24rem] h-[14rem] grayscale hover:grayscale-0 duration-700'>
                <img src='./coffee_image/img_04.jpg' alt='main_visual' />
            </div>
            <div className='flex flex-row gap-1'>
                <div className='w-14 h-0 mt-4 border-[.01rem] border-[#282828]'></div>
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
            <div className="flex flex-wrap gap-[1.5rem] justify-center">
                {contents.map((content, index) => {
                    return(
                        <div className="w-[24rem] h-[34rem]" key={index}>
                            <div className='flex flex-col items-center'>
                                <img className='object-cover w-[24rem] h-[18rem]' src={content.image} alt=""/>
                                <div className="w-[24rem] h-[16rem]">
                                    <div className="p-4">
                                        <div className="font-jost text-sm">DailyBlog</div>
                                    </div>
                                    <div className="p-6 pt-0">
                                        <div className="text-lg leading-6 font-bold tracking-wider">{content.title}</div>
                                    </div>
                                    <div className="text-[.7rem] p-4 pt-0">{content.text}...</div>
                                    <div className="text-[.5rem] text-right p-4 pt-0">{content.date}</div>
                                    <div className='w-24 border-[.01rem] border-[#282828]'></div>
                                </div>
                                
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="w-[24rem] m-auto mt-5 font-jost border-[#282828] border-[.01rem] bg-[#282828]/5 p-3 text-center">View more →</div>
        </div>   
    </div>
    </>
    
    )
}

export default Main