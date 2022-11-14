import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../src/1header'
import Main_visual from '../src/2main_visual'
import Intro from '../src/3intro'
import Footer from '../src/99footer'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <Main_visual/>
      <Intro/>
      <Footer/>
    </div>
  )
}

export default Home
