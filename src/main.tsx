import Card_contents from './jsonfile/card_data.json';
import Hashtags from './jsonfile/tag_data.json';
const Main= () => {
    const contents = Card_contents;
    const hashtags = Hashtags;
    contents.map((content, _) => {
        while(content.text.length > 88){
            content.text = content.text.slice( 0, -1 );
        }
    })
    
    return (
    <>
    <div className="flex flex-col items-center w-screen">
        <div className="m-8">
            <div className='w-[24rem] h-[14rem] grayscale hover:grayscale-0 duration-700'>
                <img className='pointer-events-none' src='./coffee_image/img_04.jpg' alt='main_visual' />
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
                        <div className="hover:opacity-70 drop-shadow-[3px_3px_3px_rgba(0,0,0,0.25)] duration-200 w-[24rem] h-[34rem] bg-white" key={index}>
                            <div className='flex flex-col items-center'>
                                <img className='object-cover w-[24rem] h-[18rem]' src={content.image} alt="画像がないらしいです"/>
                                <div className="w-[24rem] h-[16rem]">
                                    {content.text.length !== 0
                                        ?
                                        <>
                                        <div className="p-4">
                                            <div className="font-jost text-sm">DailyBlog</div>
                                        </div>
                                        <div className="p-6 pt-0">
                                            <div className="text-lg leading-6 font-bold tracking-wider">{content.title}</div>
                                        </div>
                                        <div className="text-[.7rem] p-4 pt-0">{content.text}...</div>
                                        <div className="text-[.5rem] text-right p-4 pt-0">{content.date}</div>
                                        <div className='w-24 border-[.01rem] border-[#282828]'></div>
                                        </>
                                        :
                                        <div className='p-4 font-jost'>Comming Soon...</div>
                                    }
                                </div>
                                
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="flex flex-col items-center">
                <div className="hover:bg-[#282828]/30 duration-150 w-[24rem] m-auto mt-5 font-jost border-[#282828] border-[.01rem] bg-[#282828]/5 p-3 text-center cursor-pointer">View more →</div>
                <div className="border-[#282828] border-[.01rem] w-[80vw] m-5"></div>
            </div>

            <div className="max-w-4xl">
                <div className="flex flex-row flex-wrap justify-center">
                    {hashtags.map((content, index) => {
                        return(
                            <div className="flex flex-row items-center m-1 p-[.1rem] border-[#282828] rounded-md font-jap bg-[#282828]/20" key={index}>
                                    #{content.tagname}
                                    <div className="font-jost text-sm pt-[.2rem]">
                                        ({content.total})
                                    </div>
                            </div>
                        );
                    })}
                </div>
            </div> 
        </div>
    </div>
    </>
    
    )
}

export default Main