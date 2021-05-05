import React from 'react';
import Footer from './Footer';
import './RightBox.scss';

class RightBox extends React.Component {
  render() {
    return (
      <aside className="rightBoxGaramsong">
        <div className="myProfileBox">
          <div className="profilePhoto">
            <img
              alt="profile"
              className="profileImgRadius"
              src="https://instagram.ficn1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/22711069_317709135365037_7962356006522978304_n.jpg?tp=1&_nc_ht=instagram.ficn1-1.fna.fbcdn.net&_nc_ohc=jo6OZE7d6KEAX9PfsAO&edm=AIQHJ4wAAAAA&ccb=7-4&oh=7a1c9fed4ff9e5efe53ee0bab6485dbb&oe=60A59B41&_nc_sid=7b02f1"
            />
          </div>
          <div className="profileName">
            <div className="nameText">
              <p className="userId">galmi.song</p>
              <p className="userName">송가람</p>
            </div>
            <button className="change rightButton">전환</button>
          </div>
        </div>
        <div className="recommendBox">
          <div className="recommendTitleBox">
            <div className="title">회원님을 위한 추천</div>
            <div className="change seeAll">모두 보기</div>
          </div>
          <div className="otherUserBox">
            <div className="profilePhoto">
              <img
                alt="profile"
                className="profileImgRadius"
                src="https://instagram.ficn1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/22711069_317709135365037_7962356006522978304_n.jpg?tp=1&_nc_ht=instagram.ficn1-1.fna.fbcdn.net&_nc_ohc=jo6OZE7d6KEAX9PfsAO&edm=AIQHJ4wAAAAA&ccb=7-4&oh=7a1c9fed4ff9e5efe53ee0bab6485dbb&oe=60A59B41&_nc_sid=7b02f1"
              />
            </div>
            <div className="profileName">
              <div className="nameText">
                <p className="userId">galmi.song</p>
                <p className="userName">송가람</p>
              </div>
              <button className="change rightButton">전환</button>
            </div>
          </div>
        </div>
        <Footer />
      </aside>
    );
  }
}

export default RightBox;
