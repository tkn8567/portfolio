import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../src/header'
import Main from '../src/main'
import Footer from '../src/footer'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>洞｜Hibiki's CoffeeBlog</title>
        <link rel="icon" href="/coffee.jpg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Head>
      <div className='font-jap text-[#282828]'>
        <Header />
        <Main/>
        <Footer/>
      </div>
    </div>
  )
}

export default Home
