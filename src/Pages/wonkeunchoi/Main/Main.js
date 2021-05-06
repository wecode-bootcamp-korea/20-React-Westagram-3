import React from 'react';
import Section from './Components/Section/Section';
import Nav from './Components/Nav/Nav';
import './Main.scss';
import './Components/Nav/Nav.scss';

import './Styles/btn_font.scss';
import './Styles/common.scss';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      color: 'red',
    };
  }

  render() {
    const { color } = this.state;
    return (
      <main className="Main_wonkeunchoi">
        <Nav titleColor={color} />
        <div className="top_emtied_box" />

        <Section />
      </main>
    );
  }
}

export default Main;
