import React from 'react';
import './Nav.scss';

class Nav extends React.Component {
  constructor() {
    super();

    this.state = {
      searchValue: '',
    };
  }

  // handleInput = e => {
  //   const { name, value } = e.target;
  //   this.setState({
  //     [name]: value,
  //   });
  // };

  preventDefault = e => {
    e.preventDefault();
  };

  searchInNav = e => {
    const { name, searchValue } = e.target;
    this.setState({
      [name]: searchValue,
    });
    console.log(searchValue);
  };
  render() {
    const { searchValue } = this.state;
    return (
      <nav className="navGaramsong">
        <div className="navContainer">
          <div className="logoContainer">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                alt="logo"
                className="logoImg"
                src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png"
              />
            </a>
          </div>
          <form className="searchContainer" onSubmit={this.preventDefault}>
            <input
              className="searchBar"
              type="text"
              placeholder="검색"
              name="searhValue"
              key={searchValue}
              onChange={this.searchInNav}
            />
          </form>
          <div className="iconContainer">
            <a className="navIcon" href="#">
              <img
                alt="profile"
                className="navIconImg"
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
              />
            </a>
            <a className="navIcon" href="#">
              <img
                alt="profile"
                className="navIconImg"
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
              />
            </a>
            <a className="navIcon" href="#">
              <img
                alt="profile"
                className="navIconImg"
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
              />
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
