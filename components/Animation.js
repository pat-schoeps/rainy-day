import React from 'react'
import Head from 'next/head'
import "../stylesheets/animate.scss";
//DrawSVGPlugin
import { gsap, TweenMax, TimelineMax } from "gsap";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin.js";

//import TweenMax from "gsap/TweenMax";



class Animation extends React.Component {

  constructor(props) {
    super(props);
    this.layerOne = React.createRef();
    this.layerTwo = React.createRef();
    this.layerThree = React.createRef();
  }

  componentDidMount = () => {
    gsap.registerPlugin(MorphSVGPlugin);

    //console.log(this.layerOne.current, "layer one")
    const tl = new TimelineMax({delay: 0.5});
    //console.log(this.layerTwo.current, "obj")
    tl.to("#one", 1, {morphSVG: "#two"})
    //tl.to("#two", 1, {morphSVG: "#four"}, "+=1")



  }

  render () {

    return (
      <div className="svg-outer">
        
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 206.83 234.54">
          <g id="Layer_2" data-name="Layer 2">
            <path id="one" class="cls-1" fill="#fff" d="M10.77 52.6c27.14-13.93 48.2-15.18 62-14 24.27 2.09 29.55 12 74 24 28.53 7.7 33.51 5.54 42 13 24 21.06 22.09 71.38 6 79-13.72 6.51-27-23.19-55-22-35 1.49-52 49.48-67 44-13.13-4.8-.43-41.78-20-80-11.27-22.01-28.77-35.77-42-44z" data-name="Layer 1"/>
            <path id="two" class="cls-1" fill="#fff" d="M21.27 54.1c7.53-11.59 36.44-51.71 85-54 32.16-1.51 74.07 13.53 80 39 6.62 28.43-37.7 43.34-38 82-.35 45.76 61.41 65.12 55 86-8.52 27.8-135.69 51.66-185-19-27.73-39.73-21.6-96.1 3-134z" data-name="Layer 2"/>
          </g>
        </svg>
      </div>
    )
  }
}
  


export default Animation
