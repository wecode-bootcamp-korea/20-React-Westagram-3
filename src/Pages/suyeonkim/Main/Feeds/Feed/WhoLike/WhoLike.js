import React from 'react';
import './WhoLike.scss';

class WhoLike extends React.Component {
  render() {
    return (
      <div className="feed__whoLike">
        <img alt="feed__like" src="/images/suyeonkim/whoLike.png" />
        <div className="who-like__info">
          <span className="feed__who-like__name">Wecode</span>님 외 36명이
          좋아합니다
        </div>
      </div>
    );
  }
}

export default WhoLike;
