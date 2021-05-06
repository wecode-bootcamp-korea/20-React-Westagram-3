import React from 'react';
import './MyStateNav.scss';

class MyStateNav extends React.Component {
  render() {
    return (
      <section className="profile__nav profile__nav__showHide">
        <ul className="profile__nav__lists">
          <li className="profile__nav__list">
            <div className="profile__nav__listName">프로필</div>
          </li>
          <li className="profile__nav__list">
            <div className="profile__nav__listName">저장됨</div>
          </li>
          <li className="profile__nav__list">
            <div className="profile__nav__listName">설정</div>
          </li>
        </ul>
        <div className="logout__btn">로그아웃</div>
      </section>
    );
  }
}

export default MyStateNav;
