

const Footer= () => {
    return (
    <footer className='mt-20'>
        <div className="max-w-xl m-auto">
            <div className="flex flex-wrap justify-between">
                <div className="w-72 flex justify-center">
                    <img className='object-cover w-[15rem] rounded-full' src="./coffee.jpg" alt="blueberry"/>
                </div>
                <div className="w-72 text-left text-[#282828] flex flex-col justify-center">
                    <div className='text-4xl font-lust'>Hibiki</div>
                    20年以上も飲めなかったコーヒーが飲めるようになったら、大学留年して、大家に追い出されて、野宿にハマってしまった。人生何が起こるかわからないね。
                </div>
            </div>
            <div className='text-neutral-500 font-thin font-jost text-center mt-7'>
                &copy; 2022 Uro. All Rights Reserved.
            </div>
        </div>
    </footer>
    
    )
}

export default Footer