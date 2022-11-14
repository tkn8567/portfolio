import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/header/header'
import Main_visual from '../components/main_visual/main_visual'
import Intro from '../components/intro/intro'
import Footer from '../components/footer/footer'

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
