import React from 'react'
import "../stylesheets/rain.scss";


class Rain extends React.Component {
  yBottomBound = 0;
  yTopBound = 2000;
  layers = [
    {
      id: "rain-bottom-layer",
      length: 35,
      count: 600,
    },
    {
      id: "rain-top-layer",
      length: 4,
      count: 400,
    },
    {
      id: "rain-top-layer-2",
      length: 45,
      count: 400,
    },
    {
      id: "rain-bottom-layer-2",
      length: 35,
      count: 600,
    },
  ]

  render() {
    return (
      <div className="Rain-Container">
        {this.renderLayers()}
      </div>
    )
  }

  renderLayers = () => {
    return this.layers.map((layer, i) => {
      return (
        <div key={i} className="inner-rain-container" id={layer.id}>
          {this.renderLayer(layer.length, layer.count)}
        </div>
      )
    });
  }

  renderLayer = (dropLength, count) => {
    //<line x1="10" x2="50" y1="110" y2="150" stroke="orange" stroke-width="5"/>
    //<ellipse cx="6" cy="1009.5" rx="6" ry="5.5"/>
    return Array.from({ length: count }).map((xi, i) => {
      const x = this.randomize(0, 100);
      const y = this.randomize(this.yBottomBound, this.yTopBound);

      return this.renderShape(i, x, y, 1, dropLength)
    });
  }

  renderShape = (i, x, y, strokeWidth, strokeLength) => {
    const style = {
      left: x + "VW",
      top: y,
      width: strokeWidth,
      height: strokeLength
    }

    return (
      <div
        key={i}
        style={style}
        className="drop"
      />
    )
  }

  randomize(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}

export default Rain