const Main= () => {
    const contents = ['card1', 'card2', 'card3', 'card4', 'card5', 'card6'];
    return (
    <>
    <div className='pt-16 max-w-4xl m-auto'>
        <div className='text-white font-thin border-b-2 w-16 sticky top-20'>Recent</div>
        <div className="flex flex-wrap justify-around">
            {contents.map((content,index) => {
                return(
                    <div className='bg-gradient-to-r from-amber-900 to-orange-500 border-2
                                    w-[370px] h-40 rounded-2xl mt-10 p-4'>
                        <img className='object-cover w-32 h-32 rounded-2xl' src="./blueberry.jpg" alt="blueberry"/>
                    </div>
                );
            })}
        </div>
    </div>
    <div className='max-w-4xl m-auto'>
        <div className='text-white font-thin border-b-2 w-16 sticky top-20 pt-6'>Okini</div>
        <div className="flex flex-wrap justify-around">
            {contents.map((content,index) => {
                return(
                    <div className='bg-gradient-to-r from-amber-900 to-orange-500 border-2
                                    w-[370px] h-40 rounded-2xl mt-10'>
                        
                    </div>
                );
            })}
        </div>
    </div>
    </>
    
    )
}

export default Main