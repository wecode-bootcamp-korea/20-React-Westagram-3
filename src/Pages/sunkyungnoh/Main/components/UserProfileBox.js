import React from 'react';

class UserProfileBox extends React.Component {
  render() {
    return (
      <div className="userProfileBox">
        <img
          alt="userProfile"
          src="https://raw.githubusercontent.com/celline1637/1/main/%ED%88%AC%EB%AA%85%EA%B3%B0.png"
        />
        <div className="userInfo">
          <p>celline2508</p>
          <p className="userMessage">đđâ¨</p>
        </div>
        <button aria-label="ęłě  ě í">ě í</button>
      </div>
    );
  }
}

export default UserProfileBox;
