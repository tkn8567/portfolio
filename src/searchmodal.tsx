const SearchModal= () => {
    
    return (
    <>
    <div className="border rounded w-3/12 h-8 m-3 items-center flex flex-row cursor-pointer"
            onClick={(e) => e.stopPropagation()}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 m-1 ml-2 text-white">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
        <div className="text-white font-jost ml-2">search</div>
    </div>
    
    </>
    
    )
}

export default SearchModal