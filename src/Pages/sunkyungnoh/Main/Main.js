import React from 'react';
import Nav from './components/Nav.js';
import Feeds from './components/Feeds.js';
import MainRight from './components/MainRight.js';

import './Main.scss';

class Main extends React.Component {
  render() {
    return (
      <div className="main">
        <Nav />
        <main>
          <Feeds />
          <MainRight />
        </main>
      </div>
    );
  }
}

export default Main;
