import App from 'next/app';
import React from 'react';
import "../stylesheets/layout.scss";

class AppContainer extends App {
  render () {
    const { Component, pageProps } = this.props;
    return (
      <div className="App-Container">
        <Component {...pageProps} />
      </div>
    )
  }
}

export default AppContainer;