

const Footer= () => {
    return (
    <div className='mt-12'>
        <div className='fixed bottom-[1vw] left-[6.5vw] -z-10'>
            ideas --------&gt;
            <a href="https://yasudatakahiro.com" target="_blank" rel="noopener noreferrer">yasudatakahiro.com</a>
            <a href="https://www.humax-cinema.co.jp/ikebukuro/" target="_blank" rel="noopener noreferrer">, humax-cinema.co.jp</a>
            <a href="https://tatsuyakitani.com" target="_blank" rel="noopener noreferrer">, tatsuyakitani.com</a>
            {/* 「, 」改善 */}
        </div>
        <div className='fixed bottom-[1vw] right-[6.5vw] -z-10'>
            {/* footer右端内容 */}
        </div>
    </div>
    )
}

export default Footer