import React from 'react'
import Head from 'next/head'
import "../stylesheets/animate.scss";

import dynamic from 'next/dynamic'

const Animation = dynamic(
  () => import("../components/Animation"),
  { ssr: false }
)


//import { TweenMax, TimelineMax, DrawSVGPlugin } from "gsap/TweenMax";
//import TweenMax from "gsap/TweenMax";



class Animate extends React.Component {

  render () {

    return (
      <div className="Inner-Container Page-Animate">
        <Head>
          <title>Animate</title>
          <link rel='icon' href='/favicon.ico' />
        </Head>

        <Animation />
      </div>
    )
  }
}
  


export default Animate
