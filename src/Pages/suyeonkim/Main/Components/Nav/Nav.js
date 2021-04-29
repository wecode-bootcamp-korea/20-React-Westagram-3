import React from 'react';
import MyStateNav from './MyStateNav/MyStateNav';
import './Nav.scss';

class Nav extends React.Component {
  render() {
    return (
      <nav className="navBar">
        <header className="navBar__header">
          <i className="fab fa-instagram"></i>
          <span className="header__title">Westagram</span>
        </header>
        <div className="navBar__search">
          <div className="navBar__searchBar">
            <div className="navBar__search-icon">
              <i className="fas fa-search"></i>
            </div>
            <input type="text" placeholder="검색" className="nav__searchBar" />
          </div>
          <ul className="search__people__container profile__nav__showHide"></ul>
        </div>
        <div className="navBar__myState">
          <img alt="explore__button" src="/images/suyeonkim/explore.png" />
          <img alt="mystate__button" src="/images/suyeonkim/heart.png" />
          <div className="profile__btn">
            <img
              alt="my_image"
              src="/images/suyeonkim/profile.png"
              className="profile__navBtn"
            />
            <MyStateNav />
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
