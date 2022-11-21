const Main= () => {
    const contents = ['card1', 'card2', 'card3', 'card4', 'card5'];
    return (
    <>
    <div className='pt-16 max-w-4xl bg-yellow-300 flex flex-wrap justify-around m-auto'>
        
        {contents.map((content,index) => {
            return(
                <div className='bg-gradient-to-r from-amber-900 to-orange-500 border w-[370px] h-40 rounded-2xl mt-10'>
                    
                </div>
            );
        })}
    </div>
    </>
    
    )
}

export default Main