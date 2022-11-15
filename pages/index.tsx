import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../src/header'
import Main from '../src/main'
import Footer from '../src/footer'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Head>
      <div className='w-[90vw] min-w-[600px] min-h-screen
                    text-base text-white font-light
                    px-[1.5vw] py-[1vw] relative'>
        <Header/>
        <Main/>
        <Footer/>
      </div>
    </div>
  )
}

export default Home
