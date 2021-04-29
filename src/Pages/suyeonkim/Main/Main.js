import React from 'react';
import Nav from './Components/Nav/Nav';
import Feeds from './Feeds/Feeds';
import Aside from './Aside/Aside';
import './Main.scss';

class Main extends React.Component {
  render() {
    return (
      <>
        <Nav />
        <main className="main-page">
          <Feeds />
          <Aside />
        </main>
      </>
    );
  }
}

export default Main;
