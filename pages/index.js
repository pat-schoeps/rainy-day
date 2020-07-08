import React from 'react'
import Head from 'next/head'
import Rain from '../components/Rain'

const Home = () => (
  <div className="Inner-Container Page-Main">
    <Head>
      <title>Home</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>

    <Rain />

  </div>
)

export default Home
