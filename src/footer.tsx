

const Footer= () => {
    return (
    <footer className='mt-20'>
        <div className="max-w-2xl m-auto">
            <div className="flex flex-wrap justify-around">
                <div className="w-72">
                    <img className='object-cover w-full h-full rounded-full' src="./coffee.jpg" alt="blueberry"/>
                </div>
                <div className="w-72 text-left text-white self-center">
                    <div className='text-4xl font-bold italic'>Hibiki</div>
                    20年以上も飲めなかったコーヒーが飲めるようになったら、大学留年して、大家に追い出されて、野宿にハマってしまった。人生何が起こるかわからないね。
                </div>
            </div>
            <div className='text-neutral-500 font-thin text-center mt-7'>
                &copy; 2022 Noland. All Rights Reserved.
            </div>
        </div>
    </footer>
    
    )
}

export default Footer