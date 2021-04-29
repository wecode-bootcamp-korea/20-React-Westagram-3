import React from 'react';
import UserProfileBox from './UserProfileBox';
import Recommendation from './Recommendation.js';
import Footer from './Footer';
import './MainRight.scss';

class MainRight extends React.Component {
  render() {
    return (
      <aside className="main-right">
        <UserProfileBox />
        <div className="recommendTitle">
          <span>회원님을 위한 추천</span>
          <span>모두 보기</span>
        </div>
        <Recommendation />
        <Recommendation />
        <Recommendation />
        <Recommendation />
        <Footer />
      </aside>
    );
  }
}

export default MainRight;
