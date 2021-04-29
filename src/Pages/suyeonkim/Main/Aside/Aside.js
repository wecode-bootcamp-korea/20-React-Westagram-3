import React from 'react';
import MyInfo from './MyInfo/MyInfo';
import PeopleStory from './PeopleStory/PeopleStory';
import RecoPerson from './RecoPerson/RecoPerson';
import Footer from './Footer/Footer';
import './Aside.scss';

class Aside extends React.Component {
  render() {
    return (
      <aside className="aside__links">
        <MyInfo />
        <PeopleStory />
        <RecoPerson />
        <Footer />
      </aside>
    );
  }
}

export default Aside;
