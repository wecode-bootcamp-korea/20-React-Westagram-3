import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Nav.scss';

class Nav extends React.Component {
  goToLogin = () => {
    this.props.history.push('/Login-sunkyungnoh');
  };

  render() {
    return (
      <nav>
        <img
          alt="logo"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png"
          onClick={this.goToLogin}
        />
        <div className="searchBar">
          <input type="text" name="search" id="search" placeholder="검색" />
          <label className="search" htmlFor="search">
            <img alt="search icon" src="/images/sunkyungnoh/dm.png" />
          </label>
        </div>
        <div className="linksOfMenu">
          <Link to="/Main-sunkyungnoh">
            <img aria-label="홈" src="/images/sunkyungnoh/home.png" />
          </Link>
          <a
            href="https://www.instagram.com/direct/inbox/"
            target="_blank"
            rel="noreferrer"
          >
            <img aria-label="direct" src="/images/sunkyungnoh/dm.png" />
          </a>
          <a
            href="https://www.instagram.com/explore/"
            target="_blank"
            rel="noreferrer"
          >
            <img aria-label="좋아요" src="/images/sunkyungnoh/heart.png" />
          </a>
          <button>
            <i aria-label="활동피드" className="far fa-heart"></i>
          </button>
          <a href="https://www.instagram.com/">
            <img
              alt="userProfile"
              src="https://raw.githubusercontent.com/celline1637/1/main/%ED%88%AC%EB%AA%85%EA%B3%B0.png"
              className="menu userProfile"
            />
          </a>
        </div>
      </nav>
    );
  }
}

export default withRouter(Nav);
