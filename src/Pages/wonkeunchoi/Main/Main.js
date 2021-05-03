import React from 'react';
import Section from './Components/Section/Section';
import Nav from './Components/Nav/Nav';
import './Main.scss';
import './Components/Nav/Nav.scss';
import './Styles/reset.scss';
import './Styles/btn_font.scss';
//import PropTypes from 'prop-types';

//import { Link } from 'react-router-dom';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      color: 'red',
    };
  }

  render() {
    return (
      <main className="Main_wonkeunchoi">
        <Nav titleColor={this.state.color} />
        <div className="top_emtied_box" />

        <Section />
      </main>
    );
  }
}

export default Main;
