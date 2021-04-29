import React from 'react';
import './MyStateNav.scss';

class MyStateNav extends React.Component {
  render() {
    return (
      <section className="profile__nav profile__nav__showHide">
        <ul className="profile__nav__lists">
          <li className="profile__nav__list">
            <i className="far fa-user-circle"></i>
            <div className="profile__nav__listName">프로필</div>
          </li>
          <li className="profile__nav__list">
            <i className="far fa-bookmark"></i>
            <div className="profile__nav__listName">저장됨</div>
          </li>
          <li className="profile__nav__list">
            <i className="fas fa-cog"></i>
            <div className="profile__nav__listName">설정</div>
          </li>
        </ul>
        <div className="logOut__btn">로그아웃</div>
      </section>
    );
  }
}

export default MyStateNav;
