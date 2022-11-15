import Header from '../src/1header'
import Footer from '../src/99footer'



const Base= () => {
    return (
    <div>
        <div className='w-[90vw] min-w-[600px] min-h-screen
                        text-base text-white font-light border-dotted border-2
                        px-8 py-4 relative'>
            <Header/>
            <Footer/>
        </div>
    </div>
    )
}

export default Base