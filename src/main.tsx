const Main= () => {
    const contents = [
        {
            topic: 'コーヒーミル',
            title: 'ニトリのコーヒーミルの評価「意外と使える」ニトリのコーヒーミルの評価「意外と使える」',
            text: 'お値段以上ニトリお値段以上ニトリお値段以上ニトリお値段以上ニトリお値段以上ニトリお値段以上ニトリお値段以上ニトリお値段以上ニトリお値段以上ニトリお値段以上ニトリお値段以上ニトリ',
            date: '1999年4月12日'
        },


        {id: 2, topic: 'コーヒードリッパー', title: '', text: '', date: ''},
        {id: 3, topic: 'コーヒーメーカー', title: '', text: '', date: ''},
        {id: 4, topic: 'コーヒーカップ', title: '', text: '', date: ''},
        {id: 5, topic: 'コーヒーをいれよう', title: '', text: '', date: ''},
        {id: 6, topic: 'コーヒー通販', title: '', text: '', date: ''}
    ];
    return (
    <>
    <div className="pt-20"></div>
    <div className='max-w-4xl m-auto'>
        <div className='text-white font-thin border-b-2 w-16 sticky top-20 z-40'>Recent</div>
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
                        <div className='my-2 text-'></div>
                    </div>
                );
            })}
        </div>
    </div>
    <div className="mt-7"></div>
    <div className='max-w-4xl m-auto'>
        <div className='text-white font-thin border-b-2 w-16 sticky top-20 z-40'>Cafe</div>
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
        <div className='text-white font-thin border-b-2 w-16 sticky top-20 z-40'>Tools</div>
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