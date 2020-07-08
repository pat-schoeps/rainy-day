import React from 'react'
import Head from 'next/head'
import "../stylesheets/curves.scss";
import Rain from '../components/Rain'


const Curves = () => (
  <div className="Inner-Container Page-Curves">
    <Head>
      <title>Home</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>
    <Rain/>
    <img src="/static/curves.svg" alt="" className="curves" />
  </div>
)

export default Curves
