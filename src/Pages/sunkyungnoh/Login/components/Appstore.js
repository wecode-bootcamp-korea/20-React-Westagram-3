import React from 'react';
import { Link } from 'react-router-dom';
import './Appstore.scss';

class Appstore extends React.Component {
  render() {
    return (
      <div className="appStore">
        <p>앱을 다운로드하세요.</p>
        <div className="appStoreBtn">
          <Link to="/Main-sunkyungnoh">
            <img
              alt="button"
              src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_korean-ko.png/4a5c9d62d51b.png"
            />
          </Link>
          <img
            onClick={this.goToMain}
            alt="button"
            src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_korean-ko.png/f155b664a93b.png"
          />
        </div>
      </div>
    );
  }
}

export default Appstore;
