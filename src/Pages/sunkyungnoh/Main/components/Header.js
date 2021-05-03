import React from 'react';
import './Header.scss';

class Header extends React.Component {
  render() {
    const { userId } = this.props;
    return (
      <header>
        <div className="userPic header"></div>
        <p className="userID">{userId}</p>
        <button>
          <div></div>
          <div></div>
          <div></div>
        </button>
      </header>
    );
  }
}

export default Header;
