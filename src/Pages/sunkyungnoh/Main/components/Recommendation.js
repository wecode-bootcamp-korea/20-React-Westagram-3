import React from 'react';

class Recommendation extends React.Component {
  render() {
    return (
      <div className="recommendation">
        <img
          alt="userProfile"
          src="https://raw.githubusercontent.com/celline1637/1/main/%ED%88%AC%EB%AA%85%EA%B3%B0.png"
        />
        <div className="userInfo">
          <p>celline2508</p>
          <p className="userMessage">Instagram 신규 가입</p>
        </div>
        <button aria-label="팔로우">팔로우</button>
      </div>
    );
  }
}

export default Recommendation;
