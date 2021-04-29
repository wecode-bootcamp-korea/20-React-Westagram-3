import React from 'react';
import { Link } from 'react-router-dom';
import './Main.scss';
import '../../../Styles/seyongyun/common.scss';
import Nav from '../Main/Components/nav/Nav';
import Feed from '../Main/Components/feed/Feed';
import Aside from '../Main/Components/aside/Aside';

class MainSeyongyun extends React.Component {
  render() {
    return (
      <>
        <Nav />
        <main className="mainArea">
          <Feed />
          <Aside />
        </main>
      </>
    );
  }
}

export default MainSeyongyun;
