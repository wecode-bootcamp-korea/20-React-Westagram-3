import React from 'react';
import Section from './Components/Section/Section';
import Nav from './Components/Nav/Nav';
import './Main.scss';
import './Components/Nav/Nav.scss';
import './Styles/reset.scss';
import './Styles/btn_font.scss';

//import { Link } from 'react-router-dom';

class Main extends React.Component {
  render() {
    return (
      <main className="Main">
        <Nav />
        <div className="top_emtied_box" />

        <Section />
      </main>
    );
  }
}

export default Main;
